var elements = document.getElementsByTagName("li"); // li 태그 모두 선택

if (elements.length > 0) {
    var elm = elements[0]; // 0번째 요소
    elm.className = "cool" // li 태그중에 0번째 요소만 cool로 변경된다.
}