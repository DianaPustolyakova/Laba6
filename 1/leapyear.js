function year(y) {
    if ((y % 100) == 0) {
        if ((y % 400) == 0) {
            console.log("Високосний рік");
        }   else {
            console.log("Невисокосний рік");
        }
    }   else if ((y % 4) == 0) {
        console.log("Високосний рік");
    }   else {
        console.log("Невисокосний рік");
    };
};