'use strict'

const assert = require('assert')

const isGeneratorFunction = require('is-generator').fn

module.exports = assertGeneratorFunctions

function assertGeneratorFunctions (fn) {
  if (Array.isArray(fn)) {
    fn.forEach((func) => {
      assert(isGeneratorFunction(func), 'must be generator functions')
    })
  } else {
    assert(isGeneratorFunction(fn), 'must be generator functions')
  }
}
