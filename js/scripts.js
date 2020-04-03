// Business Logic

// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    var userNumber = $('#userInput').val();
    var output = myFunction(userNumber);
    console.log(userNumber);
    event.preventDefault();
  });

});