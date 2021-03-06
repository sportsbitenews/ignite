const test = require('ava')
const execa = require('execa')
const jetpack = require('fs-jetpack')

const IGNITE = './bin/ignite'
const VERSION = jetpack.read('./package.json', 'json').version

test('ignite -v', async t => {
  const result = await execa(IGNITE, ['-v'])
  t.is(result.stdout, VERSION)
})

test('ignite --v', async t => {
  const result = await execa(IGNITE, ['--v'])
  t.is(result.stdout, VERSION)
})

test('ignite -version', async t => {
  const result = await execa(IGNITE, ['-version'])
  t.is(result.stdout, VERSION)
})

test('ignite --version', async t => {
  const result = await execa(IGNITE, ['--version'])
  t.is(result.stdout, VERSION)
})

test('ignite version', async t => {
  const result = await execa(IGNITE, ['version'])
  t.is(result.stdout, VERSION)
})
