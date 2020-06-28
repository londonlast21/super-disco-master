$(document).ready(function() {

//get and set today's date
var todayDate = moment().format('YYYY-MM-DD');
$("#currentDay").text(todayDate);

//onclick event saves textarea content to localStorage
$(".fa.fa-lock").on("click", function() {
    //get nearby values
    var event = $.trim($("#events9").val());

    localStorage.setItem("task9am", JSON.stringify(event));

    console.log(localStorage)

})
});