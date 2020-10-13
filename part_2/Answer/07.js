function naikAngkot(arrPenumpang) { 
    rute = ['A', 'B', 'C', 'D', 'E', 'F']; 

var hasil = [] ;
var biaya = 2000;

for (i = 0; i < arrPenumpang.length; i++) { 
    var data = arrPenumpang[i];
    var objectData = {}
    objectData.penumpang = data[0]
    objectData.naikDari = data[1]
    objectData.tujuan = data[2]
  
    var asal = rute.indexOf(data[1])
    // console.log(asal)
    var tujuan = rute.indexOf(data[2])
    // console.log(tujuan)
  
    var jarak = Math.abs(tujuan - asal)
    // console.log(jarak)
    
    objectData.bayar = jarak*biaya
    hasil.push(objectData)
  }
  
  return hasil;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']])); 
