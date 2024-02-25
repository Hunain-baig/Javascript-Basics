var input = document.querySelector(".value");
var head = document.querySelector(".head");

function showVal() {
  console.log(input.value);
  head.innerHTML = input.value;
}

function clearHead (){
    head.innerHTML = " "
}