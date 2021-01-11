////// create variable for now displayed in header
var dayofWeek = moment().format("dddd");
var dateofMonth = moment().format("MMMM Do YYYY, h:mm a");
var todaysDate = dayofWeek + ", " + dateofMonth;

$("#currentDay").text(todaysDate);

const saveBtn = $(".saveBtn");
var plannerInput = $(".timeBlocks").val();

$(".saveBtn").on("click", function () {
  var timeId = $(this).attr("time");

  var plannerTask = $(this).prev().val();
  localStorage.setItem(timeId, plannerTask);
});
