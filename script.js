let counter = document.querySelector('.counter');
let count=0;

updateCounter = (button)=>{
if (button == plus){
  count+= 1;
} else if (button == minus){
  count-= 1;
} else if (button == reset){
  count =0;
}
counter.innerHTML = count;
}