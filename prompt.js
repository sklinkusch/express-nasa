const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
exports.basicPrompt = () => {
  rl.question("What information would you like to get? APOD or asteroids?", method => {
    checkMethod(method);
    if (method.toLowerCase() === "apod") {
      rl.question("For which date (format: MM-DD)?", date => {
        checkDate(date);
        doAPODTerm(date);
      });
    } else {
      doAsteroidsTerm();
    }
  });
  process.exit();
}

const checkMethod = (method) => {
  if (method.toLowerCase() !== "apod" && method.toLowerCase() !== "asteroids") {
    console.log(`There is no such method: ${method}`);
    process.exit();
  }
}

const checkDate = date => {
  if (!/^[01][0-9]-[012][0-9]$/.test(date)) {
    console.log("Your date format is wrong.");
    process.exit();
  }
  const stringArray = date.split("-");
  const [month, day] = stringArray.map(string => Number(string));
  if (month < 1 || month > 12) {
    console.log("The month must be between 1 and 12.");
    process.exit();
  }
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    if (day < 1 || day > 31) {
      console.log("The day must be between 1 and 31.");
      process.exit();
    }
  } else if ([4, 6, 9, 11].includes(month)) {
    if (day < 1 || day > 30) {
      console.log("The day must be between 1 and 30.");
      process.exit();
    }
  } else {
    if (day < 1 || day > 29) {
      console.log("The day must be between 1 and 29.");
      process.exit();
    }
  }
}