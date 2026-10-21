/* Completion codes.
   A short code is derived from name + topic + score + date. The teacher can paste the
   student's summary line into verify.html to check that it matches.
   This is a light check against casual edits (e.g. changing the score in a screenshot).
   It is NOT secure: the method is visible in this file. */
(function (root) {
  "use strict";

  var SALT = "grammar-practice-v1";
  var ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 32 symbols, no 0/O/1/I

  function clean(name) {
    return String(name).replace(/\|/g, " ").replace(/\s+/g, " ").trim().slice(0, 40);
  }

  function norm(name) {
    return clean(name).normalize("NFC").toLowerCase();
  }

  function fnv(str, seed) {
    var h = seed >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  function enc(x) {
    var out = "";
    for (var i = 0; i < 4; i++) out += ALPHABET.charAt((x >>> (5 * i)) & 31);
    return out;
  }

  function make(topic, name, score, total, date) {
    var s = [topic, norm(name), score, total, date, SALT].join("|");
    return enc(fnv(s, 2166136261)) + "-" + enc(fnv(s + "#", 0x9747b28c));
  }

  function line(topic, name, score, total, date) {
    var n = clean(name);
    var code = make(topic, n, score, total, date);
    return { name: n, code: code, line: [n, topic, score + "/" + total, date, code].join(" | ") };
  }

  function parse(text) {
    var parts = String(text).split("|").map(function (p) { return p.trim(); });
    if (parts.length !== 5) return null;
    var m = /^(\d{1,3})\s*\/\s*(\d{1,3})$/.exec(parts[2]);
    if (!m || !/^\d{4}-\d{2}-\d{2}$/.test(parts[3])) return null;
    return { name: parts[0], topic: parts[1], score: Number(m[1]), total: Number(m[2]), date: parts[3], code: parts[4].toUpperCase() };
  }

  function check(p) {
    return make(p.topic, p.name, p.score, p.total, p.date) === p.code;
  }

  root.PracticeCode = { clean: clean, make: make, line: line, parse: parse, check: check };
})(window);
