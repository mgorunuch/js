import '../cli_emptty.mjs'
import * as l from '../lang.mjs'
import * as cl from '../cli.mjs'
import * as t from '../test.mjs'

Error.stackTraceLimit = Infinity

export const cli = cl.Flag.os()
export const run = cli.get(`run`)
export const verb = cli.boolOpt(`verb`)
export const more = cli.boolOpt(`more`)
export const prec = cli.boolOpt(`prec`)

t.conf.testFilterFrom(run)
t.conf.benchFilterFrom(run)
if (verb) t.conf.testRep = t.conf.benchRep

// Opt-in for benchmarks that require more precision than whole nanoseconds.
if (prec) t.conf.benchRep = t.ConsoleAvgReporter.with(t.tsPico)

// Indicates benchmark accuracy. Should be single digit nanoseconds.
t.bench(function bench_baseline() {})

/*
Stuck here for now because it's used by multiple tests, and we don't want this
anywhere in the public API. This is useful for testing, but violates the
purpose of streams and should not be encouraged. Might move to `test.mjs`.

Doesn't `for .. of` over the stream because at the time of writing
it would work only in Deno, but not in Chrome where we also test.
*/
export async function readFull(src) {
  const read = src.getReader()
  let out = ``

  for (;;) {
    const {value, done} = await read.read()
    if (done) break
    out += chunkToStr(value)
  }

  return out
}

function chunkToStr(val) {
  if (l.isInst(val, Uint8Array)) return new TextDecoder().decode(val)
  return l.reqStr(val)
}
