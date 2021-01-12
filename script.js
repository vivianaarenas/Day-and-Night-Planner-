////// create variable for now displayed in header
var dayofWeek = moment().format("dddd");
var dateofMonth = moment().format("MMMM Do YYYY, h:mm a");
var todaysDate = dayofWeek + ", " + dateofMonth;

const colorcode = $(".colorCode");

$("#currentDay").text(todaysDate);

const saveBtn = $(".saveBtn");
var plannerInput = $(".timeBlocks").val();

$(".saveBtn").on("click", function () {
  var timeId = $(this).attr("time");

  var plannerTask = $(this).prev().val();
  localStorage.setItem(timeId, plannerTask);
});

for (var i = 9; i < 18; i++) {
  var now = moment().format("h");
  console.log(now);

  var amPm = "am";
  if (i >= 12) {
    amPm = "pm";
  }

  var hour = i;
  if (i > 12) {
    hour -= 12;
  }

  var targetId = "#" + hour + amPm;
  console.log(targetId);

  var timeInput = localStorage.getItem(hour + amPm);
  if (timeInput) {
    $(targetId).val(timeInput);
  }
  if (i < now) {
    $(targetId).addClass("past");
  } else if (i > now) {
    $(targetId).addClass("future");
  } else {
    $(targetId).addClass("present");
  }
}
