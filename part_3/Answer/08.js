function urutkanAbjad(str) {
    var asci = [];
    for (let i = 0; i < str.length; i++) {
        asci.push(str.charCodeAt(i));
    }
    asci.sort((x, y) => x - y);
    var urut = '';
    for (let j = 0; j < asci.length; j++) {
        urut = urut + String.fromCharCode(asci[j]);
    }

    return urut;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'