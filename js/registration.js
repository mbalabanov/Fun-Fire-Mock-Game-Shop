var UserArr =[]
console.log(window.localStorage.getItem('UserList'));
// document.getElementById('submitButton').addEventListener('click', function (event) {
// 	event.preventDefault();

// 	let inputName = document.getElementById('name').value;
// 	let inputSurname = document.getElementById('surname').value;
// 	let inputPhone = document.getElementById('phone').value;
// 	let inputMail = document.getElementById('email').value;
// 	let inputphone = document.getElementById("phone").checked;

// 	var rate_value= "";
// 	if (document.getElementById('r1').checked) {
// 		rate_value = document.getElementById('Male').value;
// 	}
// 	var inputGender = rate_value;
	
// 	saveUser(inputName, inputSurname, inputPhone, inputMail, inputphone, inputGender);
// 	//document.getElementById('output').innerHTML = 'Hello, ' + inputName + '!Your registration was successful, an email was sent to ' + inputMail;
// });
function saveclick(){
	let inputName = document.getElementById('name').value;
	let inputSurname = document.getElementById('surname').value;
	let inputPhone = document.getElementById('phone').value;
	let inputMail = document.getElementById('email').value;
	let inputphone = document.getElementById("phone").checked;

	var rate_value= "";
	if (document.getElementById('Male').checked) {
		rate_value = document.getElementById('Male').value;
	}else if(document.getElementById('Female').checked){
		rate_value = document.getElementById('Female').value;
	}else{
		rate_value = document.getElementById('Undefined').value;

	}
	var inputGender = rate_value;
	
	saveUser(inputName, inputSurname, inputPhone, inputMail, inputphone, inputGender);
	return false;

}
function saveUser(Name,lastname,phone,mail,phone,gender){

	var UserWithNew =[Name,lastname,phone,mail,phone,gender];
	if(localStorage.getItem("UserList") == null){
	    window.localStorage.setItem('UserList', JSON.stringify(UserWithNew));
	}else{

		var UserList = JSON.parse(localStorage.getItem("UserList"));
		console.log(UserList);
		UserList.UserList.push(UserWithNew);
		window.localStorage.setItem('UserList', JSON.stringify(UserList));
	}

	// window.localStorage.setItem('name', JSON.stringify(UserArr));
	// console.log(JSON.parse(window.localStorage.getItem('name')));
	
}
