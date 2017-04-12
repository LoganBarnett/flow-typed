// @flow

'use strict'
const angular = require('angular')

function describe(tag, fn) {
  fn()
}

function it(tag, fn) {
  fn()
}

describe('Angular modules', () => {
  it('can be declared', () => {
    const module1 = angular.module('foo', [])
    const module2 = angular.module('foo', ['bazz', 'qux'])
  })
})

describe('directives', () => {
  it('can be declared', () => {
    angular.module('foo', []).directive('foo', ['bar', 'bazz', (bar, bazz) => {
      return {
        restrict: 'E',
        templateUrl: 'foo.html',
      }
    }])
  })

  it('requires a directive to be returned', () => {
    angular.module('foo', []).directive('foo', ['bar', 'bazz', (bar, bazz) => {
      // $ExpectError string. This type is incompatible with Directive
      return 'this is clearly not a directive'
    }])
  })
})

describe('service', () => {
  it('can be declared', () => {
    angular.module('foo', []).service('foo', ['bar', 'bazz', (bar, bazz) => {
      return (a) => a + 1
    }])
  })

  it('requires a return value of a function', () => {
    angular.module('foo', []).service('foo', ['bar', 'bazz', (bar, bazz) => {
      // $ExpectError object. This type is incompatible with Function
      return { foo: 'bar' }
    }])
  })
})

describe('factory', () => {
  it('can be declared', () => {
    angular.module('foo', []).factory('foo', ['bar', 'bazz', (bar, bazz) => {
      return { a: bar, b: bazz }
    }])
  })

  it('requires a return value of some kind', () => {
    // $ExpectError undefined. This type is incompatible with
    angular.module('foo', []).factory('foo', ['bar', 'bazz', (bar, bazz) => {}])
  })

})
