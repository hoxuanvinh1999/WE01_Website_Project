window.alert("Bienvenue sur notre page web du projet WE01")

let groupmember = document.getElementById("groupmember")
let members = document.getElementById("members")
var check = false

groupmember.onmouseover = function() {ShowInfor(members)}
groupmember.onmouseout = function() {HideInfor(members)}
groupmember.onclick= function(){ShowInforEver(members)}

function ShowInfor(targer) {
 if(check == false ){targer.style.display = 'block'}
}

function HideInfor(target) {
 if(check == false){target.style.display = 'none'}
}

function ShowInforEver(targer){
 if(check == false){
    check = true
    targer.style.display = 'block'
 }
}