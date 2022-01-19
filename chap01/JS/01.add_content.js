var today = new Date(); /* 오늘의 날짜 today 변수에 저장 */
var hour = today.getHours(); /* today -> 시간만 뽑아 저장 */
var greeting; /* 인사말 */

if (hour > 18) { /* 18:00 이후 */ 
    greeting = "Good evening";
} else if (hour > 12) { /* 12:00 이후 */
    greeting = "Good afternoon!";
} else if (hour) { /* 그외 시간 */
    greeting = "Good morning";
}

document.write("<h3>" + greeting + "</h3>"); /* <h3> ~ </h3> */