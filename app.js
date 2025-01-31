let container = document.getElementById
('container'); let count=50;
for(var i=0; i<50; i++){let leftsnow= Math.floor(Math.random()* container.clientWidth);
let topstar=Math.floor(Math.random()*container.clientWidth);
let widthstar=Math.floor(Math.random()*container.clientHeight);
let widthstar=Math.floor(Math.random()*50);
let timestar=Math.floor((Math.random()*5)+5);
let blurstar=Math.floor(Math.random()*10);
console.log(leftstar);
let div=document.createElement('div');
div.classList.add('star')
div.style.left=leftstar + 'px'
div.style.width=widthstar + 'px'
div.style.animationDuration=timestar+'si'
div.style.filter.blur(' blurstar'+px)
container.appendChild(div);























}