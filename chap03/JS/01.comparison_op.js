var pass = 60; // 합격 기준점수
var score = 70; // 자신의 점수

var hasPassed = score >= pass; // true값 저장
var elm = document.getElementById("answer");
elm.textContent = "Level 테스트 결과 " + hasPassed; // boolean 값이 참=true 거짓=false 문자열로 반환