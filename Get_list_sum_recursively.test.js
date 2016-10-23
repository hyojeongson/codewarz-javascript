var chai = require('chai');
var assert = chai.assert;
var queueTime = require('./Get_list_sum_recursively.js');


describe('The Super maket Queue', function(){
  it('should allocate right time', function(){

    assert.assertEquals(sumR([]), 0);
    assert.assertEquals(sumR([1]), 1);
    assert.assertEquals(sumR([1,1,1]), 3);
  });
});
