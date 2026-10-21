/* Practice engine. Reads window.TOPIC (see participles/data.js) and renders the exercise into #app.
   No dependencies, no network requests, nothing is stored. */
(() => {
  "use strict";

  const T = window.TOPIC;
  const Code = window.PracticeCode;
  const app = document.getElementById("app");
  const PRAISE = ["Correct!", "Right!", "Well done!", "Exactly!", "Yes!"];

  // ---------- small helpers ----------
  const append = (node, kid) => {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) kid.forEach((k) => append(node, k));
    else if (typeof kid === "string") node.appendChild(document.createTextNode(kid));
    else node.appendChild(kid);
  };

  const h = (tag, props, ...kids) => {
    const node = document.createElement(tag);
    Object.entries(props || {}).forEach(([k, v]) => {
      if (v == null || v === false) return;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? "" : String(v));
    });
    kids.forEach((kid) => append(node, kid));
    return node;
  };

  // **bold** and *italic* only; everything else is plain text
  const md = (str) => {
    const frag = document.createDocumentFragment();
    String(str).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).forEach((p) => {
      if (!p) return;
      // short highlighted bits (suffixes like **-ful**) must not break across lines
      if (p.startsWith("**")) frag.appendChild(h("strong", { class: p.length <= 18 ? "nb" : null, text: p.slice(2, -2) }));
      else if (p.startsWith("*")) frag.appendChild(h("em", { class: p.length <= 16 ? "nb" : null, text: p.slice(1, -1) }));
      else frag.appendChild(document.createTextNode(p));
    });
    return frag;
  };

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const normAns = (s) => String(s).toLowerCase().replace(/[.,;:!?"'’]/g, "").replace(/\s+/g, " ").trim();
  const pad = (n) => String(n).padStart(2, "0");
  const isoToday = () => { const d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
  const niceDate = (iso) => iso.split("-").reverse().join(".");
  const correctText = (it) => (it.type === "text" ? it.answers.join(" or ") : it.options[0]);

  // ---------- state ----------
  let S;
  let onDigit = null;

  const fresh = () => ({ mode: "main", queue: [], pos: 0, log: [], introFor: -1, total: 0, reviewed: false, card: null });

  const buildQueue = () => {
    const q = [];
    T.parts.forEach((part, pi) => {
      shuffle(part.items.map((it, ii) => ({ pi, ii, it }))).forEach((e) => q.push(e));
    });
    return q;
  };

  const show = (...nodes) => {
    while (app.firstChild) app.removeChild(app.firstChild);
    append(app, nodes);
    window.scrollTo(0, 0);
    const f = app.querySelector("[data-focus]");
    if (f) f.focus({ preventScroll: true });
  };

  document.addEventListener("keydown", (e) => {
    if (!onDigit || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (/^[1-9]$/.test(e.key)) onDigit(Number(e.key) - 1);
  });

  // ---------- screens ----------
  const intro = () => {
    S = fresh();
    onDigit = null;
    show(
      h("section", null,
        h("h1", { tabindex: "-1", "data-focus": "", text: T.title }),
        T.intro.map((t) => h("p", { class: "lede" }, md(t))),
        h("ul", { class: "part-list" },
          T.parts.map((p, i) => h("li", null,
            h("span", null, "Part " + (i + 1) + ": " + p.title),
            h("span", { class: "count", text: p.items.length + " questions" })))),
        h("button", { type: "button", class: "btn", onclick: start }, "Start")
      )
    );
  };

  const start = () => {
    S = fresh();
    S.queue = buildQueue();
    S.total = S.queue.length;
    go();
  };

  const go = () => {
    onDigit = null;
    if (S.pos >= S.queue.length) return showResults();
    const q = S.queue[S.pos];
    if (S.mode === "main" && S.introFor !== q.pi) {
      S.introFor = q.pi;
      return showPartIntro(q.pi);
    }
    showQuestion(q);
  };

  const showPartIntro = (pi) => {
    const part = T.parts[pi];
    show(
      h("section", null,
        h("p", { class: "progress-label", text: "Part " + (pi + 1) + " of " + T.parts.length }),
        h("h2", { tabindex: "-1", "data-focus": "", text: part.title }),
        h("div", { class: "rule" },
          h("h3", { text: "Remember" }),
          h("ul", null, part.rule.map((r) => h("li", null, md(r))))),
        h("p", { text: part.items.length + " questions." }),
        h("button", { type: "button", class: "btn", onclick: go }, "Start part " + (pi + 1))
      )
    );
  };

  const progress = (q) => {
    let label;
    if (S.mode === "main") {
      let inPart = 0;
      for (let i = 0; i <= S.pos; i++) if (S.queue[i].pi === q.pi) inPart++;
      label = "Part " + (q.pi + 1) + " of " + T.parts.length + ", " + T.parts[q.pi].title + ", question " + inPart + " of " + T.parts[q.pi].items.length;
    } else {
      label = "Practising your mistakes, question " + (S.pos + 1) + " of " + S.queue.length;
    }
    const pct = Math.round((S.pos / S.queue.length) * 100);
    return h("div", { class: "progress" },
      h("p", { class: "progress-label", text: label }),
      h("div", { class: "bar", role: "progressbar", "aria-label": "Progress", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(pct) },
        h("div", { class: "fill", style: "width:" + pct + "%" })));
  };

  const feedbackEl = (ok, it, note) => {
    const kids = [
      h("p", { class: "fb-head" }, h("span", { "aria-hidden": "true", text: ok ? "✓ " : "✗ " }), ok ? pick(PRAISE) : "Not quite.")
    ];
    if (!ok) {
      if (note) kids.push(h("p", null, md(note)));
      kids.push(h("p", null, "Correct answer: ", h("strong", { text: correctText(it) })));
    }
    kids.push(h("p", null, h("strong", { text: "Rule: " }), md(it.why)));
    return h("div", { class: "feedback " + (ok ? "ok" : "no"), role: "status" }, kids);
  };

  const showQuestion = (q) => {
    const part = T.parts[q.pi];
    const it = q.it;
    const isText = it.type === "text";
    let done = false;

    // the sentence, with a highlighter gap
    let gap = null;
    let qEl = null;
    if (it.q) {
      qEl = h("p", { class: "q" });
      const segs = it.q.split("___");
      append(qEl, md(segs[0]));
      if (segs.length > 1) {
        gap = h("span", { class: "gap", "aria-label": "gap", text: " " });
        qEl.appendChild(gap);
        append(qEl, md(segs.slice(1).join("___")));
      }
    }
    const fillGap = () => {
      if (!gap) return;
      gap.textContent = isText ? it.answers[0] : it.options[0];
      gap.classList.add("filled");
      gap.removeAttribute("aria-label");
    };

    const host = h("div", { class: "feedback-host" });
    const finish = (ok, note, given) => {
      done = true;
      onDigit = null;
      if (S.mode === "main") S.log.push({ pi: q.pi, ii: q.ii, ok, given });
      fillGap();
      const last = S.pos + 1 >= S.queue.length;
      const next = h("button", { type: "button", class: "btn", onclick: () => { S.pos++; go(); } }, last ? "See my results" : "Next");
      append(host, [feedbackEl(ok, it, note), h("div", { class: "actions" }, next)]);
      next.focus();
    };

    let input;
    let interaction;

    if (isText) {
      input = h("input", {
        type: "text", class: "answer", autocomplete: "off", autocapitalize: "off", autocorrect: "off",
        spellcheck: "false", enterkeyhint: "done", "aria-label": "Your answer", placeholder: "Type here"
      });
      const check = h("button", { type: "submit", class: "btn" }, "Check");
      interaction = h("form", {
        class: "typed",
        onsubmit: (e) => {
          e.preventDefault();
          if (done) return;
          const val = input.value;
          if (!normAns(val)) { input.focus(); return; }
          const ok = it.answers.some((a) => normAns(a) === normAns(val));
          input.disabled = true;
          check.disabled = true;
          input.classList.add(ok ? "ok" : "no");
          finish(ok, null, val.trim());
        }
      }, input, check);
    } else {
      const opts = shuffle(it.options.map((t, i) => ({ t, i })));
      const short = opts.every((o) => o.t.length <= 18);
      const buttons = opts.map((o, idx) => h("button", { type: "button", class: "opt" },
        h("span", { class: "key", "aria-hidden": "true", text: String(idx + 1) }),
        h("span", { text: o.t })));
      buttons.forEach((b, idx) => b.addEventListener("click", () => {
        if (done) return;
        const chosen = opts[idx];
        const ok = chosen.i === 0;
        buttons.forEach((bb, j) => {
          bb.disabled = true;
          if (opts[j].i === 0) {
            bb.classList.add("correct");
            bb.appendChild(h("span", { class: "sr-only", text: " (correct answer)" }));
          } else if (j === idx) {
            bb.classList.add("wrong");
            bb.appendChild(h("span", { class: "sr-only", text: " (your answer, wrong)" }));
          } else {
            bb.classList.add("dim");
          }
        });
        const note = !ok && it.wrong ? it.wrong[chosen.i] : null;
        finish(ok, note, chosen.t);
      }));
      onDigit = (i) => { if (!done && buttons[i]) buttons[i].click(); };
      interaction = h("div", { class: "options" + (short ? " short" : "") + (short && opts.length === 4 ? " four" : ""), role: "group", "aria-label": "Answer options" }, buttons);
    }

    show(
      h("section", null,
        progress(q),
        h("p", { class: "instruction", tabindex: "-1", "data-focus": "", text: part.instruction }),
        qEl,
        interaction,
        host
      )
    );
    if (isText) input.focus();
  };

  // ---------- results ----------
  const mistakeItem = (r) => {
    const part = T.parts[r.pi];
    const it = part.items[r.ii];
    const right = correctText(it);
    let qNode;
    if (it.q && it.q.includes("___")) {
      const segs = it.q.split("___");
      // drop the "(verb)" cue after the gap: the answer is filled in already
      const rest = segs.slice(1).join("___").replace(/^\s*\([^)]*\)/, "");
      qNode = h("p", { class: "m-q" }, md(segs[0]), h("strong", { class: "m-right", text: right }), md(rest));
    } else {
      qNode = h("p", { class: "m-q" }, md(it.q || part.instruction));
    }
    return h("li", null,
      qNode,
      it.q && it.q.includes("___") ? null : h("p", null, "Correct: ", h("strong", { class: "m-right", text: right })),
      h("p", { class: "m-given", text: "You chose: " + r.given }),
      h("p", null, h("strong", { text: "Rule: " }), md(it.why))
    );
  };

  const copyText = (text, statusEl) => {
    const legacy = () => {
      try {
        const ta = h("textarea", { readonly: true, class: "sr-only", "aria-hidden": "true" });
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        const okc = document.execCommand("copy");
        document.body.removeChild(ta);
        statusEl.textContent = okc ? "Copied." : "Could not copy. Please select the line and copy it.";
      } catch (e) {
        statusEl.textContent = "Could not copy. Please select the line and copy it.";
      }
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => { statusEl.textContent = "Copied."; }, legacy);
      } else legacy();
    } catch (e) { legacy(); }
  };

  const renderCard = (host, c, score, total) => {
    while (host.firstChild) host.removeChild(host.firstChild);
    const copyMsg = h("p", { class: "copy-msg no-print", role: "status" });
    append(host, [
      h("div", { class: "completion", id: "card" },
        h("h2", { text: c.name }),
        h("p", { text: T.title }),
        h("dl", null,
          T.class ? [h("dt", { text: "Class" }), h("dd", { text: T.class })] : null,
          h("dt", { text: "Score" }), h("dd", { text: score + " out of " + total }),
          h("dt", { text: "Date" }), h("dd", { text: niceDate(c.date) }),
          h("dt", { text: "Code" }), h("dd", { class: "code", text: c.code }))),
      h("p", { class: "fine no-print" }, "Show this card to your teacher, or copy the line below and send it."),
      h("code", { class: "line no-print", text: c.line }),
      h("div", { class: "actions no-print" },
        h("button", { type: "button", class: "btn secondary", onclick: () => copyText(c.line, copyMsg) }, "Copy line"),
        h("button", { type: "button", class: "btn secondary", onclick: () => window.print() }, "Print or save as PDF")),
      copyMsg
    ]);
  };

  const showResults = () => {
    onDigit = null;
    const score = S.log.filter((r) => r.ok).length;
    const total = S.total;
    const missed = S.log.filter((r) => !r.ok);
    const pctv = total ? score / total : 0;
    const verdict = pctv >= 0.9 ? "Excellent work." : pctv >= 0.7 ? "Good work." : "A good start. Practise your mistakes below.";

    const partRows = T.parts.map((p, pi) => {
      const rows = S.log.filter((r) => r.pi === pi);
      return h("li", null, h("span", { text: p.title }), h("span", { text: rows.filter((r) => r.ok).length + " of " + p.items.length }));
    });

    const cardHost = h("div", { class: "card-host" });
    const msg = h("p", { class: "form-msg", role: "alert" });
    const nameInput = h("input", { type: "text", id: "student-name", class: "answer", autocomplete: "name", maxlength: "40", required: true });
    const form = h("form", {
      class: "name-form no-print", novalidate: true,
      onsubmit: (e) => {
        e.preventDefault();
        const name = Code.clean(nameInput.value);
        if (name.length < 2) { msg.textContent = "Please enter your name (at least 2 letters)."; nameInput.focus(); return; }
        msg.textContent = "";
        const date = isoToday();
        const c = Code.line(T.id, name, score, total, date);
        c.date = date;
        S.card = c;
        renderCard(cardHost, c, score, total);
        form.style.display = "none";
        cardHost.querySelector("#card").scrollIntoView({ block: "center" });
      }
    },
      h("label", { for: "student-name", text: "Your name for the completion card" }),
      h("div", { class: "typed" }, nameInput, h("button", { type: "submit", class: "btn" }, "Create card")),
      msg
    );

    const reviewBtn = missed.length
      ? h("button", { type: "button", class: "btn secondary", onclick: () => {
          S.mode = "review";
          S.queue = shuffle(missed.map((r) => ({ pi: r.pi, ii: r.ii, it: T.parts[r.pi].items[r.ii] })));
          S.pos = 0;
          S.reviewed = true;
          go();
        } }, "Practise my mistakes")
      : null;

    S.mode = "main";
    show(
      h("section", null,
        h("h2", { tabindex: "-1", "data-focus": "", class: "no-print", text: "Your result" }),
        h("p", { class: "score no-print" }, String(score), h("small", { text: " out of " + total })),
        h("p", { class: "no-print", text: verdict }),
        S.reviewed ? h("p", { class: "fine no-print", text: "You practised your mistakes. Your score above stays the same." }) : null,
        h("ul", { class: "part-scores no-print" }, partRows),
        missed.length ? h("div", { class: "no-print" },
          h("h3", { text: "Your mistakes" }),
          h("ul", { class: "mistakes" }, missed.map(mistakeItem)),
          h("div", { class: "actions" }, reviewBtn)) : h("p", { class: "no-print", text: "No mistakes. Well done!" }),
        form,
        cardHost,
        h("div", { class: "actions no-print" }, h("button", { type: "button", class: "btn secondary", onclick: intro }, "Start again"))
      )
    );
    if (S.card) { form.style.display = "none"; renderCard(cardHost, S.card, score, total); }
  };

  intro();
})();
