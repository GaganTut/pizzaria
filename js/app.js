var priceTotal = 0;

var orderPrice = document.createElement("p");
orderPrice.id = "cartTotal";
orderPrice.innerHTML = "$" + priceTotal.toFixed(2);

priceCart.appendChild(orderPrice);
console.log(omdPrice.innerHTML);

function addtoCart(pizzaID) {
	priceTotal += Number(pizzaID.innerHTML);
	orderPrice.innerHTML = "$" + priceTotal.toFixed(2);
}
var clearCartBtn = document.createElement("button");
clearCartBtn.id = "emptyCart";
clearCartBtn.innerHTML = "Click To Clear Cart";
clearCartBtn.onclick = function(){
	priceTotal = 0;
	orderPrice.innerHTML = "$" + priceTotal.toFixed(2);
};

priceCart.appendChild(clearCartBtn);