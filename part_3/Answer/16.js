function totalDigitRekursif(angka) {
    let str = angka.toString();

    if (str.length == 1) {
        return Number(str);
    } else {
        let angka1 = Number(str[0]);
        let angka2 = Number(str.slice(1));
        return angka1 + totalDigitRekursif(angka2)
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5