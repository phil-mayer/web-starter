# web-starter
Boilerplate repository serving as a web project starter, featuring Parcel bundling, SCSS, and PostCSS auto-prefixing. I use this starter for most small-scale sites. Per the [Parcel documentation](https://parceljs.org/assets.html), support for other asset types can be added trivially.

## Features
Out of the box, this repository is configured to support SCSS stylesheets, style auto-prefixing, and JavaScript [transpilation with Babel](https://parceljs.org/javascript.html#default-babel-transforms). The `.browserslistrc` file defines the transpilation target. Those familiar with Parcel may want to alter its hashing behavior or add multiple entry points.

## Upcoming Changes
- Add [commit message linting](https://github.com/conventional-changelog/commitlint).
- Add a `.babelrc` file to support `async` and `await` in JavaScript.
- Create a script to eject the cloned project from this repository.
