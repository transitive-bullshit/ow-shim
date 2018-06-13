# ow-shim

> Drop-in replacement to make [ow](https://github.com/sindresorhus/ow) validation library a noop in production.

[![NPM](https://img.shields.io/npm/v/ow-shim.svg)](https://www.npmjs.com/package/ow-shim) [![Build Status](https://travis-ci.com/transitive-bullshit/ow-shim.svg?branch=master)](https://travis-ci.com/transitive-bullshit/ow-shim) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ow-shim
```

## Usage

There's no standard way to replace your usage of `ow` with `ow-shim` in production, but webpack's [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) config option works well.

Any `ow` statements will effectively be turned into no-ops.

You may also want to use this shim to cut down on browser bundle size.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
