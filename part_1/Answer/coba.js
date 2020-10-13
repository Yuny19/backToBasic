function mencoba(arr){
    array=[1,2];
    result=[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<arr.length;j++){
            if(array[i]==arr[j]){
                result.push(arr[i]);
            }
        }
    }

    return result
}

console.log(mencoba([3,4,5]))