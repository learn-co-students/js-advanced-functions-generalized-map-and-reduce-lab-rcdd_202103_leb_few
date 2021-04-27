// Add your functions here
function map(num, func){
  return num.map(func);
}

function reduce(num,func){
  return num.reduce(func);
}

function mapToSquare(x){
  return x * x;
}

function reduce(a, c, startingValue) {
  let total;
  if (startingValue) {
    total = startingValue;
    for (let i = 0; i < a.length; i++) {
      total = c(a[i], total);
    }
    return total;
  } else {
    total = a[0];
    for (let i = 1; i < a.length; i++) {
      total = c(a[i], total);
    }
    return total;
  }
}

map(num,double);