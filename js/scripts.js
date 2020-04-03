// Business Logic
var returnList = function(userNumber){
  var countingNumbers = [];
  for (var index = 1; index <= userNumber; index+=1){
    countingNumbers.push(index);
  }
  var beeps = countingNumbers.map(function(number){
    return number.toString();
  });
  

  var boops = beeps.map(function(beep){
    if (beep.includes('3')){
      return "Won't you be my neighbor?";
    }else if (beep.includes('2')){
      return "Boop";
    }else if (beep.includes('1')) {
      return beep = "Beep";
    }else {
      return beep;
    }
  });
  return boops;
};



// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('#userInput').val());
    var output = returnList(userNumber);
    $('#output').text(output);
    
  });

});