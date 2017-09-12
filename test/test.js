const test = require('ava');

const errors = require('../errors');
const name = require('../');

test('not string', t => {
  t.is(name(), errors.notString);
});

test('trim', t => {
  t.is(name(' '), errors.trim);
});

test('max length', t => {
  t.is(name(new Array(215).fill('a').join('')), errors.maxLength);
});

test('dot underscore', t => {
  t.is(name('_'), errors.dotUnderscore);
  t.is(name('.'), errors.dotUnderscore);
});

test('uppercase', t => {
  t.is(name('A'), errors.uppercase);
});

test('no scope', t => {
  t.true(name('foo'));
});

test('scope', t => {
  t.true(name('@foo/foo'));
});

test('must have @ at beginning of string', t => {
  t.is(name('foo@'), errors.atFirst);
});

test('must have only one @', t => {
  t.is(name('@foo@'), errors.extraAt);
});

test('must have /', t => {
  t.is(name('@foo'), errors.noSlash);
});

test('must have only one /', t => {
  t.is(name('@foo/foo/'), errors.extraSlash);
});

test('built in', t => {
  t.is(name('fs'), errors.builtIn);
});

test('non-URL-safe', t => {
  t.regex(name('!'), new RegExp(errors.nonURLSafe));
});

test('had invalid scope name', t => {
  t.not(name('@beep$/baz'), true);
});

test('numbers in name without limax separating', t => {
  t.true(name('@ladjs/i18n'), true);
});
