## Overview

[iter.mjs](../iter.mjs) provides tiny utils for iteration and functional programming. Lightweight replacement for Lodash. Features:

  * Higher-order functions for data structures.
    * Common FP tools like `map`, `filter`, and many more.
    * Compatible with arbitrary iterables such as lists, sets, maps, dicts.

Differences from Lodash:

  * Supports arbitrary iterables and iterators, including sets and maps.
  * Much smaller and simpler.

Port and rework of https://github.com/mitranim/fpx.

## TOC

* [#Usage](#usage)
* [#Perf](#perf)
* [#API](#api)
  * [#`function arrOf`](#function-arrof)
  * [#`function more`](#function-more)
  * [#`function alloc`](#function-alloc)
  * [#`function arr`](#function-arr)
  * [#`function arrCopy`](#function-arrcopy)
  * [#`function slice`](#function-slice)
  * [#`function keys`](#function-keys)
  * [#`function values`](#function-values)
  * [#`function valuesCopy`](#function-valuescopy)
  * [#`function entries`](#function-entries)
  * [#`function reify`](#function-reify)
  * [#`function indexOf`](#function-indexof)
  * [#`function findIndex`](#function-findindex)
  * [#`function includes`](#function-includes)
  * [#`function append`](#function-append)
  * [#`function prepend`](#function-prepend)
  * [#`function concat`](#function-concat)
  * [#`function len`](#function-len)
  * [#`function hasLen`](#function-haslen)
  * [#`function each`](#function-each)
  * [#`function map`](#function-map)
  * [#`function mapMut`](#function-mapmut)
  * [#`function mapCls`](#function-mapcls)
  * [#`function mapCompact`](#function-mapcompact)
  * [#`function mapFlat`](#function-mapflat)
  * [#`function filter`](#function-filter)
  * [#`function reject`](#function-reject)
  * [#`function compact`](#function-compact)
  * [#`function remove`](#function-remove)
  * [#`function fold`](#function-fold)
  * [#`function fold1`](#function-fold1)
  * [#`function find`](#function-find)
  * [#`function procure`](#function-procure)
  * [#`function every`](#function-every)
  * [#`function some`](#function-some)
  * [#`function flat`](#function-flat)
  * [#`function head`](#function-head)
  * [#`function last`](#function-last)
  * [#`function init`](#function-init)
  * [#`function tail`](#function-tail)
  * [#`function take`](#function-take)
  * [#`function count`](#function-count)
  * [#`function compare`](#function-compare)
  * [#`function compareFin`](#function-comparefin)
  * [#`function sort`](#function-sort)
  * [#`function reverse`](#function-reverse)
  * [#`function index`](#function-index)
  * [#`function group`](#function-group)
  * [#`function partition`](#function-partition)
  * [#`function sum`](#function-sum)
  * [#`function zip`](#function-zip)
  * [#`function setOf`](#function-setof)
  * [#`function setFrom`](#function-setfrom)
  * [#`function setCopy`](#function-setcopy)
  * [#`function mapOf`](#function-mapof)
  * [#`function range`](#function-range)
  * [#`function span`](#function-span)
  * [#`function times`](#function-times)
  * [#`function repeat`](#function-repeat)
  * [#`function mapDict`](#function-mapdict)
  * [#`function pick`](#function-pick)
  * [#`function omit`](#function-omit)
  * [#`function pickKeys`](#function-pickkeys)
  * [#`function omitKeys`](#function-omitkeys)
  * [#Undocumented](#undocumented)

## Usage

```js
import * as i from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/iter.mjs'
```

## Perf

Carefully tuned for performance. Functions covered by benchmarks appear comparable to their native or Lodash equivalents. Many appear significantly faster.

JS performance is complicated and _very_ unstable, Our benchmark suite is limited and checked only in V8. When in doubt, measure in your particular environment.

## API

### `function arrOf`

Links: [source](../iter.mjs#L3); [test/example](../test/iter_test.mjs#L69).

Signature: `(seq<A>, test) => A[]` where `test: A => true`.

Shortcut. Converts the input to an array via [#`arr`](#function-arr) and asserts that every element satisfies the given test function. Returns the resulting array.

### `function more`

Links: [source](../iter.mjs#L10); [test/example](../test/iter_test.mjs#L81).

Takes an [iterator](lang_readme.md#function-isiterator), consumes one value, and returns true if the iterator is not yet finished. Shortcut for `val.next().done === false`.

### `function alloc`

Links: [source](../iter.mjs#L12); [test/example](../test/iter_test.mjs#L91).

Shortcut for allocating an array with a sanity check. Same as `Array(N)` but ensures that the input is a [natural_number](lang_readme.md#function-isnat) suitable for array length. Avoids unintentionally passing any non-natural input such as `Array(-1)`. Allows [nil](lang_readme.md#function-isnil), replacing it with `0`.

### `function arr`

Links: [source](../iter.mjs#L14); [test/example](../test/iter_test.mjs#L100).

Converts an arbitrary [sequence](lang_readme.md#function-isseq) to an array. Supports the following inputs:

  * [Nil](lang_readme.md#function-isnil): return `[]`.
  * [Array](lang_readme.md#function-istruearr): return as-is.
  * [List](lang_readme.md#function-islist): convert via `Array.prototype.slice`.
  * [Set](lang_readme.md#function-isset) or arbitrary [iterator](lang_readme.md#function-isiterator): convert to array by iterating.

Unlike [#`values`](#function-values), this function rejects other inputs such as non-nil primitives, dicts, maps, arbitrary iterables, ensuring that the input is always a sequence.

The input may or may not be a copy. To ensure copying, use [#`arrCopy`](#function-arrcopy).

### `function arrCopy`

Links: [source](../iter.mjs#L18); [test/example](../test/iter_test.mjs#L120).

Similar to [#`arr`](#function-arr), but always makes a copy, even if the input is already a true array.

### `function slice`

Links: [source](../iter.mjs#L41); [test/example](../test/iter_test.mjs#L163).

Like [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) but allows arbitrary [sequences](lang_readme.md#function-isseq) compatible with [#`arr`](#function-arr).

### `function keys`

Links: [source](../iter.mjs#L45); [test/example](../test/iter_test.mjs#L195).

Takes an arbitrary input and returns an array of its keys:

  * For non-objects: always `[]`.
  * For [iterables](lang_readme.md#function-isiter) with `.keys()`: equivalent to converting the output of `.keys()` to an array. Implementation varies for performance.
    * Examples: `Array`, `Set`, `Map`, and more.
  * For [lists](lang_readme.md#function-islist): equivalent to above for arrays.
  * For [iterators](lang_readme.md#function-isiterator): exhausts the iterator, returning an array of indexes equivalent to `i.span(i.len(iterator))`. See [#`span`](#function-span) and [#`len`](#function-len).
  * For [structs](lang_readme.md#function-isstruct): equivalent to [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).

### `function values`

Links: [source](../iter.mjs#L54); [test/example](../test/iter_test.mjs#L214).

Takes an arbitrary input and returns an array of its values:

  * For non-objects: always `[]`.
  * For [arrays](lang_readme.md#function-isarr): **returns as-is without copying**.
  * For [lists](lang_readme.md#function-islist): slice to array.
  * For [iterables](lang_readme.md#function-isiter) with `.values()`: equivalent to converting the output of `.values()` to an array. Implementation varies for performance.
    * Examples: `Set`, `Map`, and more.
  * For [iterators](lang_readme.md#function-isiterator): equivalent to `[...iterator]`.
  * For [structs](lang_readme.md#function-isstruct): equivalent to [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values).

### `function valuesCopy`

Links: [source](../iter.mjs#L60); [test/example](../test/iter_test.mjs#L228).

Variant of [#`values`](#function-values) that always makes a copy. Mutating the output doesn't affect the original.

### `function entries`

Links: [source](../iter.mjs#L84); [test/example](../test/iter_test.mjs#L270).

Takes an arbitrary input and returns an array of its entries (key-value tuples):

  * For non-objects: always `[]`.
  * For [iterables](lang_readme.md#function-isiter) with `.entries()`: equivalent to converting the output of `.entries()` to an array. Implementation varies for performance.
    * Examples: `Set`, `Map`, and more.
  * For [lists](lang_readme.md#function-islist): equivalent to above for arrays.
  * For [iterators](lang_readme.md#function-isiterator): exhausts the iterator, returning an array of entries where keys are indexes starting with 0.
  * For [structs](lang_readme.md#function-isstruct): equivalent to [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).

### `function reify`

Links: [source](../iter.mjs#L111); [test/example](../test/iter_test.mjs#L290).

Takes an arbitrary value and attempts to deeply materialize it. Any [iterators](lang_readme.md#function-isiterator), or [lists](lang_readme.md#function-islist) that contain iterators, or lists that contain lists that contain iterators, etc., are converted to arrays. Does not inspect other data structures such as [sets](lang_readme.md#function-isset) or [dicts](lang_readme.md#function-isdict).

### `function indexOf`

Links: [source](../iter.mjs#L115); [test/example](../test/iter_test.mjs#L315).

Like [`Array.prototype.indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf). Differences:

  * Uses [`is`](lang_readme.md#function-is) rather than `===`, therefore able to detect `NaN`.
  * Input may be [nil](lang_readme.md#function-isnil) or any [list](lang_readme.md#function-islist).

### `function findIndex`

Links: [source](../iter.mjs#L125); [test/example](../test/iter_test.mjs#L336).

Signature: `(List<A>, A => bool) => int`.

Like [`Array.prototype.findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex). Differences:

  * Input may be [nil](lang_readme.md#function-isnil) or any [list](lang_readme.md#function-islist).
  * Doesn't support `this` or additional arguments.

### `function includes`

Links: [source](../iter.mjs#L135); [test/example](../test/iter_test.mjs#L359).

Like [`Array.prototype.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes). Differences:

  * Supports arbitrary iterables compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.

### `function append`

Links: [source](../iter.mjs#L139); [test/example](../test/iter_test.mjs#L378).

Takes an arbitrary iterable compatible with [#`values`](#function-values) and appends an arbitrary value, returning the resulting array.

### `function prepend`

Links: [source](../iter.mjs#L141); [test/example](../test/iter_test.mjs#L393).

Takes an arbitrary iterable compatible with [#`values`](#function-values) and prepends an arbitrary value, returning the resulting array.

### `function concat`

Links: [source](../iter.mjs#L143); [test/example](../test/iter_test.mjs#L409).

Like [`Array.prototype.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat). Differences:

  * Takes two arguments, without rest/spread.
  * Supports arbitrary iterables compatible with [#`values`](#function-values).
  * Iterables may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.

Note: for individual elements, use [#`append`](#function-append) and
[#`prepend`](#function-prepend).

### `function len`

Links: [source](../iter.mjs#L148); [test/example](../test/iter_test.mjs#L465).

Universal length measurement:

  * For non-objects: always 0.
  * For iterables:
    * For [lists](lang_readme.md#function-islist): same as `.length`.
    * For ES2015 collections such as `Set`: same as `.size`.
    * For iterators: exhausts the iterator, returning element count.
  * For [structs](lang_readme.md#function-isstruct): equivalent to `Object.keys(val).length`.

### `function hasLen`

Links: [source](../iter.mjs#L173); [test/example](../test/iter_test.mjs#L469).

Shortcut for [#`len`](#function-len) > 0.

### `function each`

Links: [source](../iter.mjs#L183); [test/example](../test/iter_test.mjs#L511).

Signature: `(Iter<A>, A => void) => void`.

Similar to `Array.prototype.forEach`, `Set.prototype.forEach`, `Map.prototype.forEach`, and so on. Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Doesn't support `this` or additional arguments.

### `function map`

Links: [source](../iter.mjs#L188); [test/example](../test/iter_test.mjs#L532).

Signature: `(Iter<A>, A => B) => B[]`.

Similar to [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Doesn't support `this`, and doesn't pass additional arguments. When you want support for additional arguments, use [#`values`](#function-values) to convert an arbitrary iterable to an array, then use native `.map`.

### `function mapMut`

Links: [source](../iter.mjs#L190); [test/example](../test/iter_test.mjs#L565).

Similar to [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Differences:

  * Mutates the input (which must be an array).
  * Doesn't support `this` or additional arguments.

For a non-mutating version, see [#`map`](#function-map).

### `function mapCls`

Links: [source](../iter.mjs#L199); [test/example](../test/iter_test.mjs#L576).

Signature: `(Iter<A>, {new(A): B}) => B[]`.

Similar to [#`map`](#function-map), but instead of taking an arbitrary function, takes a class and calls it with `new` for each element.

```js
import * as i from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/iter.mjs'
import * as o from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/obj.mjs'

class Model extends o.Dict {pk() {return this.id}}
class Person extends Model {}

console.log(i.mapCls(
  [
    {id: 1, name: `Mira`},
    {id: 2, name: `Kara`},
  ],
  Person,
))

/*
[
  Person { id: 1, name: "Mira" },
  Person { id: 2, name: "Kara" },
]
*/
```

### `function mapCompact`

Links: [source](../iter.mjs#L204); [test/example](../test/iter_test.mjs#L614).

Equivalent to `i.compact(i.map(val, fun))`. See [#`map`](#function-map) and [#`compact`](#function-compact).

### `function mapFlat`

Links: [source](../iter.mjs#L206); [test/example](../test/iter_test.mjs#L627).

Signature: `(Iter<A>, A => B[]) => B[]`.

Similar to [`Array.prototype.flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Doesn't support `this` or additional arguments.

This function is equivalent to `i.flat(i.map(val, fun))`. See [#`map`](#function-map) and [#`flat`](#function-flat).

### `function filter`

Links: [source](../iter.mjs#L208); [test/example](../test/iter_test.mjs#L641).

Signature: `(Iter<A>, A => bool) => A[]`.

Similar to [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Doesn't support `this` or additional arguments.

### `function reject`

Links: [source](../iter.mjs#L215); [test/example](../test/iter_test.mjs#L657).

Opposite of [#`filter`](#function-filter). Equivalent to `i.filter(val, l.not(fun))`.

### `function compact`

Links: [source](../iter.mjs#L217); [test/example](../test/iter_test.mjs#L673).

Equivalent to `i.filter(val, l.id)`. Takes an arbitrary iterable and returns an array of its truthy [#`values`](#function-values), discarding falsy values.

### `function remove`

Links: [source](../iter.mjs#L223); [test/example](../test/iter_test.mjs#L685).

Signature: `(Iter<A>, A) => A[]`.

Takes an arbitrary iterable and an element to remove. Returns an array of the iterable's [#`values`](#function-values), discarding each occurrence of this element, comparing via [`is`](lang_readme.md#function-is).

### `function fold`

Links: [source](../iter.mjs#L227); [test/example](../test/iter_test.mjs#L702).

Signature: `(src: Iter<A>, acc: B, fun: (B, A) => B) => B`.

Similar to [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Arguments are `(src, acc, fun)` rather than `(fun, acc)`.
  * Accumulator argument is mandatory.
  * Doesn't support `this`.
  * Iterator function receives exactly two arguments: accumulator and next value.

### `function fold1`

Links: [source](../iter.mjs#L233); [test/example](../test/iter_test.mjs#L720).

Signature: `(src: Iter<A>, fun: (A, A) => A) => A`.

Similar to [#`fold`](#function-fold) but instead of taking an accumulator argument, uses the first element of the iterable as the initial accumulator value. If the iterable is empty, returns `undefined`.

Similar to [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) when invoked without an accumulator argument.

### `function find`

Links: [source](../iter.mjs#L244); [test/example](../test/iter_test.mjs#L749).

Signature: `(Iter<A>, A => bool) => A`.

Similar to [`Array.prototype.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Doesn't support `this` or additional arguments.

### `function procure`

Links: [source](../iter.mjs#L250); [test/example](../test/iter_test.mjs#L764).

Signature: `(src: Iter<A>, fun: A => B) => B`.

Similar to [#`find`](#function-find), but returns the first truthy result of calling the iterator function, rather than the corresponding element. Equivalent to `i.find(i.map(src, fun), l.id)` but more efficient.

### `function every`

Links: [source](../iter.mjs#L256); [test/example](../test/iter_test.mjs#L781).

Signature: `(Iter<A>, A => bool) => bool`.

Similar to [`Array.prototype.every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Doesn't support `this` or additional arguments.

### `function some`

Links: [source](../iter.mjs#L262); [test/example](../test/iter_test.mjs#L800).

Signature: `(Iter<A>, A => bool) => bool`.

Similar to [`Array.prototype.some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Doesn't support `this` or additional arguments.

### `function flat`

Links: [source](../iter.mjs#L268); [test/example](../test/iter_test.mjs#L819).

Similar to [`Array.prototype.flat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Always flattens to infinite depth.

Currently flattens only children and descendants that are [plain](lang_readme.md#function-istruearr), preserving other nested iterables as-is.

### `function head`

Links: [source](../iter.mjs#L282); [test/example](../test/iter_test.mjs#L844).

Takes an arbitrary iterable compatible with [#`values`](#function-values) and returns its first element or `undefined`.

### `function last`

Links: [source](../iter.mjs#L298); [test/example](../test/iter_test.mjs#L854).

Takes an arbitrary iterable compatible with [#`values`](#function-values) and returns its last element or `undefined`.

### `function init`

Links: [source](../iter.mjs#L306); [test/example](../test/iter_test.mjs#L864).

Short for "initial". Takes an arbitrary iterable compatible with [#`values`](#function-values) and returns an array of all its values except last.

### `function tail`

Links: [source](../iter.mjs#L308); [test/example](../test/iter_test.mjs#L874).

Takes an arbitrary iterable compatible with [#`values`](#function-values) and returns an array of all its values except first.

### `function take`

Links: [source](../iter.mjs#L310); [test/example](../test/iter_test.mjs#L884).

Takes an arbitrary iterable compatible with [#`values`](#function-values) and returns N values from the start.

### `function count`

Links: [source](../iter.mjs#L314); [test/example](../test/iter_test.mjs#L906).

Signature: `(src: Iter<A>, fun: A => B) => nat`.

Takes an arbitrary iterable compatible with [#`values`](#function-values), calls the given function for each value, and returns the count of truthy results. The count is between 0 and iterable length.

### `function compare`

Links: [source](../iter.mjs#L322); [test/example](../test/iter_test.mjs#L921).

Signature: `(a, b) => -1 | 0 | 1`.

Equivalent to the [default JS sort comparison algorithm](https://tc39.github.io/ecma262/#sec-sortcompare). Sometimes useful for sorting via [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) or [#`sort`](#function-sort), as a fallback.

### `function compareFin`

Links: [source](../iter.mjs#L333); [test/example](../test/iter_test.mjs#L931).

Signature: `(a, b) => -1 | 0 | 1` where arguments are [nil](lang_readme.md#function-isnil) or [finite](lang_readme.md#function-isfin).

Sort comparison for finite numbers. Usable for [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) or [#`sort`](#function-sort). Throws on non-nil, non-finite arguments.

### `function sort`

Links: [source](../iter.mjs#L341); [test/example](../test/iter_test.mjs#L943).

Signature: `(src: Iter<A>, fun?: (prev: A, next: A) => -1 | 0 | 1) => A[]`.

Similar to [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Always creates a new array. Does not mutate the input.

The comparison function is optional. If omitted, default JS sorting is used.

### `function reverse`

Links: [source](../iter.mjs#L342); [test/example](../test/iter_test.mjs#L975).

Similar to [`Array.prototype.reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values).
  * Iterable may be [nil](lang_readme.md#function-isnil), equivalent to `[]`.
  * Always creates a new array. Does not mutate the input.

### `function index`

Links: [source](../iter.mjs#L344); [test/example](../test/iter_test.mjs#L993).

Signature: `(Iter<A>, A => Key | any) => {[Key: A]}`.

Takes an arbitrary iterable compatible with [#`values`](#function-values) and returns an index where its values are _indexed_ by the given function, hence the name. The function is called for each value. If the function returns a [valid_key](lang_readme.md#function-iskey), the key-value pair is added to the index. Invalid keys are ignored. If the function returns the same key for multiple values, previous values are lost.

Compare [#`group`](#function-group) which keeps all values for each group, rather than only the last.

### `function group`

Links: [source](../iter.mjs#L354); [test/example](../test/iter_test.mjs#L1038).

Signature: `(Iter<A>, A => Key | any) => {[Key: A[]]}`.

Takes an arbitrary iterable compatible with [#`values`](#function-values) and groups its values by keys generated by the given function. The function is called for each value. If the function returns a [valid_key](lang_readme.md#function-iskey), the value is added to the index under that key. Invalid keys are ignored.

Compare [#`index`](#function-index), which keeps only the last value for each group.

### `function partition`

Links: [source](../iter.mjs#L364); [test/example](../test/iter_test.mjs#L1064).

Signature: `(Iter<A>, A => bool) => [A[], A[]]`.

Partitions the [#`values`](#function-values) of a given iterable, returning a tuple of two groups: values that satisfy the predicate and the remainder.

### `function sum`

Links: [source](../iter.mjs#L372); [test/example](../test/iter_test.mjs#L1081).

Signature: `(Iter<A>) => fin`.

Sums all finite [#`values`](#function-values) of an arbitrary iterable, ignoring all non-finite values.

### `function zip`

Links: [source](../iter.mjs#L377); [test/example](../test/iter_test.mjs#L1092).

Signature: `(Iter<[Key, A]>) => {[Key: A]}`.

Similar to [`Object.fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries). Differences:

  * Takes an arbitrary iterable compatible with [#`values`](#function-values) (more flexible).
    * Each value of this iterable must be a key-value pair.
  * Ignores entries where the first element is not a [valid_key](lang_readme.md#function-iskey).
  * Returns a [null_prototype_object](lang_readme.md#function-npo).
  * Slightly slower.

### `function setOf`

Links: [source](../iter.mjs#L383); [test/example](../test/iter_test.mjs#L1109).

Syntactic shortcut for creating a `Set` via variadic call.

```js
import * as i from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/iter.mjs'

i.setOf(10, 20, 30)
// Set{10, 20, 30}
```

### `function setFrom`

Links: [source](../iter.mjs#L385); [test/example](../test/iter_test.mjs#L1116).

Converts an arbitrary input to a native [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). Similar to `new Set`. Differences:

  * If input is already a set: **return as-is without copying**.
  * Otherwise, create a set of the input's [#`values`](#function-values).
    * [Maps](lang_readme.md#function-ismap) and [structs](lang_readme.md#function-isstruct) are treated as collections of their values rather than key-value entries.

### `function setCopy`

Links: [source](../iter.mjs#L387); [test/example](../test/iter_test.mjs#L1140).

Similar to [#`setFrom`](#function-setfrom): converts an arbitrary input to a set. Difference: always makes a copy. If the original was a set, it's unaffected by mutations of the output.

### `function mapOf`

Links: [source](../iter.mjs#L389); [test/example](../test/iter_test.mjs#L1156).

Syntactic shortcut for creating a `Map` with inline keys and values. Shorter and less noisy than either `new Map` with an array of entries or chained `.set` calls. The name mirrors `Array.of`.

### `function range`

Links: [source](../iter.mjs#L396); [test/example](../test/iter_test.mjs#L1163).

Signature: `(min: int, max: int) => int[]`.

Returns an array of contiguous integers in the range of `[min, max)`. The first value is `min`, the last value is `max - 1`.

### `function span`

Links: [source](../iter.mjs#L408); [test/example](../test/iter_test.mjs#L1178).

Signature: `nat => nat[]`.

Returns an array of the given length, where values are integers from 0. Shortcut for `i.range(0, length)`. Nil length is equivalent to 0.

### `function times`

Links: [source](../iter.mjs#L409); [test/example](../test/iter_test.mjs#L1189).

Signature: `(len: nat, fun: nat => A) => A[]`.

Takes an array length and a mapping function. Returns an array of the given length, where each element is the result of calling the given function, passing the element's index, starting with 0. Equivalent to `i.mapMut(i.span(len), fun)`.

### `function repeat`

Links: [source](../iter.mjs#L410); [test/example](../test/iter_test.mjs#L1210).

Signature: `(len: nat, val: A) => A[]`.

Returns an array of the given length where each element is the given value. Equivalent to `i.alloc(len).fill(val)`.

### `function mapDict`

Links: [source](../iter.mjs#L412); [test/example](../test/iter_test.mjs#L1222).

Signature: `({[Key: A]}, A => B) => {[Key: B]}`.

Similar to [#`map`](#function-map) but for dicts.

* The input must be either [nil](lang_readme.md#function-isnil) or a [struct](lang_readme.md#function-isstruct). Nil is considered `{}`.
* The output is always a [plain](lang_readme.md#function-npo) with the same keys but altered values.
* The mapping function receives only one argument: each value.

```js
import * as i from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/iter.mjs'
import * as l from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/lang.mjs'

i.mapDict({one: 10, two: 20}, l.inc)
// {one: 11, two: 21}
```

Performance note: dictionary iteration is much slower than array iteration, and should be avoided or minimized.

### `function pick`

Links: [source](../iter.mjs#L420); [test/example](../test/iter_test.mjs#L1304).

Signature: `({[Key: A]}, A => bool) => {[Key: A]}`.

Similar to [#`filter`](#function-filter) but for dicts.

* The input must be either [nil](lang_readme.md#function-isnil) or a [struct](lang_readme.md#function-isstruct). Nil is considered `{}`.
* The output is always a [plain](lang_readme.md#function-npo). It has only the key-values from the original input for which the given function returned a truthy result.
* The mapping function receives each value.

```js
import * as i from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/iter.mjs'
import * as l from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/lang.mjs'

i.pick({one: -20, two: -10, three: 10, four: 20}, l.isFinPos)
// {three: 10, four: 20}
```

Performance note: dictionary iteration is much slower than array iteration, and should be avoided or minimized.

### `function omit`

Links: [source](../iter.mjs#L431); [test/example](../test/iter_test.mjs#L1240).

Signature: `({[Key: A]}, A => bool) => {[Key: A]}`.

Similar to [#`reject`](#function-reject) but for dicts.

* The input must be either [nil](lang_readme.md#function-isnil) or a [struct](lang_readme.md#function-isstruct). Nil is considered `{}`.
* The output is always a [plain](lang_readme.md#function-npo). It has only the key-values from the original input for which the given function returned a falsy result.
* The mapping function receives each value.

```js
import * as i from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/iter.mjs'
import * as l from 'https://cdn.jsdelivr.net/npm/@mitranim/js@0.1.46/lang.mjs'

i.omit({one: -20, two: -10, three: 10, four: 20}, l.isFinPos)
// {one: -20, two: -10}
```

Performance note: dictionary iteration is much slower than array iteration, and should be avoided or minimized.

### `function pickKeys`

Links: [source](../iter.mjs#L434); [test/example](../test/iter_test.mjs#L1250).

Signature: `({[Key: A]}, Iter<Key>) => {[Key: A]}`.

Similar to `[#`pick`](#function-pick)` but uses keys instead of a function.

* The input must be either [nil](lang_readme.md#function-isnil) or a [struct](lang_readme.md#function-isstruct). Nil is considered `{}`.
* The output is always a [plain](lang_readme.md#function-npo). It mirrors the original, but has only "known" given keys, excluding any other.

Performance note: dictionary iteration is much slower than array iteration, and should be avoided or minimized.

### `function omitKeys`

Links: [source](../iter.mjs#L442); [test/example](../test/iter_test.mjs#L1268).

Signature: `({[Key: A]}, Iter<Key>) => {[Key: A]}`.

Similar to `[#`omit`](#function-omit)` but uses keys instead of a function.

* The input must be either [nil](lang_readme.md#function-isnil) or a [struct](lang_readme.md#function-isstruct). Nil is considered `{}`.
* The output is always a [plain](lang_readme.md#function-npo). It mirrors the original, but has only "unknown" keys, excluding any given keys.

Performance note: dictionary iteration is much slower than array iteration, and should be avoided or minimized.

### Undocumented

The following APIs are exported but undocumented. Check [iter.mjs](../iter.mjs).

  * [`function arrOpt`](../iter.mjs#L16)
  * [`function clear`](../iter.mjs#L176)
  * [`function compactDict`](../iter.mjs#L450)
