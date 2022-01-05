const data = [
    {
       id: "upTrans",
       originalstyle: "position: absolute; left: 480px; top: 180px;width: 35px;cursor: pointer",
       transformedstyle: "position: absolute; left: 480px; top: 165px;width: 35px;cursor: pointer",
       status: false,
       blueId: "upBlue",
    },
    {
        id: "leftTrans",
        originalstyle: "position: absolute; left: 340px; top: 245px;width: 60px;cursor: pointer",
        transformedstyle: "position: absolute; left: 352px; top: 245px;width: 60px;cursor: pointer",
        status: false,
        blueId: 'leftBlue'
    },
    {
        id: "rightTrans",
        originalstyle: "position: absolute; left: 565px; top: 245px;width: 60px;cursor: pointer",
        transformedstyle: "position: absolute; left: 553px; top: 245px;width: 60px;cursor: pointer",
        status: false,
        blueId: 'rightBlue'
    }
]



function blinkArrow(id){
	if(document.getElementById(id).style.visibility == "visible") {
		document.getElementById(id).style.visibility = "hidden"
	} else {
		document.getElementById(id).style.visibility = "visible"
	}
}
let upArrow = setInterval(function(){
	blinkArrow('upArrow');
}, 500);
let leftArrow = setInterval(function(){
	blinkArrow('leftArrow');
}, 500);
let rightArrow = setInterval(function(){
	blinkArrow('rightArrow');
}, 500);
let info1 = setInterval(function(){
	blinkArrow('info1');
}, 500);
let info2 = setInterval(function(){
	blinkArrow('info2');
}, 500);

document.getElementById('arr').style.animation="moveArrow 1s infinite";
document.getElementById('leftHand').style.animation="moveHand 2s infinite";
document.getElementById('upHand').style.animation="moveHand 2s infinite";
document.getElementById('rightHand').style.animation="moveHand 2s reverse infinite";


updateMeterTable3();

function changeSwitchStatus(ele){
    data.filter((e)=>{
        if(e.id == ele.id){
            e.status = !e.status;
            changeSwitch(e, e.status);
        }
    })
}

function changeSwitch(ele, status){
	document.getElementById(ele.blueId).style.opacity = status == true ? 1 : 0;
	document.getElementById(ele.id).style = status == true ? ele.transformedstyle : ele.originalstyle;
    updateTable(ele.id, status)
}

function updateTable(index, status){
	if(index == "leftTrans"){
		document.getElementById("mi1").innerHTML = status == true ? 0 : 45;
		document.getElementById("mv1").innerHTML = status == true ? 0 : 33;
		document.getElementById("mp1").innerHTML = status == true ? 0 : 857.36;
        updateMeterTable3();
        if(status == true){
            showPopup("CB2 is OPEN");
        }
	} 
    if(index == "rightTrans"){
        document.getElementById("mi2").innerHTML = status == true ? 0 : 30;
        document.getElementById("mv2").innerHTML = status == true ? 0 : 33;
        document.getElementById("mp2").innerHTML = status == true ? 0 : 571.57;
        updateMeterTable3();
        if(status == true){
            showPopup("CB3 is OPEN");
        }
	}
    if(index == "upTrans"){
        if(status == true){
            document.getElementById("mi1").innerHTML = 0;
            document.getElementById("mv1").innerHTML = 0;
            document.getElementById("mp1").innerHTML = 0;
            document.getElementById("mi2").innerHTML = 0;
            document.getElementById("mv2").innerHTML = 0;
            document.getElementById("mp2").innerHTML = 0;
            document.getElementById("mv3").innerHTML = 0;
        } else {
            document.getElementById("mv3").innerHTML = 33;
        }
        updateMeterTable3();
        if(status == true){
            showPopup("CB1 is OPEN");
        }
	}
    checkForOpenState();
}


function showPopup(text){
    document.getElementById("parentPopup").style.display = "block";
    document.getElementById("popUpContent").innerHTML = `<span class="close"
    onclick="closeModal(event);">Trip</span>
    <p style="text-align:center;padding-top: 20%; font-size: 14px">${text}</p>
    <p style="text-align:center;"><button style="margin:auto;font-size: 14px; cursor: pointer" onclick="closeModal(event)">OK</button></p>
    `
}

function closeModal(ev){
ev.preventDefault();
document.getElementById("parentPopup").style.display = "none";
}

function updateMeterTable3(){
    let m3 = ((Number(document.getElementById("mi1").innerText)+Number(document.getElementById("mi2").innerText))/3);
    let p3 = ((Number(document.getElementById("mp1").innerText)+Number(document.getElementById("mp2").innerText))).toFixed(2);
    document.getElementById("mi3").innerHTML = m3;
    document.getElementById("mp3").innerHTML = p3 == 0.00 ? 0 : p3;
}

function resetSwitch(){
    data.forEach((e)=>{
            e.status = false;
            document.getElementById(e.id).style=e.originalstyle;
    })
    document.getElementById("mi1").innerHTML = 45;
    document.getElementById("mv1").innerHTML = 11;
    document.getElementById("mp1").innerHTML = 857.36;
    document.getElementById("mi2").innerHTML = 30;
    document.getElementById("mv2").innerHTML = 11;
    document.getElementById("mp2").innerHTML = 571.57;
    document.getElementById("upBlue").style.opacity = 0;
    document.getElementById("leftBlue").style.opacity = 0;
    document.getElementById("rightBlue").style.opacity = 0;
    updateMeterTable3();
}

function checkForOpenState(){
    if(data[0].status == true) {
        showPopup("CB1 is OPEN");
    }
    if(data[1].status == true) {
        showPopup("CB2 is OPEN");
    }
    if(data[2].status == true ) {
        showPopup("CB3 is OPEN");
    }
    if(data[0].status == true && data[1].status == true) {
        showPopup("CB1 and CB2 are OPEN");
    }
    if(data[0].status == true && data[2].status == true) {
        showPopup("CB1 and CB3 are OPEN");
    }
    if(data[1].status == true && data[2].status == true) {
        showPopup("CB2 and CB3 are OPEN");
    }
    if(data[1].status == true && data[2].status == true && data[0].status == true) {
        showPopup("CB1, CB2 and CB3 are OPEN");
    }
}


