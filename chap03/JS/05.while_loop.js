var i = 1;
var msg = "" // 빈문자열

while (i < 10) { // 3단 출력
    msg += i + " x 3 = " + (i * 3) + "<br>";
    i++;
}

document.getElementById("answer").innerHTML = msg;