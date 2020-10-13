function konversiMenit(menit) {
    var second = menit % 60;
    var minute = (menit - second) / 60;

    if (second<10){
        second="0"+second
    }
    
    return minute + ":" + second;
}

console.log(konversiMenit(63)); // 1:03 
console.log(konversiMenit(124)); // 2:04 
console.log(konversiMenit(53)); // 0:53 
console.log(konversiMenit(88)); // 1:28 
console.log(konversiMenit(120)); // 2:00