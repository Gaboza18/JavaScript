var pass = 60; // 통과기준
var score = 25;
var msg // 표시할 문자열

if (score >= pass) {
    msg = "축하합니다! 합격입니다.";
} else {
    msg = "공부 다시 하세요!";
}

var elm = document.getElementById("answer");
elm.textContent = msg;