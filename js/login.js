var users = usersdata;

function validateUser(){
	var username = document.getElementById("UserName").value;
	var password = document.getElementById("password").value;
	if (username == "" ||  password == ""){
		document.getElementById("LoginErrorMessage").innerHTML = "Please enter UserName and Password";

	}else{
		for (i = 0; i < users.users.length; i++) {
			if(users.users[i].name == username && users.users[i].password==password ){
				 window.location.assign("index.html?userID="+users.users[i].id+"&UserName="+users.users[i].name);
			}
		}
		document.getElementById("LoginErrorMessage").innerHTML = "This is not a valid user name or password";
	}
}