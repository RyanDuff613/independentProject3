// Business Logic

// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault;
    var userNumber = $('userNumber').val();
    console.log(userNumber);
  });

});