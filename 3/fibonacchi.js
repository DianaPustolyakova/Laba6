function fibonacchi(n) {
    let a = 1;
    let b = 1;
    let fibonacchiArray = [0, 1, 1];
    if (n < 3) {
        console.log("Перші три числа Фібоначчі: [0, 1, 1]");
    }   else {
        for (let i = 4; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
            fibonacchiArray.push(b);
        };
        console.log(fibonacchiArray); 
    };
    
}