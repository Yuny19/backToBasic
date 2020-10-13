function balikString(kata) {
    var String= kata[0];
    var newKata = '';
    for (let i = kata[0].length - 1; i >= 0; i--) {
        newKata = newKata + String[i];
    }

    return newKata;
}
console.log(balikString(['hello world!']));