var name = "Diana";
var surname = "Postulyakova";

function poslidovnist() {
    for (var i = 100; i >= 1; i--) {
        if ((i % 3) == 0 && (i % 5) == 0) {
            console.log(name + " " + surname);
        }   else if ((i % 3) == 0) {
            console.log(name);
        }   else if ((i % 5) == 0) {
            console.log(surname);
        }   else {
            console.log(i);
        }
    }
};