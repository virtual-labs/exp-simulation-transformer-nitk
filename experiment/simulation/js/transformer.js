const data = [
  {
    id: "upTrans",
    shiftClass: "shift-sw-top",
    status: false,
    blueId: "upBlue",
    originalstyle: "shift-sw-top-original",
  },
  {
    id: "leftTrans",
    shiftClass: "shift-sw-left",
    status: false,
    blueId: "leftBlue",
    originalstyle: "shift-sw-left-original",
  },
  {
    id: "rightTrans",
    shiftClass: "shift-sw-right",
    status: false,
    blueId: "rightBlue",
    originalstyle: "shift-sw-right-original",
  },
];

updateMeterTable3();
let popupOpen = false;
function changeSwitchStatus(ele) {
  data.filter((e) => {
    if (e.id == ele.id) {
      e.status = !e.status;
      changeSwitch(e, e.status);
    }
  });
}

function changeSwitch(ele, status) {
  if (!popupOpen) {
    if (status) {
      document.getElementById(ele.blueId).classList.remove("displayy");
      document.getElementById(ele.id).classList.remove(ele.originalstyle);
      document.getElementById(ele.id).classList.add(ele.shiftClass);
    } else {
      document.getElementById(ele.blueId).classList.add("displayy");
      document.getElementById(ele.id).classList.remove(ele.shiftClass);
      document.getElementById(ele.id).classList.add(ele.originalstyle);
    }
    updateTable(ele.id, status);
  }
}

function updateTable(index, status) {
  if (index == "leftTrans") {
    document.getElementById("mi1").innerHTML = status == true ? 0 : 45;
    document.getElementById("mv1").innerHTML = status == true ? 0 : 33;
    document.getElementById("mp1").innerHTML = status == true ? 0 : 857.36;
    updateMeterTable3();
    if (status == true) {
      popupOpen = true;
      showPopup("CB2 is OPEN");
    }
  }
  if (index == "rightTrans") {
    document.getElementById("mi2").innerHTML = status == true ? 0 : 30;
    document.getElementById("mv2").innerHTML = status == true ? 0 : 33;
    document.getElementById("mp2").innerHTML = status == true ? 0 : 571.57;
    updateMeterTable3();
    if (status == true) {
      popupOpen = true;
      showPopup("CB3 is OPEN");
    }
  }
  if (index == "upTrans") {
    if (status == true) {
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
    if (status == true) {
      popupOpen = true;
      showPopup("CB1 is OPEN");
    }
  }
  checkForOpenState();
}

function showPopup(text) {
  document.getElementById("parentPopup").style.display = "block";
  document.getElementById("popUpContent").innerHTML = `<span class="close"
    onclick="closeModal(event);">Trip</span>
    <p style="text-align:center;padding-top: 20%; font-size: 14px">${text}</p>
    <p style="text-align:center;"><button style="margin:auto;font-size: 14px; cursor: pointer" onclick="closeModal(event)">OK</button></p>
    `;
}

function closeModal(ev) {
  ev.preventDefault();
  popupOpen = false;
  document.getElementById("parentPopup").style.display = "none";
}

function updateMeterTable3() {
  let m3 =
    (Number(document.getElementById("mi1").innerText) +
      Number(document.getElementById("mi2").innerText)) /
    3;
  let p3 = (
    Number(document.getElementById("mp1").innerText) +
    Number(document.getElementById("mp2").innerText)
  ).toFixed(2);
  document.getElementById("mi3").innerHTML = m3;
  document.getElementById("mp3").innerHTML = p3 == 0.0 ? 0 : p3;
}

function resetSwitch() {
  data.forEach((e) => {
    e.status = false;
    document.getElementById(e.id).classList.add(e.originalstyle);
  });
  document.getElementById("mi1").innerHTML = 45;
  document.getElementById("mv1").innerHTML = 11;
  document.getElementById("mp1").innerHTML = 857.36;
  document.getElementById("mi2").innerHTML = 30;
  document.getElementById("mv2").innerHTML = 11;
  document.getElementById("mp2").innerHTML = 571.57;
  document.getElementById("mv3").innerHTML = 33;
  document.getElementById("upBlue").style.opacity = 0;
  document.getElementById("leftBlue").style.opacity = 0;
  document.getElementById("rightBlue").style.opacity = 0;
  updateMeterTable3();
}

function checkForOpenState() {
  if (data[0].status == true) {
    showPopup("CB1 is OPEN");
  }
  if (data[1].status == true) {
    showPopup("CB2 is OPEN");
  }
  if (data[2].status == true) {
    showPopup("CB3 is OPEN");
  }
  if (data[0].status == true && data[1].status == true) {
    showPopup("CB1 and CB2 are OPEN");
  }
  if (data[0].status == true && data[2].status == true) {
    showPopup("CB1 and CB3 are OPEN");
  }
  if (data[1].status == true && data[2].status == true) {
    showPopup("CB2 and CB3 are OPEN");
  }
  if (
    data[1].status == true &&
    data[2].status == true &&
    data[0].status == true
  ) {
    showPopup("CB1, CB2 and CB3 are OPEN");
  }
}
