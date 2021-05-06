// Add your functions here

function map(src , fn) {
  let r = [];
  for (let i = 0; i < src.length; i++ ) {
    r.push(fn(src[i])) // Unique work
  }
  return r;
}

function reduce(src , fn ,startingPoint) {
  let r =startingPoint ;
  let i = 0;
  if(startingPoint === undefined){
    r=src[i];
    i=1;
  }

  for (; i < src.length; i++ ) {
    r = fn(src[i],r) // Unique work
  }

    return r;

}
