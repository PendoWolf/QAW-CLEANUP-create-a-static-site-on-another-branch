# qawolf-pendo-static-site-branch

QA Wolf fixture for the Pendo flow "Create A Static Site On Another Branch".

Harbor Notes is a static site of plain HTML, CSS and JavaScript, with no
package.json, no build step and no server. Every page loads the shared
`styles.css` and `app.js`.

- `main` holds four pages: `index.html`, `features.html`, `pricing.html` and
  `about.html`.
- `develop` is `main` plus one more page, `contact.html`, which exists only on
  that branch.

The flow picks `develop` in onboarding, so Novus's install must reach
`contact.html` too.
