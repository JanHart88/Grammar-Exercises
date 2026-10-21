/* The classes and exercises shown on the hub.
   - CLASSES: the first menu level (index.html). `id` is what exercises refer to.
   - TOPICS:  the exercises. Each belongs to one class.
   To add an exercise: copy an existing exercise folder, edit its data.js (id, class, questions),
   then add an entry below. `id` and `class` must match the ones in the exercise's data.js. */
window.CLASSES = [
  { id: "6A", title: "Class 6A" },
  { id: "7A", title: "Class 7A" }
];

window.TOPICS = [
  {
    id: "participles",
    class: "6A",
    title: "Participles",
    desc: "-ing and -ed adjectives, participle clauses, and short relative clauses. Goes with the handout Participles – Step by Step.",
    path: "participles/",
    time: "about 15 minutes"
  },
  {
    id: "7a-word-formation-1",
    class: "7A",
    title: "Word Formation I",
    desc: "Forming words with suffixes: word classes, spelling, and noun or adjective. Goes with the Spot on language section.",
    path: "7a-word-formation-1/",
    time: "about 15 minutes"
  }
];
