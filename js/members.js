let membersContent = '';

for (let i in membersdata.member) {
    membersContent += `
        <div class='membersList' onclick='SetDetail(${i})'>
            <img class='membersPic' src=${membersdata.member[i].image} alt='Member'>
            <p class='memberName'>${membersdata.member[i].name}</p>
            <div class='divMemberDetail' id='membersDetail${i}'>
            </div>
        </div>
        `;

}
document.getElementById('teamMembers').innerHTML += membersContent;

function SetDetail(id){
    document.getElementById('teamMemberDetail').innerHTML = `
    <center><div class="styledMemberOverlay">
        <div class="memberDetailscard">
            <div class="memberHeader">
                <div class="memberDetailName">
                    <h3>${membersdata.member[id].name}</h3>
                </div>
                <div class="memberAction">                 
                    <p><button class="redirectButton" onclick="GotoDirectPage(${id})">More Detail</button></p>
                    <p class="close"><button class="closeButton" onclick="closeMemberDetail(${id})">Close</button></p>
                </div>
            </div>
            <div class="memberCol1">                
                <a href="#" onclick="closeMemberDetail(${id})"><img src="${membersdata.member[id].image}"></a>
            </div>
            <div class="memberCol2">                
                    <p class="detailTitle">Age</p><p class="detailValue">${membersdata.member[id].age}</p>
                    <p class="detailTitle">Position</p><p class="detailValue">${membersdata.member[id].team_title}</p>
                    <p class="detailTitle">Occupation</p><p class="detailValue">${membersdata.member[id].occupation}</p>
                    <p class="detailTitle">Email</p><p class="detailValue">${membersdata.member[id].email}</p>
                    <p class="detailTitle">City</p><p class="detailValue">${membersdata.member[id].city}</p>
            </div>
        </div>
    </div></center>
    `;
}

function closeMemberDetail(id) {
    document.getElementById('teamMemberDetail').innerHTML = '';
}

function GotoDirectPage(id) {
    window.location.assign("member_detail.html?memberID="+id);
}
