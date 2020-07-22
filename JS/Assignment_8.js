
var randomNumbers = [];
do {
    var r = parseInt(Math.random() * 100);
    if (!randomNumbers.includes(r,0)) {
        randomNumbers.push(r);
        console.log(r);
    }
} while (randomNumbers.length < 5);


var chooseNumbers = [];
do {
    var c = prompt("Input a number "+(chooseNumbers.length+1));
    c = parseInt(c);
    if (!chooseNumbers.includes(c,0) && c >= 0 && c < 100 && !isNaN(c)){
        chooseNumbers.push(c);
    }
} while (chooseNumbers.length < 5);

var count = 0;
chooseNumbers.map(function (n) {
    if(randomNumbers.includes(n,0)){
        count++;
    }
});

if(count >= 5){
    alert("Congratulations");
} else {
    alert("Goodluck next time!");
}