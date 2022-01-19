var subtotal = (13 + 1) * 500; /* ( , ) -> * 순서 */
var shipping = 10 * (13 + 1);
var total = subtotal + shipping;

var elSub = document.getElementById("subtotal");
var elShip = document.getElementById("shipping");
var elTotal = document.getElementById("total");

elSub.textContent = subtotal;
elShip.textContent = shipping;
elTotal.textContent = total;
