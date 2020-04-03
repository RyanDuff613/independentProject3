// Business Logic

// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    var userNumber = $('#userInput').val();
    console.log(userNumber);
    event.preventDefault();
  });

});