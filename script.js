
function setPlanner
var currentDate = text(moment().format('dddd, MMMM Do'))

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

setPlanner();
var saveBtn = $(".saveBtn");
    
saveBtn.on("click", function() {
    
        var time = $(this).parent().attr("id");
        var plan = $(this).siblings(".plan").val();
    
        localStorage.setItem(time, plan);
});
    

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function() {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future");
        } else if (thisHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past"); {
        }
    })
}
pastPresentFuture();


