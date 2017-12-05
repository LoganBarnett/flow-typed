/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import { partial } from "ramda";

// --- Partial ---
const method1 = (foo: string, bah: number, baz: boolean) => baz;

const partial1: (number, boolean) => boolean = partial(method1, ["foo"]);
const partial2: boolean = partial(method1, ["foo"])(4, true);
// $ExpectError
const partial3 = partial(method1, [4]);
const partial4: boolean = partial(method1, ["foo", 4])(true);
const partial5: boolean = partial(method1, ["foo", 4, true])();

// Functions produced from partial are not curried.
// $ExpectError
const partial6 = partial(method1, ["foo"])(4);

// React types are somehow involved with the error we're trying to fix here. The
// problem is that Flow is selecting a lower arity function and then bombing out
// on that. This test ensures we're still catching the order->arity issue. So
// far this function is about the simplest reproduction we can get.
function fn1<T>(create: () => Array<*>): Array<*> {
  return create().map(s => parseInt(s));
}

partial(fn1, [() => ["foo"]]);

// React types are somehow involved with the error we're trying to fix here. The
// problem is that Flow is selecting a lower arity function and then bombing out
// on that. This test ensures we're still catching the order->arity issue. So
// far this function is about the simplest reproduction we can get.
function fn2<T>(create: () => Array<string>): Array<number> {
  return create().map(s => parseInt(s));
}

partial(fn2, [() => ["foo"]]);
