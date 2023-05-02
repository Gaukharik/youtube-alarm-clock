// const inquirer = require("inquirer");
// const open_url_by_browser = require("open-url-by-browser");
// require("datejs");

// const questions = [
//   {
//     type: "input",
//     name: "link",
//     message: "Which link would you like to open?",
//     validate(value) {
//       const pass = value.match(
//         /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/
//       );
//       if (pass) {
//         return true;
//       }

//       return "Please enter a valid link";
//     },
//   },
//   {
//     type: "input",
//     name: "time",
//     message: "What time you would like the link to open?",
//     validate(value) {
//       const pass = value.match(
//         /^(0?[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])? ?([ap]\.?m\.?)?$/i
//       );
//       if (pass) {
//         return true;
//       }

//       return "Please enter a valid time";
//     },
//   },
// ];

// // inquirer.prompt(questions).then((answers) => {
// //   // console.log(JSON.stringify(answers, null, "  "));

// // });

// const go = async () => {
//   const answers = await inquirer.prompt(questions);

//   console.log(JSON.stringify(answers, null, "  "));

//   const currentTime = Date.now();
//   const givenTime = Date.parse(answers.time).getTime();
//   const timeDifference = givenTime - currentTime;

//   setTimeout(() => {
//     open_url_by_browser(answers.link);
//   }, timeDifference);
// };
// go();
