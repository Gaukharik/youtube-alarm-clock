# Youtube Alarm Clock

## Install

To install the game in your terminal, follow the steps below:

1. git clone https://github.com/Gaukharik/youtube-alarm-clock
2. cd youtube-alarm-clock
3. npm i inquirer
4. npm i open-url-by-browser
5. npm i datejs
6. node app.js

# Alarm Clock Objective

1. App will ask the user to enter the desired Youtube link.
2. App will ask the user to enter the desired time to open Youtube link.
   - If user enters the time in the future the link will be opened on the next closest time to current time.
   - If user enters the time in the past the link will be opened next day.
3. App will provide how many minutes left till link will be opened.

## Sample of using app.js

Once the user enters node app.js:

1. The prompt will ask: `Which link would you like to open?`. The user should enter the desired link.
2. The prompt will ask: `What time you would like the link to open?`. The user should enter the desired time the link will be opened.
3. The app will show how many minutes left till link will be opened.
