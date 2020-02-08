let productcontent = '';
let productdetails = '';

for (let i in productsdata.products) {	
	productcontent += `
	<div class="productcard">
		<div class="relativeCard">
			<a href="#" onclick="showProductOverlay(${[i]})"><img src="${productsdata.products[i].image}"></a>
			<div class="absoluteCard">
				<h3><a href="#" onclick="showProductOverlay(${[i]})">${productsdata.products[i].name}</a></h3>
			</div>
		</div>
	</div>
	`;
} 

document.getElementById('productArea').innerHTML = productcontent;

function showProductOverlay(productid) {
	document.getElementById('productOverlay').innerHTML = `
	<div class="styledProductOverlay">
		<div class="productdetailscard">
			<div class="productCol1">
				<h3>${productsdata.products[productid].name}</h3>
				<a href="#" onclick="closeProductOverlay(${productid})"><img src="${productsdata.products[productid].image}" class="productDetailImage"></a>
			</div>
			<div class="productCol2">
				<p class="close"><button class="closeButton" onclick="closeProductOverlay(${productid})">Close</button></p>
				<h4>Description</h4>
				<p>Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.</p>
				<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
				<p><button class="buyButton" onclick="buyProduct(${productid})">Add ${productsdata.products[productid].name} to cart</button></p>
				<p><a href="product_details.html?productID=${productid}">More Information about ${productsdata.products[productid].name}</a></p>
				<span id="feedbackArea"></span>
			</div>
		</div>
	</div>
	`;
}

function closeProductOverlay(productid) {
	document.getElementById('productOverlay').innerHTML = '';
}

function buyProduct(productid) {
	document.getElementById('feedbackArea').innerHTML = 'Thank you, <strong>' + productsdata.products[productid].name + '</strong> has now been placed in the shopping cart.';
}