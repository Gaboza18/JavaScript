var level = 3;
var msg;

switch (level) {
    case 1:
        msg = "첫번째 레벨 테스트를 통과 하였습니다."
        break;

    case 2:
        msg = "두번째 레벨 테스트를 통과 하였습니다."
        break;

    case 3:
        msg = "마지막 레벨 테스트를 통과 하였습니다."
        break;

    default:
        msg = "똑디 하세요"
}

var elm = document.getElementById("answer");
elm.textContent = msg;
