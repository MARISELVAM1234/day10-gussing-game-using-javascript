let secretNumber = 7;
let chance = 5;
for (i = 0; i < chance; i++) {
    trial = chance-i
    console.log( "Trial :",  trial);
    var y = parseInt(prompt("Enter your Gussing number"));
    if (secretNumber == y) {
        console.log("Your gussing number :",y);
        console.log("You are win the game (Your gussing is correct)");
    }
    else if (secretNumber < y) {
        console.log("Your gussing number :",y);
        console.log("Secretnumber is smaller then your gussing number");
    }
    else if (secretNumber > y) {
        console.log("Your gussing number :",y);
        console.log("Secretnumber is greater then your gussing number");
    }
    else if (0 == trial) {
        console.log("Your gussing number :",y);
        console.log("You are losing the chance")
    }
}


