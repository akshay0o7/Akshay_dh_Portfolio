var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    console.log(tabname)
  for (tablink of tablinks) {
      tablink.classList.remove("active-link");
      console.log("tablink ----> ", tablink)
  }
  for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
      console.log("tabcontent ----> ", tabcontent)
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu =document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }

    const roleText = document.getElementById("roleText");

    function toggleRoles() {
      const spans = roleText.getElementsByTagName("span");
      for (let i = 0; i < spans.length; i++) {
        if (spans[i].style.display === "none") {
          spans[i].style.display = "inline";
        } else {
          spans[i].style.display = "none";
        }
      }
    }
    
    setInterval(toggleRoles, 3000); // Alternate between roles every 3 seconds
    