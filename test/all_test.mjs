// Should be tested first.
import './test_test.mjs'
import './lang_test.mjs'

import './cli_test.mjs'
import './coll_test.mjs'
import './http_test.mjs'
import './iter_test.mjs'
import './obj_test.mjs'
import './obs_test.mjs'
import './str_test.mjs'
import './time_test.mjs'
import './url_test.mjs'
import './dom_reg_test.mjs'

if (import.meta.main) console.log(`[test] ok!`)
