# Grammar practice

Short interactive grammar exercises for class. Plain HTML, CSS and JavaScript. No build step, no external requests, nothing is stored or sent anywhere.

The menu has three levels: **hub** (pick your class) > **class page** (pick an exercise) > **exercise**.

## Publish on GitHub Pages

1. Put all files of this folder in the root of a repository.
2. In the repository: **Settings > Pages > Build and deployment > Deploy from a branch**, choose `main` and `/ (root)`.
3. After a minute the hub is online at `https://<your-username>.github.io/<repository>/`.

Permalinks you can hand out:

- A class: `.../class.html?c=7A` (the letters are not case sensitive)
- An exercise: `.../7a-word-formation-1/`

All links inside the site are relative, so it also works from a school drive or when you open `index.html` directly.

## Structure

```
index.html            hub: lists the classes
class.html            class page: lists the exercises of one class (?c=6A)
topics.js             the classes and the list of exercises
verify.html           teacher page: check completion codes
shared/hub.js         builds the two menu levels from topics.js
shared/engine.js      the exercise engine (same for every exercise)
shared/style.css      shared look
shared/code.js        completion code
participles/          one exercise (class 6A)
  index.html          tiny page that loads the engine
  data.js             all questions and explanations
7a-word-formation-1/  another exercise (class 7A)
1has-word-order-1/    another exercise (class 1.HAS)
```

## Add a class

Add one line to `CLASSES` in `topics.js`, for example `{ id: "4A", title: "Class 4A" }` (an id such as `1.HAS` works too). The hub and the class page pick it up automatically. No new files are needed. Classes without exercises are listed as "No exercises yet", and their class link already works.

## Add an exercise

1. Copy an exercise folder and rename it. Starting the name with the class helps, for example `7a-conditionals-1/` or `1has-greetings/`.
2. In the new folder's `data.js`, change `id`, `class`, `title`, the intro and the parts. The format is explained at the top of `participles/data.js`.
3. In the new folder's `index.html`, change the `<title>` and the link in the header (`class.html?c=7A` and `Class 7A`).
4. Add an entry to `TOPICS` in `topics.js` (`id` and `class` must match `data.js`).
5. Commit and push. The class page shows the new exercise automatically.

Question types: multiple choice with one correct answer (written **first** in the `options` list; the engine shuffles them) and typed answers with a list of accepted spellings.

Keep an exercise's `id` and folder name once students have used it: the `id` is part of the completion code, and the folder name is the link they may have saved.

## Completion card and tracking

At the end a student enters their name and gets a completion card with name, class, score, date and a short code, plus one line of text they can copy and send you (for example in Teams).

- Open `verify.html`, paste the lines you received (one per line) and it checks that name, score and date match the code.
- The page cannot send anything to you by itself, because it has no server. That is also why no data leaves the student's device.
- The code is only a light check against casual edits (such as changing the score in a screenshot). It is not secure, because the method is visible in `shared/code.js`. If you ever need reliable tracking, the exercise would have to submit results to something like a Microsoft Form or a small backend.
- If you change `SALT` in `shared/code.js`, old codes stop matching.
