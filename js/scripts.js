// Business Logic
var returnList = function(userNumber){
  
  var numbersStrings = [];
    for (var index = 1; index <= userNumber; index+=1){
      numbersStrings.push(index.toString());
  }
  
  var beeps = numbersStrings.map(function(string){
    if (string.includes('3')){
      return "Won't you be my neighbor?";
    }else if (string.includes('2')){
      return "Boop";
    }else if (string.includes('1')) {
      return "Beep";
    } else if (string.includes('49')) {
      return "49ers are my favorite team"
    }else {
      return string;
    }

  });
  console.log(beeps);
  return beeps.join(" ");
};



// UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('#userInput').val());
    var output = returnList(userNumber);
    $('#output').text(output);
    $("#outputBox").show();
  });

});