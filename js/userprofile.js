document.getElementById("name").innerHTML = "Username";
document.getElementById("userEmail").innerHTML = "writeme@index.com";
document.getElementById("userImage").innerHTML = `<img src="img/logo-image.png" alt="userpic">`        
document.getElementById('userorderhistory').innerHTML = "<center><b>You haven`t bought anything yet! Time to fix it!</b></center>";

const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('userID');
console.log(userID);
var LoginedUser;
if(userID == "" || userID == null){
		window.location.assign("index.html?userID="+ users.users[i].id +"&UserName="+users.users[i].name);

}
for (i = 0; i < usersdata.users.length; i++) {
	if(usersdata.users[i].id == userID){
		LoginedUser = usersdata.users[i];
	}	
}
document.getElementById("name").innerHTML = LoginedUser.name;
document.getElementById("userEmail").innerHTML = LoginedUser.email;
document.getElementById("userImage").innerHTML = `<img src="${LoginedUser.image}" alt="userpic">`

var orderedGame = "";

//console.log(userID);

if (userID == 0) {
	orderedGame = `
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[0].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[0].name}</p></b>
				<p>${ordersdata.orderedProducts[0].info}</p>
				<p>$${ordersdata.orderedProducts[0].price}</p>
			</div>
		</div>
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[4].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[4].name}</p></b>
				<p>${ordersdata.orderedProducts[4].info}</p>
				<p>$${ordersdata.orderedProducts[4].price}</p>
			</div>
		</div>
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[6].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[6].name}</p></b>
				<p>${ordersdata.orderedProducts[6].info}</p>
				<p>$${ordersdata.orderedProducts[6].price}</p>
			</div>
		</div>
	`;
	//console.log("Doch!");
	document.getElementById('userorderhistory').innerHTML = orderedGame;
} 

if (userID == 1) {
	orderedGame = `
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[2].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[2].name}</p></b>
				<p>${ordersdata.orderedProducts[2].info}</p>
				<p>$${ordersdata.orderedProducts[2].price}</p>
			</div>
		</div>
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[7].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[7].name}</p></b>
				<p>${ordersdata.orderedProducts[7].info}</p>
				<p>$${ordersdata.orderedProducts[7].price}</p>
			</div>
		</div>
	`;
	//console.log("Doch!");
	document.getElementById('userorderhistory').innerHTML = orderedGame;
} 

if (userID == 2) {
	orderedGame = `
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[3].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[3].name}</p></b>
				<p>${ordersdata.orderedProducts[3].info}</p>
				<p>$${ordersdata.orderedProducts[3].price}</p>
			</div>
		</div>
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[8].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[8].name}</p></b>
				<p>${ordersdata.orderedProducts[8].info}</p>
				<p>$${ordersdata.orderedProducts[8].price}</p>
			</div>
		</div>
	`;
	//console.log("Doch!");
	document.getElementById('userorderhistory').innerHTML = orderedGame;
} 

if (userID == 3) {
	orderedGame = `
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[1].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[1].name}</p></b>
				<p>${ordersdata.orderedProducts[1].info}</p>
				<p>$${ordersdata.orderedProducts[1].price}</p>
			</div>
		</div>
		<div id="ord" class="wrapper">
			<img width=20% heght=20% src="${ordersdata.orderedProducts[5].image}" alt="gamepic">
			<div>
				<b><p>${ordersdata.orderedProducts[5].name}</p></b>
				<p>${ordersdata.orderedProducts[5].info}</p>
				<p>$${ordersdata.orderedProducts[5].price}</p>
			</div>
		</div>
	`;
	//console.log("Doch!");
	document.getElementById('userorderhistory').innerHTML = orderedGame;
} 