let cartContent = '';

for (let i in orderdata.orders) {
    cartContent += `<p>${orderdata.orders[i].name} - $ ${orderdata.orders[i].price}</p>`
}

function shopping() {
    document.getElementById('questionForm').innerHTML = '';
    document.getElementById('shoppingOverlay').innerHTML = `	
        <div class="cartContent">
            <p align="right"><button type="button" onclick="closeShopping()"><strong>X</strong> Close</button></p>
            <p>My Shopping Cart</p>
            <hr>
            ${cartContent}
            <hr>
            <button><a href="shopping_cart.html">Checkout</a></button>
        </div>
    `
}
function closeShopping() {
    document.getElementById('shoppingOverlay').innerHTML = '';
}