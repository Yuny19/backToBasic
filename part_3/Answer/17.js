function kaliTerusRekursif(angka) {
    // you can only write your code here!

    var str = angka.toString()
    // return str

    if (str.length == 1) {
        return Number(str)
    } else {
        var total = 1
        for (i = 0; i < str.length; i++) {
            total = total * Number(str[i])
        } return kaliTerusRekursif(total)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6