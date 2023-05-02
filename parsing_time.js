// 1
// function validateTime(input) {
//   return (
//     Date.parse(input, ["H:m", "h:mt", "h:m t", "ht", "h t"]) != null ||
//     Date.parse(input, ["h:mtt", "h:m tt", "htt", "h tt"]) != null
//   );
// }
// console.log(validateTime("5pm"));

// 2
// function parseTime(t) {
//   var d = new Date();
//   var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
//   d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
//   d.setMinutes(parseInt(time[2]) || 0);
//   return d;
// }

// var tests = [
//   "1:00 pm",
//   "1:00 p.m.",
//   "1:00 p",
//   "1:00pm",
//   "1:00p.m.",
//   "1:00p",
//   "1 pm",
//   "1 p.m.",
//   "1 p",
//   "1pm",
//   "1p.m.",
//   "1p",
//   "13:00",
//   "13",
//   "1a",
//   "12",
//   "12a",
//   "12p",
//   "12am",
//   "12pm",
//   "2400am",
//   "2400pm",
//   "2400",
//   "1000",
//   "100",
//   "123",
//   "2459",
//   "2359",
//   "2359am",
//   "1100",
//   "123p",
//   "1234",
//   "1",
//   "9",
//   "99",
//   "999",
//   "9999",
//   "99999",
//   "0000",
//   "0011",
//   "-1",
//   "mioaw",
// ];

// for (var i = 0; i < tests.length; i++) {
//   console.log(tests[i].padStart(9, " ") + " = " + parseTime(tests[i]));
// }
// console.log(parseTime("5pm"));

// 3
// const date = new Date();
// const timeString = "4pm";
// const options = { hour12: true };
// const time = timeString.toLocaleTimeString(undefined, options);
// const dateString = `\${date.getFullYear()}-${(date.getMonth() + 1)
//   .toString()
//   .padStart(
//     2,
//     "0"
//   )}-\${date.getDate().toString().padStart(2, '0')}T\${time}:00`;
// const timestamp = Date.parse(dateString);
// const parsedDate = new Date(timestamp);
// console.log(parsedDate);

// 4
// const moment = require("moment-timezone");

// const timeString = "1 pm";
// const formatString = "h a";

// const parsedDate = moment.tz(timeString, formatString, "UTC");

// const estDate = parsedDate.tz("America/New_York");

// console.log(estDate);

// 5
// function parseTime(t) {
//   var d = new Date();
//   var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
//   d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
//   d.setMinutes(parseInt(time[2]) || 0);
//   return d;
// }
// console.log(parseTime("21:00"));

// 6
// function fromAny(fromString) {
//   return function fromAny(any, locale) {
//     if (any instanceof Date) {
//       return any;
//     }
//     if (typeof any === "number") {
//       return new Date(any);
//     }
//     return fromString(any, locale);
//   };
// }

// 7
// function parseTime(timeString) {
//   if (timeString == "") return null;

//   var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
//   if (time == null) return null;

//   var hours = parseInt(time[1], 10);
//   if (hours == 12 && !time[4]) {
//     hours = 0;
//   } else {
//     hours += hours < 12 && time[4] ? 12 : 0;
//   }
//   var d = new Date();
//   d.setHours(hours);
//   d.setMinutes(parseInt(time[3], 10) || 0);
//   d.setSeconds(0, 0);
//   return d;
// }
// console.log(parseTime("4 pm"));

// const open_url_by_browser = require("open-url-by-browser");
// require("datejs");

// const currentTime = Date.now();
// const timeDifference = givenTime - currentTime;
// const givenTime = Date.parse("9:08pm").getTime();

// function alarm() {
//   if (timeDifference === 0) {
//     clearInterval(intervalID);
//     open_url_by_browser("https://www.youtube.com/watch?v=Nsc7-VARbuQ");
//   } else if (timeDifference < 0) {
//     const nextGivenTime = givenTime + 86400000;
//     const timeUntilNextGivenTime = nextGivenTime - currentTime;
//     setTimeout(function () {
//       clearInterval(intervalID);
//       open_url_by_browser("https://www.youtube.com/watch?v=Nsc7-VARbuQ");
//     }, timeUntilNextGivenTime);
//     console.log("Your link will be opened on the next closest time");
//   }
// }

// setTimeout(alarm, timeDifference);
