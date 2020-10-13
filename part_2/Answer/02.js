var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(inputan) {
    var id = [];
    var name = [];
    var ttl = [];
    var hobi = [];

    for (let i = 0; i < inputan.length; i++) {
        for (let j = 0; j <inputan[i].length; j++) {
            if (j == 0) {
                id[i] = inputan[i][j];
            } else if (j == 1) {
                name[i] = inputan[i][j];
            } else if (j == 2) {
                ttl[i] = inputan[i][j];
            } else if (j == 3) {
                ttl[i] = ttl[i] + ', ' + inputan[i][j];
            }else{
                hobi[i] = inputan[i][j];
            }
        }

        console.log('Nomor ID: ' + id[i])
        console.log('Nama Lengkap: ' + name[i])
        console.log('TTL: ' + ttl[i])
        console.log('Hobi: ' + hobi[i])
        console.log('');
    }
}
console.log(dataHandling(input));