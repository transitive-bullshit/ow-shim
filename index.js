'use strict'

const ow = new Proxy(function () { }, {
  get: (obj, prop) => ow,
  apply: () => ow
})

module.exports = ow
