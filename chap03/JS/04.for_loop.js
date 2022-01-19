var scores = [67, 87, 90];
var count = 0;
var msg = "";

for (var i = 0; i < scores.length; i++) { // int -> var 
    count = i + 1;
    msg += 'Round ' + count + ": ";
    msg += scores[i] + "<br>";
}

document.getElementById("answer").innerHTML = msg;