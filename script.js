

let currentDate = moment().format('dddd, MMMM Do')

document.getElementById('currentDay').textContent = currentDate

let presentHour = moment().hour()

let workday = JSON.parse(localStorage.getItem('workday')) || schedule

const stringInteger = (timeString) => {
    switch (timeString) {
      case '8AM': return 8
      case '9AM': return 9
      case '10AM': return 10
      case '11AM': return 11
      case '12PM': return 12
      case '1PM': return 13
      case '2PM': return 14
      case '3PM': return 15
      case '4PM': return 16
      case '5PM': return 17
    }
for (let i = 8; i <= 17; i++) {
    let timeCounter = "time" + i
    let timeString = document.getElementById(timeCounter).textContent 
    let timeInteger = stringInteger(timeString) 
    function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var presentHour = parseInt($(this).attr("id"));

        if (presentHour > hour) {
            $(this).addClass("future");
        } else if (presentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past"); {
        }
    })
};
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});

function usePlanner() {

    $(".hour").each(function() {
        var presentHour = $(this).text();
        var presentPlan = localStorage.getItem(presentHour);

        if(presentPlan !== null) {
            $(this).siblings(".plan").val(presentPlan);
        }
    });
}
}
