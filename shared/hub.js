/* Renders the two menu levels from topics.js: the list of classes and the exercises of one class.
   Used by index.html and class.html. */
(function () {
  "use strict";

  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }

  function row(href, title, desc, meta) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = href;
    var t = document.createElement("span");
    t.className = "topic-title";
    t.textContent = title;
    a.appendChild(t);
    if (desc) {
      var d = document.createElement("p");
      d.className = "topic-desc";
      d.textContent = desc;
      a.appendChild(d);
    }
    var m = document.createElement("p");
    m.className = "topic-meta";
    m.textContent = meta;
    a.appendChild(m);
    li.appendChild(a);
    return li;
  }

  function topicsOf(classId) {
    return (window.TOPICS || []).filter(function (t) { return t.class === classId; });
  }

  window.PracticeHub = {
    classHref: function (id) { return "class.html?c=" + encodeURIComponent(id); },

    renderClasses: function (list) {
      (window.CLASSES || []).forEach(function (c) {
        var n = topicsOf(c.id).length;
        list.appendChild(row(window.PracticeHub.classHref(c.id), c.title, "", n ? plural(n, "exercise") : "No exercises yet"));
      });
    },

    // returns the class object, or null if the address has no valid ?c=
    currentClass: function () {
      var wanted = (new URLSearchParams(window.location.search).get("c") || "").toUpperCase();
      var found = null;
      (window.CLASSES || []).forEach(function (c) { if (c.id.toUpperCase() === wanted) found = c; });
      return found;
    },

    renderTopics: function (list, classId) {
      topicsOf(classId).forEach(function (t) {
        list.appendChild(row(t.path, t.title, t.desc, t.time));
      });
    }
  };
})();
