const memUrlParams = new URLSearchParams(window.location.search);
const MemberID = memUrlParams.get('memberID');
//const UserID = 1;
let member = membersdata.member[MemberID];

document.getElementById("memberImage").src = member.image;
document.getElementById("memberName").innerHTML = member.name;
document.getElementById("memberAge").innerHTML = member.age;
document.getElementById("memberPosition").innerHTML = member.team_title;
document.getElementById("memberOccupation").innerHTML = member.occupation;
document.getElementById("memberEmail").innerHTML = member.email;
document.getElementById("memberCity").innerHTML = member.city;
document.getElementById("memberDescription").innerHTML = member.long_description;

function GoToMembers() {
   window.location.assign("team_members.html");
}