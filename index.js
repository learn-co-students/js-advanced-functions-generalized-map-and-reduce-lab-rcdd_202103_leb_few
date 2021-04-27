function map(array, func){
  return array.map(func);
}


// function Negativize(item){
//   return item *1;
// }
// function NoChange(item){
//   return item;
// }
// function double(item){
//   return item*2;
// }
// function square(item){
//   return item*item;
// }

function reduce(array, funct, memo=0){
 if(memo===0) {return array.reduce(funct)}
 else {return array.reduce((funct), memo)}
}

// function reduce(array, functi){
//   return array.reduce(functi);
// }

// function total( item,result){
//   return result+item;
// }

// function alltrue(item,result){
//   if(!!item==true && !!result==true){
//     return true;
//   }else{
//     return false;
//   }
//   }

// function anyTrue(item,result){
//   if(result===true){
//     return true;
//   }else{
//     return false;
//   }
//   }
// function map(arr, func){
//     let newArr = []
//     arr.forEach(element => {
//         newArr.push(func(element))
//     });
//     return newArr
// }
