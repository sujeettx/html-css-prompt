let monthSname = {
    1: 'janverry',
    2: 'fevry',
    3: 'march',
    4: 'april',
    5: 'mai',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december'
}
let printMonth = (month) => monthSname[month] || "unknown month number";
// console.log(printMonth(5));


let bijliBilCalculate = (units) => {
    if (units<=100) {
        let bill = units * 10;
        return bill;
    }
    else if (units>100 && units<=200) {
        let bill = units * 15;
        return bill;
    }
    else if (units>200 && units<=300) {
        let bill = units * 20;
        return bill;
    }
    else {
        let bill = units * 25;
        return bill;
    }
}
console.log(bijliBilCalculate(20));
console.log(bijliBilCalculate(100));
console.log(bijliBilCalculate(101));
console.log(bijliBilCalculate(200));
console.log(bijliBilCalculate(201));
console.log(bijliBilCalculate(300));
console.log(bijliBilCalculate(150));







