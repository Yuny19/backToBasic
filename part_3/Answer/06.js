function hitungHuruf(kata) {
    var kt = kata.split(" ");
    var jml = 0;
    var word='';

    for (let i = 0; i < kt.length; i++) {
        for (let j = 0; j < kt[i].length; j++) {
            var count = 0;
            for (let k = 0; k < kt[i].length; k++) {
                if (kt[i][k] === kt[i][j]) {
                    count = count + 1;
                }
                if(jml<count){
                    jml=count;
                    word=kt[i]
                }
            }
        }
    }
return word;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau