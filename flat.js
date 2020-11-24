/* 
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Parameters
depth Optional
  The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
Return value
  A new array with the sub-array elements concatenated into it.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

*/
const arr = [1, [2, [3, [4]]]];

const res = arr.flat(3);

console.log(res);
