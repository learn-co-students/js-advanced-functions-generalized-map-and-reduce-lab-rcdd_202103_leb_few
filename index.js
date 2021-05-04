// Add your functions here
function mapToNegativize(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) { // make i local
    sourceArray[i] *= -1; // negate the array item
    sourceArray[i] =* -1; // negate the array item
  }
  return sourceArray; // return the manipulated array
}

const negativeList = mapToNegativize([7, 2, 3, 4]);
console.log(negativeList);
///

function mapToNoChange(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = sourceArray[i];
  }
  return sourceArray
}
console.log([1,4,5]);

///

function mapToDouble(sourceArray) {
  for (let i=0; i < sourceArray.length; i++) {
    sourceArray[i] = sourceArray[i] * 2;
  }
  return sourceArray
}
console.log([2,5,6,6]);

///

function mapToSquare(sourceArray) {
  for (let i=0; i < sourceArray.length; i++){
    sourceArray[i] = sourceArray[i] **2;
  }
  return sourceArray
}
console.log([5,7,8]);

///

function reduceToTotal(sourceArray, startingPoint) {
  let total = 0;
  for (let i=0; i<sourceArray.length; i++)
  total += sourceArray[i];
  return total;
}
reduceToTotal([7,5,8]);
