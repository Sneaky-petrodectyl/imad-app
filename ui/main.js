console.log('Loaded!');

alert ('This is a alrt box');

var element = document.getElementById('main-text');
element.innerHTML='new value';

var img = document.getElementById('madi');
function moveRight(){
    marginLeft= marginLeft+'10px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,100);
    
};