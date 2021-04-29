// Add your functions here
function map(array, fun){
  return array.map(fun);
}

function reduce(array, fun, startValue){
  if(startValue){
    return array.reduce(fun) + startValue;
  }else {
    return array.reduce(fun);
  }
}
