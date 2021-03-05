# phil-mayer/web-starter

Boilerplate repository serving as a web project starter, featuring Parcel bundling, SCSS, and PostCSS auto-prefixing. I use this starter for most small-scale sites. Per the [Parcel documentation](https://parceljs.org/assets.html), support for other asset types can be added trivially.

## Features

Out of the box, this repository is configured to support SCSS stylesheets, style auto-prefixing, and JavaScript [transpilation with Babel](https://parceljs.org/javascript.html#default-babel-transforms). The `.browserslistrc` file defines the transpilation target. Those familiar with Parcel may want to alter its hashing behavior or add multiple entry points.

## Requirements

- Node.JS 12.x
- Yarn

## Setup and Usage

To clone the repository and install all dependencies, run:

```(sh)
git clone https://github.com/phil-mayer/web-starter.git
cd web-starter
yarn
```

Afterwards, run `yarn run-dev` to start a development server and watch for changes. Run `yarn build` to generate the production assets.

## Upcoming Changes

- Create a script to eject the cloned project from this repository.

## Suggested Plugins

To extend the functionality of this repo, I've found that the following dependencies have often met my needs:

- Carousels: [Glide.js](https://www.npmjs.com/package/@glidejs/glide)
- Lazy loading images/videos: [parcel-plugin-data-src](https://www.npmjs.com/package/parcel-plugin-data-src)
- Various, but mostly debouncing: [lodash](https://www.npmjs.com/package/lodash)
