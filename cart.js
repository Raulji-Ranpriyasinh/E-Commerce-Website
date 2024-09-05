var recitb = document.getElementsByClassName("dang")
console.log(recitb)
for(var i=0;i<recitb.length;i++)
{
var button = recitb[i]
button.addEventListener('click', function(event)  {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
})
} 