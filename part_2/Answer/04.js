function angkaPalindrome(num) {
    var cek = true;
    var newNumber='';
    let x=0;
    while (cek) {
        num ++;
        var number = num.toString();
        for (let i = number.length - 1; i >= 0; i--) {
            newNumber = newNumber + number[i];
        }
        if(num==newNumber){
            cek=false;
        }else{
            newNumber='';
        }
    }
    return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001