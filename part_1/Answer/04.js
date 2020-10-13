function balikKata(kata) {
    var newKata = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        newKata = newKata + kata[i];
    }

    return newKata;
}
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));