function solution(digits){
console.log(digits)
 var numArray = [];
 var max = 0;

 for ( var i = 0; i < digits.length ; i++) {
    var sliceStr = digits.slice(i, i+5);
    numArray.push(parseInt(sliceStr));

//     for( var j = 0; j < numArray.length ; j++){
//       if( numArray[j] > max){
//         max = numArray[j];
//       }
//    }
 }
   return Math.max(...numArray);
   console.log(numArray);
//    return max;


}

// if( parseInt(str) > max )
//   max = parseInt(str);
