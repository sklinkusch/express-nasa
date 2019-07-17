const { name, version } = require("./package.json");

exports.showVersion = () => {
  console.log(version);
}

exports.showHelp = () => {
  console.log(`
  Welcome to ${name} ${version}.
  
  Usage: 
  npm run dev:
    runs a server locally; you can access it using https://localhost:3000/<endpoints>
  node index.js --version
    shows the version of the current API
  node index.js --help
    shows this help text

  Endpoints:
  1. show a list of astronomy events of the day for a certain date during the last years:
    https://localhost:3000/apod?date=DATE&years=YEARS
    (DATE is the date in the format MM-DD (required) and years is the number of years (optional, default: 5))
  2. show a list of asteroids that were close to the Earth in the last seven days:
    https://localhost:3000/asteroids
    (no further parameters)
  
  For further information, please refer to the manual on https://github.com/sklinkusch/express-nasa
  `);
}