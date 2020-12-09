function calculate(h, w) {
    h = h / 100; // переводимо зріст у метри
    var bmi = w / (h * h);

    if (bmi >= 18.6 && bmi <= 25) {
        console.log("Норма");
    }   else if (bmi < 16) {
        console.log("Гостра недостача ваги");
    }   else if (bmi >= 16 && bmi < 18.6) {
        console.log("Недостача ваги");
    }   else if (bmi > 25 && bmi < 30) {
        console.log("Надмірна вага");
    }   else if (bmi > 30) {
        console.log("Ожиріння");
    };
}