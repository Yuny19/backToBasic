function groupAnimals(animals) {
  var hewan = animals.sort();
  var zoo = [];

  for (let i = 0; i < hewan.length; i++) {
    var grup = [];
    if (zoo.length === 0) {
      grup.push(hewan[i]);
      zoo.push(grup)
    } else {
      var flag = false
      for (let j=0; j < zoo.length; j++) {
        var compare=zoo[j][0][0]
        if(compare==hewan[i][0]){
          zoo[j].push(hewan[i])
          flag=true
        }
      }

      if(flag==false){
        grup.push(hewan[i])
        zoo.push(grup)
      }
    }
  }

  return zoo;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]