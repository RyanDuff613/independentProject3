// Business Logic
var returnList = function(userNumber){
  userNumber.toString();
  console.log(userNumber.typeOf);
  var countingNumbers = [];
  for (var index = 1; index <= userNumber; index+=1){
    countingNumbers.push(index);
  }
  var beeps = countingNumbers.map(function(number){
    return number.includes('2');
    
    /*if (number.includes(1)){
      return "beep";
    } else if (number.includes('2')){
      return "boop";
    } else if (number.includes('3')){
      return "won't you be me neighbor";
    } else {
      return number;
    } */
    
  });
    console.log(beeps);
    return countingNumbers;
};

//alert('123'.includes(2))



// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('#userInput').val());
    var output = returnList(userNumber);
    console.log(userNumber);
    console.log(userNumber.typeOf);
    console.log(output);
    
    
  });

});