// Add your functions here
function map (srcArray, fctn){
  let arr =[];
  for (let i=0; i<srcArray.length; i++){
    let stg = srcArray[i]
    arr.push(fctn(stg))
  }
  return arr;
}

function reduce(src, fnct, start){
    let arr = (!!start) ? start : src[0];
    let i = (!!start) ? 0 : 1

    for (; i < src.length; i++){
        arr = fnct(src[i], arr)
    }
    return arr;
}
