//variables section//

//today's date
var todayDate = moment().format('YYYY-MM-DD');
//tester 
console.log(todayDate);

// end var section

$("<p>" + todayDate + "<p>").appendTo("currentDay.lead");


//onclick to edit events
$("col-md-9").click(function(){
    alert("The paragraph was clicked.");
  });


