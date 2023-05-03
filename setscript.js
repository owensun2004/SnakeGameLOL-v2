var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var snakeSpeed=0;
console.log(snakeSpeed);

function slider_set(){
    output.innerHTML  = slider.value;   
     
}

slider.oninput = function() {
  output.innerHTML = this.value;
  snakeSpeed=1000-output.innerHTML;
  
}
slider.addEventListener('input', slider_set);
snakeSpeed=1000-output.innerHTML;
console.log(snakeSpeed);


