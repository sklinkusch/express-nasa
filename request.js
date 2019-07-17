const axios = require('axios');

const api_key = "ToMkX8ppOaHwLbx4nhHegwzkGi6HUo3BhhMAV8A1";
exports.doRequest = async (req, res) => {
  let apiUrl;
  if ("date" in req.query) {
    const { date: sampleDate } = req.query;
    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${sampleDate}`;
  } else {
    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
  }
  const response = await axios.get(apiUrl);
  const { headers, data } = await response;
  const { 'x-ratelimit-remaining': remainingRequests } = await headers;
  const { title, date, explanation, url } = data;
  return res.json({ remainingRequests, date, title, explanation, url });
}