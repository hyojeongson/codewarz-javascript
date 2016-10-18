
var chai = require('chai');
var assert = chai.assert;
var queueTime = require('./the_supermarket_queue.js');


describe('The Super maket Queue', function(){
  it('should allocate right time', function(){
    assert.equal(queueTime([], 1), 0);
    assert.equal(queueTime([1,2,3,4], 1), 10);
    assert.equal(queueTime([2,2,3,3,4,4], 2), 9);
    assert.equal(queueTime([1,2,3,4,5], 100), 5);
  });
});
