// Add your functions here

function map(arr, funct) {
  let myArr = []

  for (let i = 0; i < arr.length; i++) {
    let e = arr[i]
    myArr.push(funct(e))
  }

  return myArr;
}

function reduce(arr, funct, starting){
  let myArr2 = (!!starting) ? starting : arr[0]
  let i = (!!starting) ? 0 : 1

  for (; i < arr.length; i++) {
    myArr2 = funct(arr[i], myArr2)
  }

  return myArr2;
}
