// Business Logic
var returnList = function(userNumber){
  var parsedInput = parseInt(userNumber);

  var countingNumbers = [];
  for (var index = 1; index <= parsedInput; index+=1){
    countingNumbers.push(index);
  }
  console.log(countingNumbers);
  var beeps = countingNumbers.map(function(number){
    return number.toString();
  });
  

  beeps.forEach(function(beep){
    if(beep.includes('1')) {
      return "beep"
    }
  });
  console.log(beeps);
};

//alert('123'.includes(2))



// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userNumber = $('#userInput').val();
    var output = returnList(userNumber);
    
    
  });

});