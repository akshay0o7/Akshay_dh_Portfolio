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