console.log('Loaded!');

alert ('This is a alrt box');

var element = document.getElementById('main-text');
element.innerHTML='new value';

var img = document.getElementById('madi');
function moveRight(){
    var marginLeft = 0;
    marginLeft= marginLeft+'10';
    img.style.marginLeft =marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,100);
    
};