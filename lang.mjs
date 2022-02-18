/* Type */

export function isNil(val) {return val == null}
export function reqNil(val) {return isNil(val) ? val : convFun(val, isNil)}
export function optNil(val) {return isNil(val) ? val : reqNil(val)}
export function onlyNil(val) {return isNil(val) ? val : undefined}

export function isSome(val) {return val != null}
export function reqSome(val) {return isSome(val) ? val : convFun(val, isSome)}
export function optSome(val) {return isNil(val) ? val : reqSome(val)}
export function onlySome(val) {return isSome(val) ? val : undefined}

export function isBool(val) {return typeof val === `boolean`}
export function reqBool(val) {return isBool(val) ? val : convFun(val, isBool)}
export function optBool(val) {return isNil(val) ? val : reqBool(val)}
export function onlyBool(val) {return isBool(val) ? val : undefined}
export function laxBool(val) {return isNil(val) ? false : reqBool(val)}

export function isNum(val) {return typeof val === `number`}
export function reqNum(val) {return isNum(val) ? val : convFun(val, isNum)}
export function optNum(val) {return isNil(val) ? val : reqNum(val)}
export function onlyNum(val) {return isNum(val) ? val : undefined}
export function laxNum(val) {return isNil(val) ? 0 : reqNum(val)}

export function isFin(val) {return isNum(val) && !isNaN(val) && !isInf(val)}
export function reqFin(val) {return isFin(val) ? val : convFun(val, isFin)}
export function optFin(val) {return isNil(val) ? val : reqFin(val)}
export function onlyFin(val) {return isFin(val) ? val : undefined}
export function laxFin(val) {return isNil(val) ? 0 : reqFin(val)}

export function isFinNeg(val) {return isNum(val) && val < 0 && val > -Infinity}
export function reqFinNeg(val) {return isFinNeg(val) ? val : convFun(val, isFinNeg)}
export function optFinNeg(val) {return isNil(val) ? val : reqFinNeg(val)}
export function onlyFinNeg(val) {return isFinNeg(val) ? val : undefined}

export function isFinPos(val) {return isNum(val) && val > 0 && val < Infinity}
export function reqFinPos(val) {return isFinPos(val) ? val : convFun(val, isFinPos)}
export function optFinPos(val) {return isNil(val) ? val : reqFinPos(val)}
export function onlyFinPos(val) {return isFinPos(val) ? val : undefined}

export function isInt(val) {return isNum(val) && ((val % 1) === 0)}
export function reqInt(val) {return isInt(val) ? val : convFun(val, isInt)}
export function optInt(val) {return isNil(val) ? val : reqInt(val)}
export function onlyInt(val) {return isInt(val) ? val : undefined}
export function laxInt(val) {return isNil(val) ? 0 : reqInt(val)}

export function isNat(val) {return isInt(val) && val >= 0}
export function reqNat(val) {return isNat(val) ? val : convFun(val, isNat)}
export function optNat(val) {return isNil(val) ? val : reqNat(val)}
export function onlyNat(val) {return isNat(val) ? val : undefined}
export function laxNat(val) {return isNil(val) ? 0 : reqNat(val)}

export function isIntNeg(val) {return isInt(val) && val < 0}
export function reqIntNeg(val) {return isIntNeg(val) ? val : convFun(val, isIntNeg)}
export function optIntNeg(val) {return isNil(val) ? val : reqIntNeg(val)}
export function onlyIntNeg(val) {return isIntNeg(val) ? val : undefined}

export function isIntPos(val) {return isInt(val) && val > 0}
export function reqIntPos(val) {return isIntPos(val) ? val : convFun(val, isIntPos)}
export function optIntPos(val) {return isNil(val) ? val : reqIntPos(val)}
export function onlyIntPos(val) {return isIntPos(val) ? val : undefined}

export function isNaN(val) {return val !== val}
export function reqNaN(val) {return isNaN(val) ? val : convFun(val, isNaN)}
export function optNaN(val) {return isNil(val) ? val : reqNaN(val)}
export function onlyNaN(val) {return isNaN(val) ? val : undefined}

export function isInf(val) {return val === Infinity || val === -Infinity}
export function reqInf(val) {return isInf(val) ? val : convFun(val, isInf)}
export function optInf(val) {return isNil(val) ? val : reqInf(val)}
export function onlyInf(val) {return isInf(val) ? val : undefined}

export function isBigInt(val) {return typeof val === `bigint`}
export function reqBigInt(val) {return isBigInt(val) ? val : convFun(val, isBigInt)}
export function optBigInt(val) {return isNil(val) ? val : reqBigInt(val)}
export function onlyBigInt(val) {return isBigInt(val) ? val : undefined}
export function laxBigInt(val) {return isNil(val) ? 0n : reqBigInt(val)}

// TODO also provide "is non-empty string". Needs a short name.
export function isStr(val) {return typeof val === `string`}
export function reqStr(val) {return isStr(val) ? val : convFun(val, isStr)}
export function optStr(val) {return isNil(val) ? val : reqStr(val)}
export function onlyStr(val) {return isStr(val) ? val : undefined}
export function laxStr(val) {return isNil(val) ? `` : reqStr(val)}

export function isSym(val) {return typeof val === `symbol`}
export function reqSym(val) {return isSym(val) ? val : convFun(val, isSym)}
export function optSym(val) {return isNil(val) ? val : reqSym(val)}
export function onlySym(val) {return isSym(val) ? val : undefined}

export function isKey(val) {return isPrim(val) && !isJunk(val)}
export function reqKey(val) {return isKey(val) ? val : convFun(val, isKey)}
export function optKey(val) {return isNil(val) ? val : reqKey(val)}
export function onlyKey(val) {return isKey(val) ? val : undefined}

export function isJunk(val) {return isNil(val) || isNaN(val) || isInf(val)}
export function reqJunk(val) {return isJunk(val) ? val : convFun(val, isJunk)}
export function optJunk(val) {return isNil(val) ? val : reqJunk(val)}
export function onlyJunk(val) {return isJunk(val) ? val : undefined}

export function isComp(val) {return isObj(val) || isFun(val)}
export function reqComp(val) {return isComp(val) ? val : convFun(val, isComp)}
export function optComp(val) {return isNil(val) ? val : reqComp(val)}
export function onlyComp(val) {return isComp(val) ? val : undefined}

export function isPrim(val) {return !isComp(val)}
export function reqPrim(val) {return isPrim(val) ? val : convFun(val, isPrim)}
export function optPrim(val) {return isNil(val) ? val : reqPrim(val)}
export function onlyPrim(val) {return isPrim(val) ? val : undefined}

export function isFun(val) {return typeof val === `function`}
export function reqFun(val) {return isFun(val) ? val : convFun(val, isFun)}
export function optFun(val) {return isNil(val) ? val : reqFun(val)}
export function onlyFun(val) {return isFun(val) ? val : undefined}

export function isFunSync(val) {return isFunType(val, `Function`)}
export function reqFunSync(val) {return isFunSync(val) ? val : convFun(val, isFunSync)}
export function optFunSync(val) {return isNil(val) ? val : reqFunSync(val)}
export function onlyFunSync(val) {return isFunSync(val) ? val : undefined}

export function isFunGen(val) {return isFunType(val, `GeneratorFunction`)}
export function reqFunGen(val) {return isFunGen(val) ? val : convFun(val, isFunGen)}
export function optFunGen(val) {return isNil(val) ? val : reqFunGen(val)}
export function onlyFunGen(val) {return isFunGen(val) ? val : undefined}

export function isFunAsync(val) {return isFunType(val, `AsyncFunction`)}
export function reqFunAsync(val) {return isFunAsync(val) ? val : convFun(val, isFunAsync)}
export function optFunAsync(val) {return isNil(val) ? val : reqFunAsync(val)}
export function onlyFunAsync(val) {return isFunAsync(val) ? val : undefined}

export function isFunAsyncGen(val) {return isFunType(val, `AsyncGeneratorFunction`)}
export function reqFunAsyncGen(val) {return isFunAsyncGen(val) ? val : convFun(val, isFunAsyncGen)}
export function optFunAsyncGen(val) {return isNil(val) ? val : reqFunAsyncGen(val)}
export function onlyFunAsyncGen(val) {return isFunAsyncGen(val) ? val : undefined}

export function isObj(val) {return isSome(val) && typeof val === `object`}
export function reqObj(val) {return isObj(val) ? val : convFun(val, isObj)}
export function optObj(val) {return isNil(val) ? val : reqObj(val)}
export function onlyObj(val) {return isObj(val) ? val : undefined}

export function isDict(val) {return isObj(val) && isDictProto(Object.getPrototypeOf(val))}
export function reqDict(val) {return isDict(val) ? val : convFun(val, isDict)}
export function optDict(val) {return isNil(val) ? val : reqDict(val)}
export function onlyDict(val) {return isDict(val) ? val : undefined}
export function laxDict(val) {return isNil(val) ? npo() : reqDict(val)}

export function isStruct(val) {return isObj(val) && !isIter(val) && !isIterAsync(val)}
export function reqStruct(val) {return isStruct(val) ? val : convFun(val, isStruct)}
export function optStruct(val) {return isNil(val) ? val : reqStruct(val)}
export function onlyStruct(val) {return isStruct(val) ? val : undefined}
export function laxStruct(val) {return isNil(val) ? npo() : reqStruct(val)}

export function isArr(val) {return Array.isArray(val)}
export function reqArr(val) {return isArr(val) ? val : convFun(val, isArr)}
export function optArr(val) {return isNil(val) ? val : reqArr(val)}
export function onlyArr(val) {return isArr(val) ? val : undefined}
export function laxArr(val) {return isNil(val) ? [] : reqArr(val)}

export function isReg(val) {return isInst(val, RegExp)}
export function reqReg(val) {return isReg(val) ? val : convFun(val, isReg)}
export function optReg(val) {return isNil(val) ? val : reqReg(val)}
export function onlyReg(val) {return isReg(val) ? val : undefined}

export function isDate(val) {return isInst(val, Date)}
export function reqDate(val) {return isDate(val) ? val : convFun(val, isDate)}
export function optDate(val) {return isNil(val) ? val : reqDate(val)}
export function onlyDate(val) {return isDate(val) ? val : undefined}

export function isValidDate(val) {return isDate(val) && isFin(val.valueOf())}
export function reqValidDate(val) {return isValidDate(val) ? val : convFun(val, isValidDate)}
export function optValidDate(val) {return isNil(val) ? val : reqValidDate(val)}
export function onlyValidDate(val) {return isValidDate(val) ? val : undefined}

export function isInvalidDate(val) {return isDate(val) && !isValidDate(val)}
export function reqInvalidDate(val) {return isInvalidDate(val) ? val : convFun(val, isInvalidDate)}
export function optInvalidDate(val) {return isNil(val) ? val : reqInvalidDate(val)}
export function onlyInvalidDate(val) {return isInvalidDate(val) ? val : undefined}

export function isSet(val) {return isInst(val, Set)}
export function reqSet(val) {return isSet(val) ? val : convFun(val, isSet)}
export function optSet(val) {return isNil(val) ? val : reqSet(val)}
export function onlySet(val) {return isSet(val) ? val : undefined}
export function laxSet(val) {return isNil(val) ? new Set() : reqSet(val)}

export function isMap(val) {return isInst(val, Map)}
export function reqMap(val) {return isMap(val) ? val : convFun(val, isMap)}
export function optMap(val) {return isNil(val) ? val : reqMap(val)}
export function onlyMap(val) {return isMap(val) ? val : undefined}
export function laxMap(val) {return isNil(val) ? new Map() : reqMap(val)}

export function isPromise(val) {return hasMeth(val, `then`)}
export function reqPromise(val) {return isPromise(val) ? val : convFun(val, isPromise)}
export function optPromise(val) {return isNil(val) ? val : reqPromise(val)}
export function onlyPromise(val) {return isPromise(val) ? val : undefined}

export function isIter(val) {return hasMeth(val, Symbol.iterator)}
export function reqIter(val) {return isIter(val) ? val : convFun(val, isIter)}
export function optIter(val) {return isNil(val) ? val : reqIter(val)}
export function onlyIter(val) {return isIter(val) ? val : undefined}

export function isIterAsync(val) {return hasMeth(val, Symbol.asyncIterator)}
export function reqIterAsync(val) {return isIterAsync(val) ? val : convFun(val, isIterAsync)}
export function optIterAsync(val) {return isNil(val) ? val : reqIterAsync(val)}
export function onlyIterAsync(val) {return isIterAsync(val) ? val : undefined}

export function isIterator(val) {return isIter(val) && hasMeth(val, `next`)}
export function reqIterator(val) {return isIterator(val) ? val : convFun(val, isIterator)}
export function optIterator(val) {return isNil(val) ? val : reqIterator(val)}
export function onlyIterator(val) {return isIterator(val) ? val : undefined}

export function isIteratorAsync(val) {return isIterAsync(val) && hasMeth(val, `next`)}
export function reqIteratorAsync(val) {return isIteratorAsync(val) ? val : convFun(val, isIteratorAsync)}
export function optIteratorAsync(val) {return isNil(val) ? val : reqIteratorAsync(val)}
export function onlyIteratorAsync(val) {return isIteratorAsync(val) ? val : undefined}

export function isGen(val) {return isIterator(val) && hasMeth(val, `return`) && hasMeth(val, `throw`)}
export function reqGen(val) {return isGen(val) ? val : convFun(val, isGen)}
export function optGen(val) {return isNil(val) ? val : reqGen(val)}
export function onlyGen(val) {return isGen(val) ? val : undefined}

// TODO add `isErrCls`.
export function isCls(val) {return isFun(val) && isObj(val.prototype)}
export function reqCls(val) {return isCls(val) ? val : convFun(val, isCls)}
export function optCls(val) {return isNil(val) ? val : reqCls(val)}
export function onlyCls(val) {return isCls(val) ? val : undefined}

export function isSubCls(sub, sup) {return isCls(sub) && (sub === sup || isInst(sub.prototype, sup))}
export function reqSubCls(val) {return isSubCls(val) ? val : convFun(val, isSubCls)}
export function optSubCls(val) {return isNil(val) ? val : reqSubCls(val)}
export function onlySubCls(val) {return isSubCls(val) ? val : undefined}

export function isList(val) {return isSome(val) && (isArr(val) || (isIter(val) && isNat(getLength(val))))}
export function reqList(val) {return isList(val) ? val : convFun(val, isList)}
export function optList(val) {return isNil(val) ? val : reqList(val)}
export function onlyList(val) {return isList(val) ? val : undefined}
export function laxList(val) {return isNil(val) ? [] : reqList(val)}

export function isSeq(val) {return isList(val) || isSet(val) || isIterator(val)}
export function reqSeq(val) {return isSeq(val) ? val : convFun(val, isSeq)}
export function optSeq(val) {return isNil(val) ? val : reqSeq(val)}
export function onlySeq(val) {return isSeq(val) ? val : undefined}

export function isVac(val) {return !val || (isArr(val) && val.every(isVac))}
export function reqVac(val) {return isVac(val) ? val : convFun(val, isVac)}
export function optVac(val) {return isNil(val) ? val : reqVac(val)}
export function onlyVac(val) {return isVac(val) ? val : undefined}

// TODO consider renaming to `isScalarOpt` and adding a non-nil version.
export function isScalar(val) {
  if (isObj(val)) {
    const fun = get(val, `toString`)
    return isFun(fun) && fun !== Object.prototype.toString && fun !== Array.prototype.toString
  }
  return !isFun(val)
}
export function reqScalar(val) {return isScalar(val) ? val : convFun(val, isScalar)}
export function optScalar(val) {return isNil(val) ? val : reqScalar(val)}
export function onlyScalar(val) {return isScalar(val) ? val : undefined}

export function isArrOf(val, fun) {
  reqFun(fun)
  return isArr(val) && val.every(fun)
}

// TODO improve error message.
export function reqArrOf(val, fun) {
  for (const elem of reqArr(val)) req(elem, fun)
  return val
}

export function optArrOf(val, fun) {return isNil(val) ? val : reqArrOf(fun)}

export function isEmpty(val) {
  if (!isObj(val)) return true
  if (isList(val)) return val.length === 0
  if (isIter(val)) return getSize(val) === 0
  return false
}

export function isInst(val, cls) {return isObj(val) && val instanceof cls}

/* Assert */

export function req(val, fun) {
  if (reqValid(fun)(val)) return val
  throw errFun(val, fun)
}

export function reqOneOf(val, funs) {
  for (const fun of reqArr(funs)) if (fun(val)) return val
  throw errOneOf(val, funs)
}

export function opt(val, fun) {
  reqValid(fun)
  return isNil(val) ? val : req(val, fun)
}

export function optOneOf(val, funs) {
  return isNil(val) ? val : reqOneOf(val, funs)
}

export function reqInst(val, cls) {
  if (!isInst(val, cls)) {
    throw TypeError(`expected instance of ${showFunName(cls)}, got ${instDesc(getCon(val))}${show(val)}`)
  }
  return val
}

export function optInst(val, cls) {
  reqCls(cls)
  return isNil(val) ? val : reqInst(val, cls)
}

export function only(val, fun) {return reqValid(fun)(val) ? val : undefined}

/* Cast */

export function toInst(val, cls) {return isInst(val, cls) ? val : new cls(val)}
export function toInstOpt(val, cls) {return isNil(val) ? val : toInst(val, cls)}

export function render(val) {
  if (isStr(val)) return val
  if (isDate(val)) return renderDate(val)
  if (isSome(val) && isScalar(val)) return val + ``
  throw errConv(val, `string`)
}

export function renderLax(val) {return isNil(val) ? `` : render(val)}

export function show(val) {
  if (isStr(val)) return JSON.stringify(val)
  if (isFun(val)) return showFun(val)
  if (isObj(val)) return showObj(val)
  return val + ``
}

/* Misc */

export function is(a, b) {return a === b || (isNaN(a) && isNaN(b))}
export function truthy(val) {return !!val}
export function falsy(val) {return !val}
export function nop() {}
export function id(val) {return val}
export function val(src) {return function val() {return src}}
export function panic(val) {throw val}
export function True() {return true}
export function False() {return false}
export function npo() {return Object.create(null)}
export function vac(val) {return isVac(val) ? undefined : val}

export function bind(fun, ...args) {return reqFun(fun).bind(this, ...args)}

export function not(fun) {
  reqFun(fun)
  return function not() {return !fun.apply(this, arguments)}
}

export function hasIn(val, key) {return isComp(val) && key in val}
export function hasOwn(val, key) {return isComp(val) && Object.prototype.hasOwnProperty.call(val, key)}
export function hasOwnEnum(val, key) {return isComp(val) && Object.prototype.propertyIsEnumerable.call(val, key)}
export function hasMeth(val, key) {return hasIn(val, key) && isFun(val[key])}

/* Op */

// TODO add type checking. `+` must require consistent types.
export function add(a, b) {return a + b}
export function sub(a, b) {return a - b}
export function mul(a, b) {return a * b}
export function div(a, b) {return a / b}
export function rem(a, b) {return a % b}
export function lt(a, b) {return a < b}
export function gt(a, b) {return a > b}
export function lte(a, b) {return a <= b}
export function gte(a, b) {return a >= b}
export function neg(val) {return -val}
export function inc(val) {return val + 1}
export function dec(val) {return val - 1}

/* Internal */

function isDictProto(val) {return isNil(val) || val === Object.prototype}
function isFunType(val, name) {return isFun(val) && val.constructor.name === name}
function instDesc(val) {return isFun(val) ? `instance of ${showFunName(val)} ` : ``}

function reqValid(fun) {
  if (!isFun(fun)) {
    throw TypeError(`expected validator function, got ${show(fun)}`)
  }
  return fun
}

export function convFun(val, fun) {throw errFun(val, fun)}
export function errFun(val, fun) {return errType(val, showFunName(fun))}
export function errType(val, msg) {return TypeError(`expected variant of ${msg}, got ${show(val)}`)}
export function errConv(val, msg) {return TypeError(msgConv(val, msg))}
export function errSynt(val, msg) {return SyntaxError(msgConv(val, msg))}
export function errInst(val, inst) {return errConv(val, inst.constructor.name)}
export function msgConv(val, msg) {return `unable to convert ${show(val)} to ${msg}`}
export function msgType(val, msg) {return `expected variant of ${msg}, got ${show(val)}`}
export function errIn(val, key) {return TypeError(`unable to find ${show(key)} in ${show(val)}`)}

function errOneOf(val, funs) {return TypeError(msgType(val, `[` + showFuns(funs) + `]`))}

export function convType(val, src, msg) {
  if (isSome(val)) return val
  throw errConv(src, msg)
}

export function convSynt(val, src, msg) {
  if (isSome(val)) return val
  throw errSynt(src, msg)
}

function showFun(val) {return `[function ${val.name || val}]`}
function showFuns(funs) {return funs.map(showFunName).join(`, `)}
function showFunName(fun) {return fun.name || showFun(fun)}

function showObj(val) {
  if (isInst(val, Error)) return val + ``

  const con = getCon(val)
  if (!con || con === Object || con === Array) return JSON.stringify(val)

  const name = getName(con)
  return name ? `[object ${name}]` : val + ``
}

/*
Like `val?.[key]` but with sanity checks: works only on composite values and
avoids accessing the property unless it satisfies the `in` check.
*/
export function get(val, key) {return isComp(val) && key in val ? val[key] : undefined}
export function reqIn(ref, key) {if (!hasIn(ref, key)) throw errIn(ref, key)}
export function reqGet(ref, key) {return reqIn(ref, key), ref[key]}

function getProto(val) {return isObj(val) ? Object.getPrototypeOf(val) : undefined}
function getCon(val) {return get(getProto(val), `constructor`)}
function getName(val) {return get(val, `name`)}
function getLength(val) {return get(val, `length`)}
function getSize(val) {return get(val, `size`)}

// This is actually faster than default rendering.
function renderDate(val) {
  if (val.toString === Date.prototype.toString) return val.toISOString()
  return val.toString()
}

export function structKeys(val) {
  return isNil(val) ? [] : Object.keys(reqStruct(val))
}
