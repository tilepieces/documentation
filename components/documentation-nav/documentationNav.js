const navigationTrigger = document.getElementById("navigation-trigger");
const navigationIndex = document.getElementById("navigation-index");
navigationTrigger.addEventListener("click",e=>{
  navigationIndex.classList.toggle("open");
});