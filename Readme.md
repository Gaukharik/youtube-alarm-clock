# Open Link at Time

This is a Node.js script that prompts the user for a link and a time, and opens the link in the default browser at the specified time.

## Installation

To install the alarm in your terminal, follow the steps below:

1. git clone https://github.com/Gaukharik/youtube-alarm-clock
2. cd youtube-alarm-clock
3. npm i inquirer
4. npm i open-url-by-browser
5. npm i datejs
6. node app.js

## Usage

You will be prompted to enter a link and a time in the format hh:mm am/pm. The script will then calculate the time until the link should be opened, and display a message indicating the number of minutes until the link will be opened.

Once the time has elapsed, the link will be opened in the default browser.

## How it Works

The script prompts the user for a link and a time using the `inquirer` package. It then calculates the time until the link should be opened using the `Date.now()` method to get the current time, and the `Date.parse()` method to parse the input time.

If the input time is in the past, the script will add 24 hours to the time to open the link the next day. The time until the link should be opened is then calculated using the `setTimeout()` method.

If the input time is in the future, the time until the link should be opened is calculated directly using the `setTimeout()` method.
