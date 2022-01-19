var title;
var message;

title ="웹 지니의 특별한 제안";
message='<a href="sale.html">25% 할인!</a>';
/* 문자열 안에 따옴표를 포함하는 경우
   ' ' 와 " " 를 혼합하여 활용한다. */
var elTitle = document.getElementById('title');
elTitle.textContent = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message; /* 링크를 인식하기 위해서 textContent -> innerHTML 사용*/