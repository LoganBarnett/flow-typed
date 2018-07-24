// @flow
import chromedriver from 'chromedriver'
import { describe, it } from 'flow-typed-test';

describe('start', () => {
  it('can start without arguments', () => {
    chromedriver.start()
  })

  it('can start with arguments', () => {
    chromedriver.start(['foo', 'bar', 'baz'])
  })
})

describe('stop', () => {
  it('can stop', () => {
    chromedriver.stop()
  })
})
