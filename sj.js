var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

/*catr
var removecit= document.getElementsByClassName("dang")
console.log(removecit)
for(var i =0;i<removecit.length;i++){
  var btn =removecit[i]
  btn.addEventListener('click',function(event){
    var btnclicked =event.target
    butnclicked.parentelement.parentelement.removec()

  })
}*/