function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0)
        console.log(`FizzBuzz`);
        else if (i % 3 === 0)
        console.log(`Fizz`);
        else if (i % 5 === 0)
        console.log(`Buzz`);
        else {
            console.log(`Pop`)
        }
    
    }
  
    }
fizzBuzz()




const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
function averager(array) {
    var total = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        total = element + total;
    }
    console.log(Math.round(total / array.length))
}
averager(prices)





function celToFah(n) {
    const f = n * 9 / 5 + 32;
    console.log(f);
}

function celToKel(n) {
    const k = n + 273.15;
    console.log(k);
}
celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);

function pow(num1, num2) {
    let total = num1;
    for (let i = 1; i < num2; i++) {
        total = total * num1;
    }
    console.log(total)
}
pow(2,3);