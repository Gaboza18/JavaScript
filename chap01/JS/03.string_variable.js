var title;
var message;

title = "웹 지니의 특별한 제안";
message = "우리의 변화에 주목하라";

var elName = document.getElementById('name');
elName.textContent = title; /* elName.innerHTML = title; 같은의미 */

var elNote = document.getElementById('note');
elNote.textContent = message;