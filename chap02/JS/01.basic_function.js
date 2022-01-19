var msg = "지금 회원가입 하면 10% 할인" /* 전역변수 */

// 함수 선언
function updateMessage() {
    var elmsg = document.getElementById("message")
    elmsg.textContent = msg;
}

// 함수 호출
updateMessage();