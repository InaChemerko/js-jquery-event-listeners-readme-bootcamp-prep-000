//define functions here
function getIt(){
  $("p").on("click",function(event){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
   $("img").addClass("tasty");
});
}

function pressIt(){
  $("#typing").on("keydown", function(key){
    if (key.which ==71) {
      alert("G was pressed.");
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
  /*if ($( "input:first" ).val() === "correct") {
    alert("Your form is going to be submitted now.");
    return;*/
     alert("Your form is going to be submitted now.");
  
  
});
}

$(document).ready(function(){

// call functions here


getIt();
frameIt();
pressIt();
});
