const axios = require('axios');

const api_key = "ToMkX8ppOaHwLbx4nhHegwzkGi6HUo3BhhMAV8A1";
exports.doRequest = async (req, res) => {
  let apiUrl;
  const { date: sampleDate } = req.query;
  const [selectedMonth, selectedDay] = sampleDate.split("-");
  const today = new Date()
  const [currentMonth, currentDay, currentYear] = today.toLocaleDateString('en-GB').split("/")
  let minimum, maximum;
  if (currentMonth >= selectedMonth && currentDay >= selectedDay) {
    minimum = 0;
    maximum = 5;
  } else {
    minimum = 1;
    maximum = 6;
  }
  const apods = [];
  for (let i = minimum; i < maximum; i++) {
    year = currentYear - i;
    const requestDate = `${year}-${selectedMonth}-${selectedDay}`
    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${requestDate}`;
    const response = await axios.get(apiUrl);
    const { headers, data } = await response;
    const { 'x-ratelimit-remaining': remainingRequests } = await headers;
    const { title, date, explanation, url } = data;
    apods.push({ remainingRequests, date, title, explanation, url });
  }
  return res.json(apods);
}