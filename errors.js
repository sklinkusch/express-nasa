exports.dateInInput = (req, res, next) => {
  if ("date" in req.query) {
    next();
  } else {
    return res.status(400).json({ error: { message: "You have to provide a date in your query" } });
  }
}

exports.checkDateFormat = (req, res, next) => {
  const { date } = req.query;
  if (/^[01][0-9]-[0123][0-9]{2}$/.test(date)) {
    next();
  } else {
    return res.status(400).json({ error: { message: "The date has to be in the format MM-DD, e.g. 04-01 for the 1st of April." } });
  }
}

exports.wrongEndpoint = (req, res) => {
  return res.status(404).json({ error: { message: "The endpoint you selected does not exist. Please refer to the manual on https://github.com/sklinkusch/color-nasa." } });
}