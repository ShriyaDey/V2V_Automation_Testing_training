const Animator = setInterval(sampleAnimator,1000)
let a=0;
function sampleAnimator(){
    a= a+1
 
    if(a==5){
        clearInterval(Animator)
    }
    const textAnimator= document.getElementById("title")
    textAnimator.style.fontSize = a+"rem"
}
document.getElementById("btn").addEventListener("click", function () {
// Then call showMsg after 2 seconds
  setTimeout(showMsg, 2000);
});

// Function to display message
function showMsg() {
  document.getElementById("demo").innerHTML = "Hello after 2 seconds!";
}
