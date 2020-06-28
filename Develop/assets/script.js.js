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


// using localStorage values
var hour9 = JSON.parse(localStorage.getItem("task9a"));
$('#events9a').append(hour9);

var hour10 = JSON.parse(localStorage.getItem("tasks10a"));
$('#events10a').append(hour10);

var hour11 = JSON.parse(localStorage.getItem("tasks11a"));
$('#events11a').append(hour11);

var hour12 = JSON.parse(localStorage.getItem("tasks12p"));
$('#events12p').append(hour12);

var hour1 = JSON.parse(localStorage.getItem("tasks1p"));
$('#events1p').append(hour1);

var hour2 = JSON.parse(localStorage.getItem("tasks2p"));
$('#events2p').append(hour2);

var hour3 = JSON.parse(localStorage.getItem("tasks3p"));
$('#events3p').append(hour3);

var hour4 = JSON.parse(localStorage.getItem("tasks4p"));
$('#events4p').append(hour4);

var hour5 = JSON.parse(localStorage.getItem("tasks4p"));
$('#events5p').append(hour5);




});