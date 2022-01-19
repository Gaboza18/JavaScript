var stock;
var shipping;

stock = true; /* boolean 변수 */
shipping = true;

var elStock = document.getElementById("stock"); /* stock id 찾아간다 */
elStock.className = stock; /* stock class 변환 = true */

var elShipping = document.getElementById("shipping");
elShipping.className = shipping;