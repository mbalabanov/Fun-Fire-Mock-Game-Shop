
let prodParams = new URLSearchParams(window.location.search);
let productID = prodParams.get('productID');

let productDetailsContent = '';

productDetailsContent += `
    <div class="feature">
        <img src="${productsdata.products[productID].image}" alt="Product 1">
    </div>

    <div class="column">
        <h2>${productsdata.products[productID].name}</h2>
        <h3>€ ${productsdata.products[productID].price}</h3>
        <p>${productsdata.products[productID].description}</p>
        <input type="button" name="Add" id="add-to-cart" value="Add to Cart" class="buyButton" onclick="addToCartFunction(${productID})"> 
        <div id="successOutputArea"></div>
    </div>
`;

document.getElementById('productDetailsContainer').innerHTML = productDetailsContent;

function addToCartFunction(productID) {
    document.getElementById('successOutputArea').innerHTML = '<h2>Thank you, <strong>' + productsdata.products[productID].name + '</strong> has now been placed in the shopping cart.</h2>';
}

let recomnendationsContent = '';

for (let i in productsdata.products) {
    recomnendationsContent += `
        <div><a href="product_details.html?productID=${i}"><img src="${productsdata.products[i].image}"></div>
    `;
}
document.getElementById('recommendations').innerHTML = recomnendationsContent;


let reviewContent = '';

for (let i in reviewdata.reviews) {
    reviewContent += `
        <h2>${reviewdata.reviews[i].title}</h2>
        <p><em>${reviewdata.reviews[i].date}</em>, <strong>${reviewdata.reviews[i].reviewer}</strong></p>
        <p>${reviewdata.reviews[i].review_text}</p>
        <hr>
    `;
};

document.getElementById('reviewArea').innerHTML = reviewContent;