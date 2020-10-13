function tentukanDeretAritmatika(arr) {
    var selisih1 = arr[1] - arr[0];
    var i=1;
    var result='';
    while ( i < arr.length-1) {
        var selisih2 = arr[i + 1] - arr[i];
        if (selisih1 == selisih2) {
            result=selisih2
        }else{
            result= selisih2;
            i=arr.length;
        }
            i++;

    }
    if (selisih1==result){
        return true;
    }else{
        return false;
    }

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false