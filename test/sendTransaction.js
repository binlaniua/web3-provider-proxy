const assert = require('chai').assert;
const { asyncSend: send, isHex: isHex } = require('./client');
const util = require('../src/utils');
const { describe, it } = require("mocha")

describe('sendTransaction', function () {
  describe('eth_sendTransaction', function () {
    it('should return', async function () {
      let data = {
        from: '0x1515db5834d8f110eee96c3036854dbf1d87de2b',
        to: '0x1386b4185a223ef49592233b69291bbe5a80c527',
        value: util.numToHex(100)
      };
      let { result, error } = await send('eth_sendTransaction', data);

      result
        ? isHex(result)
        : assert(error.message == "the method cfx_sendTransaction does not exist/is not available"
          || error.message == "Method not found"
        )
    });
  });
});

