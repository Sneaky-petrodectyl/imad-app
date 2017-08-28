var button = document.getElementById('counter');

button.onclick = function() {
    //make a request object
    var request = new XMLHttpRequest();
    //capture request and store in a variable
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status ===200 ){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
 //make a request
  request.open('GET','http://nileshjha412.imad.hasura-app.io/counter',true);
  request.send(null);
};

//submit  a  name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var name = nameInput.value;
    var request = new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status ===200 ){
                var names = request.responseText;
                names = JSON.parse(names);
                var list ='';
                for(var i=0;i<names.length;i++){
                    list +='<li>' + names[i] ;
                }
                var ul = document.getElementById('nameslist');
                ul.innerHTML = list;
            }
        }
    };
    //make a request 
    request.open('GET','http://nileshjha412.imad.hasura-app.io/submit-name/'+ name,true);
    request.send(null);
};