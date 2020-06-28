$(document).ready(function() {

//get and set today's date
var todayDate = moment().format('YYYY-MM-DD');
$("#currentDay").text(todayDate);

//onclick event saves textarea content to localStorage
$(".fa.fa-lock.9a").on("click", function() {
    //get nearby values
    var event = $.trim($("#events9a").val());

    localStorage.setItem("task9a", JSON.stringify(event));

});

$(".fa.fa-lock.10a").on("click", function() {
    var event = $.trim($("#events10a").val());

    localStorage.setItem("task10a", JSON.stringify(event));

});

$(".fa.fa-lock.11a").on("click", function() {
    var event = $.trim($("#events11a").val());

    localStorage.setItem("task11a", JSON.stringify(event));
});

$(".fa.fa-lock.12p").on("click", function() {
    var event = $.trim($("#events12p").val());

    localStorage.setItem("task12p", JSON.stringify(event));
});

$(".fa.fa-lock.1p").on("click", function() {
    var event = $.trim($("#events1p").val());

    localStorage.setItem("task1p", JSON.stringify(event));
});

$(".fa.fa-lock.2p").on("click", function() {
    var event = $.trim($("#events2p").val());

    localStorage.setItem("task2p", JSON.stringify(event));
});

$(".fa.fa-lock.3p").on("click", function() {
    var event = $.trim($("#events3p").val());

    localStorage.setItem("task3p", JSON.stringify(event));
});

$(".fa.fa-lock.4p").on("click", function() {
    var event = $.trim($("#events4p").val());

    localStorage.setItem("task4p", JSON.stringify(event));
});

$(".fa.fa-lock.5p").on("click", function() {
    var event = $.trim($("#events5p").val());

    localStorage.setItem("task5p", JSON.stringify(event));
});

});