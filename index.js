// Add your functions here
function map(arr,func) {
  return arr.map(func);
}


// function reduce(arr,starting) {
//   return arr.reduce((memo,i) => {
//     if(starting === undefined) {
//       memo *= i;
//       return memo !==0;
//     }
//     else {
//       return memo += i;
//     }
//   },starting);
// }

function reduce(arr,func) {
  return arr.reduce(func);
}

console.log(map([1, 2, 3, -9], function(a){ return a * a }))
// console.log(reduce([1,2,3],(memo,i) => {
//   memo *= i;
//   return memo!==0;
// },1))
