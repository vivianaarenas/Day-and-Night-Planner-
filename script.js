// ////// create variable for now displayed in header
var dayofWeek = moment().format("dddd");
var dateofMonth = moment().format("MMMM Do YYYY, h:mm a");
var todaysDate = dayofWeek + ", " + dateofMonth;

$("#currentDay").text(todaysDate);

// $("button").on("click", function () {
//   var timeId = $(this).attr("time");

//   var userTask = $(this).prev().val();
//   localStorage.setItem(timeId, userTask);
// });

// for (var i = 9; i < 18; i++) {
//   // Get current hour
//   var currentTime = new Date().getHours();

//   console.log(currentTime);

//   var amPm = "am";
//   if (i >= 12) {
//     amPm = "pm";
//   }

//   var hour = i;
//   if (i > 12) {
//     hour -= 12;
//   }
//   var targetId = "#" + hour + amPm;
//   var timeInput = localStorage.getItem(hour + amPm);
//   if (timeInput) {
//     $(targetId).val(timeInput);
//   }
//   if (i < currentTime) {
//     $(targetId).addClass("past");
//   } else if (i > currentTime) {
//     $(targetId).addClass("future");
//   } else {
//     $(targetId).addClass("present");
//   }
// }

// // var now = luxon.DateTime.local().toLocaleString({
// //   weekday: "short",
// //   month: "short",
// //   day: "2-digit",
// //   hour: "2-digit",
// //   minute: "2-digit",
// // });

// // // function for dateshown
// // // $("#currentDay").text(now);
// // // console.log("It is" + now);

// $("currentDay").text(
//   luxon.DateTime.local().toLocaleString({
//     weekday: "short",
//     month: "short",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//   })
// );
// var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");
// var mode = "dark";

// themeSwitcher.addEventListener("click", function () {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   } else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });

// var currentDay = $("#currentDay");
// //var now = luxon.DateTime.local();
// //console.log(now);
// var nowHours = luxon.DateTime.local().toObject().hour;
// //console.log(nowHours);
// var titleTime = luxon.DateTime.local().toLocaleString({
//   weekday: "long",
//   month: "long",
//   day: "2-digit",
//   hour: "2-digit",
//   minute: "2-digit",
// });
//console.log(titleTime);

// //adding time blocks
// // var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
// // //function to loop each element and to set the classes and attribute
// // hour.forEach(function (time) {
// //   var text = $("<textarea>").attr("dataStorage", time);
// //   var btn = $("<button>").addClass("saveBtn fas fa-save");
// //   var row = $("<div>").addClass("row");
// //   var hours = $("<div>").addClass("hour");
// //   ///parsing hour array, try to find a new way to do this, bc i don't understand it

// //   let any = parseInt(time);

// //   //apend each variable
// //   row.append(hours, text, btn);

// //   //appending row to container class
// //   $(".container").append(row);
// // });

// // var currentHour = Date.now().getHours();
// // $(".colorcode").each(function () {
// //   var val = parseInt($(this).prop("id"));
// //   if (val > currentHour && val < currentHour + 6) {
// //     $(this).css("background-color", "Blue");
// //   } else if (val < currentHour && val > currentHour - 6) {
// //     $(this).css("background-color", "Red");
// //   } else if (val === currentHour) {
// //     $(this).css("background-color", "Green");
// //   } else {
// //     $(this).css("background-color", "White");
// //   }
// // });

// const colorcode = document.createElementsByClassName("colorcode"); //<- switched to get elements with class corresponding to the given html
// let currentHour = Date.now().getHours(); //get current time hour
// var date = document.getElementsByClassName("currentDay").textContent;

// //$("#currentDay").text(moment().format("dddd, MMMM, Do"));

// colorcode.forEach(function (colorcodedDiv) {
//   //just a syntax I use
//   let colorcodeHour = parseInt(colorcodedDiv.id);
//   if (colorcodeHour) {
//     if (currentHour === colorcodeHour) {
//       setColor(colorcodedDiv, "Red"); //switched to reference the iterated element
//     } else if (currentHour < colorcodeHour && currentHour > colorcodeHour - 6) {
//       setColor(colorcodedDiv, "Green");
//     } else if (currentHour > colorcodeHour && currentHour < colorcodeHour + 6) {
//       setColor(colorcodedDiv, "LightGrey");
//     } else {
//       setColor(colorcodedDiv, "White");
//     }
//   }
// });
// function setColor(element, color) {
//   element.style.backgroundColor = color;
// } //added curly bracket since it was missing

// dayjs('2019-01-25').format('ddd, MMMM, dd ) // '25/01/2019'
