// Add your functions here
// function map(sourceArray){
//     return sourceArray.map(x => x * -1);
// }
// map();
//
// function map(sourceArray){
//     return sourceArray.map(x => x);
// }
//
// function map(sourceArray){
//     return sourceArray.map(x => x*2);
// }
//
// function map(sourceArray){
//     return sourceArray.map(x => x*x)
// }

function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }

  return r;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
























// function reduce(sourceArray, startingPoint = 0){
//     const reducer = function(accumulator, currentValue){ return accumulator + currentValue }
//
//     return sourceArray.reduce(reducer, startingPoint)
// }
//
// function reduce(sourceArray){
//
//     const reducer = function(accumulator, currentValue){
//         if(!!accumulator == true && !!currentValue == true){
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return sourceArray.reduce(reducer, true)
// }
//
// function reduce(sourceArray){
//     const reducer = function(accumulator, currentValue){
//         if(accumulator == true){
//             return true
//         } else {
//             return !!currentValue
//         }
//     }
//     return sourceArray.reduce(reducer, false)
// }
