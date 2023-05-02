// 1
// const prompts = require("prompts");

// (async () => {
//   const response = await prompts({
//     type: "date",
//     name: "alarm",
//     message: `Please enter the alarm time: `,
//     validate: (date) =>
//       date < Date.now() ? `Your alarm time can't be in the past` : true,
//   });

//   console.log(response);
// })();

// 2
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let alarmTime; // declare variable outside the callback function

// rl.question("Set the alarm time (example: 2023-04-23 19:00:00): ", (time) => {
//   console.log(`The alarm time is: ${time}`);
//   alarmTime = time; // assign value to variable
//   console.log(alarmTime);
//   rl.close();
// });

// 3
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function getAlarmTime() {
  return new Promise((resolve) => {
    rl.question(
      "Set the alarm time (example: 2023-04-23 19:00:00): ",
      (time) => {
        console.log(`The alarm time is: ${new Date(time)}`);
        resolve(time);
        rl.close();
      }
    );
  });
}

async function main() {
  const alarmTime = await getAlarmTime();
  console.log(`The alarm time is: ${new Date(alarmTime)}`);
}

main();
