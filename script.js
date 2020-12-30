// ////// create variable for now displayed in header
var dayofWeek = moment().format("dddd");
var dateofMonth = moment().format("MMMM Do YYYY, h:mm a");
var todaysDate = dayofWeek + ", " + dateofMonth;

$("#currentDay").text(todaysDate);
