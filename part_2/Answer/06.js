function pasanganTerbesar(num) {
  // var number=num.toString();
  // var newNumber=[];
  // for (let i=0; i<number.length-1; i++){
  //   newNumber[i]=number[i]+''+number[i+1];
  // }

  // var max = newNumber[0];
  //   for (var j = 1; j < newNumber.length; j++) {
  //       if (newNumber[j] > max) { 
  //           max = newNumber[j];
  //       }
  //   }
  // return max;

  var str = num.toString();
  var max = 0;
  for (let i = 0; i < str.length-1; i++) {
    var pasangan=str[i]+str[i+1];
    if(Number(pasangan)>max){
      max=Number(pasangan)
    }
  }

  return max;

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99