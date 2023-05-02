const inquirer = require("inquirer");
const open_url_by_browser = require("open-url-by-browser");
require("datejs");

const questions = [
  {
    type: "input",
    name: "link",
    message: "Which link would you like to open?",
    validate(value) {
      const pass = value.match(
        /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/
      );
      if (pass) {
        return true;
      }

      return "Please enter a valid link";
    },
  },
  {
    type: "input",
    name: "time",
    message: "What time you would like the link to open?",
    validate(value) {
      const pass = value.match(
        /^(0?[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])? ?([ap]\.?m\.?)?$/i
      );
      if (pass) {
        return true;
      }

      return "Please enter a valid time";
    },
  },
];

const go = async () => {
  const answers = await inquirer.prompt(questions);

  const currentTime = Date.now();
  const givenTime = Date.parse(answers.time).getTime();
  const timeDifference = givenTime - currentTime;

  if (timeDifference < 0) {
    const dayInMills = 24 * 60 * 60 * 1000;
    const nextTime = timeDifference + dayInMills;
    const minutes = Math.floor(nextTime / 1000 / 60);
    console.log(`Your link will be open in ${minutes} minutes.`);
    setTimeout(() => {
      open_url_by_browser(answers.link);
    }, nextTime);
  } else {
    const minutes = Math.floor(timeDifference / 1000 / 60);
    console.log(`Your link will be open in ${minutes} minutes.`);
    setTimeout(() => {
      open_url_by_browser(answers.link);
    }, timeDifference);
  }
};

go();
