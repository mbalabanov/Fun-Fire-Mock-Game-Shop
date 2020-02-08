let ordersContent = `
    <tr class="topoftop">
        <th width="20%" align="center">Image</td>
        <th width="60%" align="center">Product Description</td>
        <th width="20%" align="center">Price</td>
    </tr>
`;

for (let i in orderdata.orders) {
    ordersContent += `
    <tr valign="top">
        <td><img src="${orderdata.orders[i].image}"></td>
        <td><h3>${orderdata.orders[i].name}</h3><p>${orderdata.orders[i].description}</p></td>
        <td>$ ${orderdata.orders[i].price}</td>
    </tr>
    `
}

document.getElementById('ordersTable').innerHTML = ordersContent;

function finishOrder() {
    document.getElementById('ordercontainer').innerHTML = `
        <h2>Thank You!</h2>
        <p align="center">The payment has been completed. Your order confirmation will be on the way soon.</p>
        <p align="center"><a href="index.html">Back to front page</a></p>
    `
}