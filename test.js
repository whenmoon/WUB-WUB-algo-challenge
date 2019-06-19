require('chai').should();

const songDecoder = require('./index.js');

const tests = [
  // test case                              solution               description
  [ ['WUBSwAnWUBWUBLaKeWUB'],               ['SwAn LaKe'],         'should be case sensitive' ],
  [ ['WUBWUBWUBNOWUBWOMANWUBNOWUBCRYWUB'],  ['NO WOMAN NO CRY'],   'should include spaces between words' ],
  [ ['WUBWUBBARBIEWUBWUBWUBGIRLWUBWUB'],    ['BARBIE GIRL'],       'should not throw a wobbly if the original song was BAD' ],
];

describe('Tests', () => tests.map(testCase =>
  it(testCase[2], () => songDecoder(testCase[0][0]).should.eql(testCase[1][0]))
));
