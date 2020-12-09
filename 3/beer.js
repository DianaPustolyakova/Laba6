function beer() {
    var word = "bottles";
    var bottles = 99;
    for (bottles; bottles > 0; bottles--) {
        if (bottles == 1){
            word = "bottle"
        }
        console.log(bottles + " " + word + " of beer on the wall");
        console.log(bottles + " " + word + " of beer,");
        console.log("Take one down, pass it around,");

        if (bottles == 1){
            console.log(bottles + " " + word.slice(0, -1) + " of beer on the wall.");
        };
    }
    if (bottles <= 0) {
        console.log("No more " + word + " of beer on the wall.");
    };
}