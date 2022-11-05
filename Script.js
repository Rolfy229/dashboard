var document

function showActScho() {
    document.getElementById("Menu_Act_sco").style.display = "block"
    document.getElementById("calArrow").style.transform = "rotate(180deg)"
}
function hideActScho() {
    document.getElementById("Menu_Act_sco").style.display = "none"
    document.getElementById("calArrow").style.transform = "rotate(0deg)"
}

function showGClassMenu() {
    document.getElementById("GClassMenu").style.display = "block"
    document.getElementById("GClassArrow").style.transform = "rotate(180deg)"
}
function hideGClassMenu() {
    document.getElementById("GClassMenu").style.display = "none"
    document.getElementById("GClassArrow").style.transform = "rotate(0deg)"
}

function showDocADmnMenu() {
    document.getElementById("DocADmnMenu").style.display = "block"
    document.getElementById("DocADmnarrow").style.transform = "rotate(180deg)"
}
function hideDocADmnMenu() {
    document.getElementById("DocADmnMenu").style.display = "none"
    document.getElementById("DocADmnarrow").style.transform = "rotate(0deg)"
}


function showUserOpt() {
    document.getElementById("drop_down_UserName").style.display = "block"
    document.getElementById("userAArrow").style.transform = "rotate(180deg)"
}
function hideUserOpt() {
    document.getElementById("drop_down_UserName").style.display = "none"
    document.getElementById("userAArrow").style.transform = "rotate(0deg)"
}

function showArrow1() {

    document.getElementById("arrow1").style.transform = "rotate(90deg)"
}
function hideArrow1() {

    document.getElementById("arrow1").style.transform = "rotate(0deg)"
}
function showArrow2() {

    document.getElementById("arrow2").style.transform = "rotate(90deg)"
}
function hideArrow2() {

    document.getElementById("arrow2").style.transform = "rotate(0deg)"
}
function showArrow3() {

    document.getElementById("arrow3").style.transform = "rotate(90deg)"
}
function hideArrow3() {

    document.getElementById("arrow3").style.transform = "rotate(0deg)"
}

function show3crox() {
    document.getElementById("container_1", "iconClose").style.display = "block"
    document.getElementById("container_2","iconOpen").style.display = "none"
}
function show3lines() {
    document.getElementById("container_1","iconClose").style.display = "none"
    document.getElementById("container_2","iconOpen").style.display = "block"
}

/*numbers in total,percentage 4 boxes and notif box5*/
document.getElementById("box1").value = 300
document.getElementById("box2").value = 80 + "%"
document.getElementById("box3").value = 102
document.getElementById("box4").value = 198
document.getElementById("box5").value = 9
