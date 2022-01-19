// 클래스 이름이 "hot"인 요소를 저장한다.
// elements : 배열 변수
var elements = document.getElementsByClassName("hot"); // hot 클래스 태그를 찾는다.

if (elements.length > 2) { // 선택된 요소의 개수가 3개 이상일 경우 수행 조건
    var el = elements[2]; // 3번째 배열값을 cool 로 바꾼다.
    el.className = "cool";
}