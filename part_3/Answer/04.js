function cariModus(arr) {
    arr.sort((x, y) => x - y);

    var bestStreak = 1;
    var bestElem = arr[0];
    var currentStreak = 1;
    var currentElem = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] != arr[i]) {
            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
                bestElem = currentElem;
            }

            currentStreak = 0;
            currentElem = arr[i];
        }

        currentStreak++;
    }
    if (bestStreak == 1) {
        return -1;
    } else {
        return currentStreak > bestStreak ? currentElem : bestElem;
    }
}


console.log(cariModus([10, 4, 5, 2, 4])); // 4 [2 4 4 5 10]
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1