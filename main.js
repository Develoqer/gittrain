
const button = document.getElementById("backcolor");
// const corps = document.getElementsByTagName("body");
// console.log("corps");


button.addEventListener("click",colorBack);



function colorBack() {
     document.body.classList.toggle("background").add("background");
  }