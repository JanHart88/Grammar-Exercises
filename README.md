# Grammar practice

Short interactive grammar exercises for class. Plain HTML, CSS and JavaScript. No build step, no external requests, nothing is stored or sent anywhere.

## Publish on GitHub Pages

1. Put all files of this folder in the root of a repository.
2. In the repository: **Settings > Pages > Build and deployment > Deploy from a branch**, choose `main` and `/ (root)`.
3. After a minute the hub is online at `https://<your-username>.github.io/<repository>/`.
   Each exercise has its own permalink, for example `.../participles/`.

All links inside the site are relative, so it also works from a school drive or when you open `index.html` directly.

## Structure

```
index.html            hub page (lists the topics in topics.js)
topics.js             the list of exercises
verify.html           teacher page: check completion codes
shared/engine.js      the exercise engine (same for every topic)
shared/style.css      shared look
shared/code.js        completion code
participles/
  index.html          tiny page that loads the engine
  data.js             all questions and explanations for this topic
```

## Add a new topic

1. Copy the `participles/` folder and rename it, for example `conditionals/`.
2. Edit `data.js` in the new folder: change `id`, `title`, the intro and the parts. The format is explained at the top of the file.
3. Add an entry to `topics.js` (the `id` must match the one in `data.js`).
4. Commit and push. The hub shows the new topic automatically.

Question types: multiple choice with one correct answer (written **first** in the `options` list; the engine shuffles them) and typed answers with a list of accepted spellings.

## Completion card and tracking

At the end a student enters their name and gets a completion card with name, score, date and a short code, plus one line of text they can copy and send you (for example in Teams).

- Open `verify.html`, paste the lines you received (one per line) and it checks that name, score and date match the code.
- The page cannot send anything to you by itself, because it has no server. That is also why no data leaves the student's device.
- The code is only a light check against casual edits (such as changing the score in a screenshot). It is not secure, because the method is visible in `shared/code.js`. If you ever need reliable tracking, the exercise would have to submit results to something like a Microsoft Form or a small backend.
- If you change `SALT` in `shared/code.js`, old codes stop matching.
