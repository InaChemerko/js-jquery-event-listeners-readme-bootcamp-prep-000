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
  $("#typing").on("")
}

$(document).ready(function(){

// call functions here


getIt();
frameIt();
});
