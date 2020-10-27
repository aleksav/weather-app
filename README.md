# Weather App

Welcome to my weather app, which displays the current weather for a given
location. The data is supplied by the
[Open Weather API](https://openweathermap.org/api).

You can find the hosted project here: https://weather-app-ab.netlify.app/

## Getting Started & Installation

### Prerequisites

To run this on your machine, you will need Node.js installed on your machine.

To install Node, go to: https://nodejs.org/en/download/ \
 The version required is a minimum of v. 13.8.0

You will also need a key for the Open Weather API.

To obtain an API key, sign up for a free account here:
https://home.openweathermap.org/users/sign_up \

You API key will be emailed to you. Please note that it can take up to two hours
for your API key to become activated after receiving it.

### Installation

These instructions will get you a copy of the project up and running on your
local machine.

1. Clone a copy of the repository on your machine using the below command:

```javascript
git clone https://github.com/austinbooth/weather-app.git
```

2. In the project directory, install the required dependencies:

```javascript
npm install
```

3. In the 'src' directory, create a 'token.js' file. This file will allow the
   app to use your API key.

Open the file, copy the line below into it, replacing 'YOUR-API-KEY' with your
API key.

```javascript
exports.OPEN_WEATHER_TOKEN = "YOUR-API-KEY";
```

4. To run the project and start up the localserver, run:

```javascript
npm start
```

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user
  interfaces
