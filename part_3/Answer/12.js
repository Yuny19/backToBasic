function countProfit(shoppers) {
    let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];


    var listShop = [];

    for (let i = 0; i < listBarang.length; i++) {
        let shopper = {
            product: '',
            shoppers: [],
            leftOver: 2,
            totalProfit: 0
        }
        let jml=0;
        for (let j = 0; j < shoppers.length; j++) {
            if (shoppers[j].product === listBarang[i][0]) {
                if (shoppers[j].amount <= listBarang[i][2]) {
                    shopper.shoppers.push(shoppers[j].name);
                    listBarang[i][2]=listBarang[i][2]-shoppers[j].amount;
                    jml=jml+shoppers[j].amount;
                }
            }
        }
        shopper.product=listBarang[i][0];
        shopper.leftOver=listBarang[i][2];
        shopper.totalProfit=jml*listBarang[i][1];
        listShop.push(shopper);

    }
return listShop;

}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log(countProfit([]));