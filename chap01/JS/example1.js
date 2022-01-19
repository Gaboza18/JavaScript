var greeting = "안녕하세요 ";
var userName = "웹지니";
var message = ", 주문내역을 확인해 주세요";

var elTitle = document.getElementById("greeting");
elTitle.textContent = greeting + userName + message;


var userSign = "Montague House change";
var tiles = userSign.length; // 변수 userSign 문자열의 길이 계산하여 tiles 변수에 값을 저장한다
var subTotal = tiles * 500;
var shipping = 140;
var grandTotal = subTotal + shipping;


var elSign = document.getElementById("userSign");
elSign.textContent = userSign;

var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

var elSubtotal = document.getElementById("subTotal");
elSubtotal.textContent = subTotal;

var elShipping = document.getElementById("shipping");
elShipping.textContent = shipping;

var elgrandTotal = document.getElementById("grandTotal");
elgrandTotal.textContent = grandTotal;
