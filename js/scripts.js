// Business Logic
var returnList = function(userNumber){
  var countingNumbers = [];
  for (var index = 1; index <= userNumber; index+=1){
    countingNumbers.push(index);
  }
    console.log(countingNumbers);
    console.log(index);
    return countingNumbers;
};





// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userNumber = $('#userInput').val();
    var output = returnList(userNumber);
    console.log(userNumber);
    console.log(output);
    
  });

});