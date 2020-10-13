function targetTerdekat(arr) {
  var jarak =[];
  for (let i = 0; i < arr.length; i++) {
    var x = arr.indexOf('x', i);
    var o = arr.indexOf('o', i);
    if(x != -1){
     jarak.push(Math.abs(x - o));
    }
  }
  if (jarak.length==0) {
    return 0;
  } else {
    var min = jarak[0];
    for (var j = 1; j < jarak.length; j++) {
        if (jarak[j] < min) { 
            min = jarak[j];
        }
    }
  return min;
  }
}



// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2