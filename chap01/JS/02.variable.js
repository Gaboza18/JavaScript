var price; /* 단가 */
var quantity; /* 수량 */
var total; /* 총합 */

price = 500;
quantity = 24;
total = price * quantity;

/* id가 "cost" 태그를 찾아 출력한다 */
var elm1 = document.getElementById("cost"); /* id="cost" 찾아가는 메소드 -> elm1 변수에 저장한다*/
elm1.textContent = total + '원'; /* elm1 출력 */