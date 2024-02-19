var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  console.log(tabname);
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
    console.log("tablink ----> ", tablink);
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
    console.log("tabcontent ----> ", tabcontent);
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

const roleText = document.getElementById("roleText");
const spans = roleText.getElementsByTagName("span");
let currentRoleIndex = 0;

function toggleRoles() {
  spans[currentRoleIndex].style.display = "none";
  currentRoleIndex = (currentRoleIndex + 1) % spans.length;
  spans[currentRoleIndex].style.display = "inline";
}

// Start with the first role displayed
spans[currentRoleIndex].style.display = "inline";

setInterval(toggleRoles, 2500); // Alternate between roles every 2.5 seconds
