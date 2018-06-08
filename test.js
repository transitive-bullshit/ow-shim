'use strict'

const { test } = require('ava')

const ow = require('.')

test('basic ow usage', (t) => {
  t.is(ow(), ow)
  t.is(ow(5, ow.number.positive.integer.label('foo')), ow)
  t.is(ow('foo', ow.string.not.nonEmpty.label('foo')), ow)
})

test('predicate.is', (t) => {
  t.is(ow(5, ow.int8Array.is((v) => v.length > 10)), ow)
})

test('ow.any', (t) => {
  t.is(ow(5, ow.any(ow.number, ow.object.instanceOf(new Map()))), ow)
})

test('ow.isValid', (t) => {
  t.is(ow.isValid(5, ow.int8Array.is((v) => v.length > 10)), ow)
})

test('ow.create(predicate)', (t) => {
  const p = ow.create(ow.string.minLength(8))
  t.is(p(), ow)
})
