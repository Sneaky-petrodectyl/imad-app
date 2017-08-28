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
var nameInput = document.geteElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a reqquest to the server and capture a name
    //capture a list of names and render it
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list =='<li>' + names[i] + '<li>'
    }
    var ul = document.getElementById('nameslist');
    ul.innerHTML = list
    
}