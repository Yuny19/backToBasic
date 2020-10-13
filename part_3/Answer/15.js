function makanTerusRekursif(waktu) {
    let kali=0;
    let yu='yy';
console.log(kali)
    if(waktu==0){
      return 0;
    }
    if(waktu>=0 && waktu<=15){
      return 1;
    }else{
      kali=kali+1;
      return kali+ makanTerusRekursif(waktu-15);
    }


}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
// console.log(makanTerusRekursif(100)); // 7
// console.log(makanTerusRekursif(90)); // 6
// console.log(makanTerusRekursif(10)); // 1
// console.log(makanTerusRekursif(0)); // 0