function fpb(angka1, angka2) {
    var fpb = [];
    var max = 0;
    for (let i = 0; i <= angka1; i++) {
        var a = angka1 % i;
        var b = angka2 % i;
        if (a == b && b == 0) {
            if (i > max) {
                max = i;
            }
        } 
    }
    return max;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1