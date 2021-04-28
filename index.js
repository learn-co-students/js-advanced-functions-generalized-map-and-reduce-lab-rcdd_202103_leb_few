// Add your functions here
// function map(array, function(a){ return a.map(array) }) ;
// map(function(currentValue) { ... })
// map(function(a) callbackFn(currentValue) { currentValue.map(a) })
function map(d, fnad) {
    return d.map(x => fnad(x))
}
function reduce(source,cb,startingvalue=0) {

}
function reduce(arr, cb, start=0) {
    let r = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1

    for (; i < arr.length; i++) {
      r = cb(arr[i], r)
    }

    return r;
} 
