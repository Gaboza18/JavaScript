/* 변수 선언 및 저장 방법 */

// 방법 1
/*
var price, quantity, total;
price = 500;
quantity = 14;
total = price * quantity;
*/

// 방법 2
/*
var price = 500;
var quantity = 14;
var total = price * quantity;
*/

// 방법 3
var price=600, quantity=14;
var total=price*quantity;

var elm = document.getElementById("cost"); /* cost ID 찾아간다 */
elm.textContent = total + "원";