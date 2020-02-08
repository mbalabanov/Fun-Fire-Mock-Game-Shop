const userUrlParams = new URLSearchParams(window.location.search);
const UserID = userUrlParams.get('userID');
const UserName = userUrlParams.get('UserName');
console.log(UserID);
if(UserID != null){
	var Uname ="Welcome "+ UserName;
	console.log(Uname);
	document.getElementById('usernotification').innerHTML = Uname;
	document.getElementById('usernotification').setAttribute('UserID', UserID);
	
}
function showQuestionPopup(){
	document.getElementById('shoppingOverlay').innerHTML = '';
	document.getElementById('questionForm').innerHTML = `	
				<div class="questionContent">
					<p align="right">
					<button type="button" onclick="closeQuestionForm()">
					<strong>X</strong> Close</button></p>
					<hr>
					<p align="left">Do you have already account? <button><a href="login.html">Sign in</a></button></p>
					
					<p align="left">Create New account: <button><a href="registration_form.html">Sign Up</a></button></p>
				</div>`						
}
function closeQuestionForm() {
	document.getElementById('shoppingOverlay').innerHTML = '';
	document.getElementById('questionForm').innerHTML = '';
}
function goToMyAcount(){
	var UID=document.getElementById('usernotification').getAttribute('UserID');
	if (UID != ""){
		window.location.assign("userprofile.html?userID=" + UserID);
	} else{
		window.location.assign("login.html");
	}

}
