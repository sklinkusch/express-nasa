const axios = require('axios');

const api_key = "ToMkX8ppOaHwLbx4nhHegwzkGi6HUo3BhhMAV8A1";

exports.doAPOD = async (req, res) => {
  try {
    let apiUrl;
    const { date: sampleDate, years: numberOfYears = 5 } = req.query;
    const [selectedMonth, selectedDay] = sampleDate.split("-");
    const today = new Date()
    const [currentMonth, currentDay, currentYear] = today.toLocaleDateString('en-GB').split("/")
    let minimum, maximum;
    if (currentMonth >= selectedMonth && currentDay >= selectedDay) {
      minimum = 0;
      maximum = minimum + numberOfYears;
    } else {
      minimum = 1;
      maximum = minimum + numberOfYears;
    }
    const apods = [];
    for (let i = minimum; i < maximum; i++) {
      year = currentYear - i;
      const requestDate = `${year}-${selectedMonth}-${selectedDay}`
      apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${requestDate}`;
      const response = await axios.get(apiUrl);
      const { headers, data } = await response;
      const { 'x-ratelimit-remaining': remainingRequests } = await headers;
      const { title, date, explanation, url } = await data;
      apods.push({ remainingRequests, date, title, explanation, url });
    }
    return res.json(apods);
  } catch (error) {
    return res.status(500).json({ error: { message: "The request could not be fulfilled. Please try again later." } });
  }
}

exports.doAsteroids = async (req, res) => {
  try {
    const today = new Date();
    const [month, day, year] = today.toLocaleDateString('en-GB').split("/");
    const startDate = dateOfLastWeek(year, month, day);
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${api_key}&start_date=${startDate}`;
    const response = await axios.get(apiUrl);
    const { headers, data } = await response;
    const { 'x-ratelimit-remaining': remainingRequests } = await headers;
    const { near_earth_objects } = await data;
    const unsortedArray = Object.keys(near_earth_objects).reduce((acc, cur) => {
      const current_day = near_earth_objects[cur];
      acc.push(...current_day);
      return acc;
    }, []);
    const sortedArray = unsortedArray.sort((a, b) => {
      const averageDiameterOfA = 0.5 * (a.estimated_diameter.meters.estimated_diameter_min + a.estimated_diameter.meters.estimated_diameter_max);
      const averageDiameterOfB = 0.5 * (b.estimated_diameter.meters.estimated_diameter_min + b.estimated_diameter.meters.estimated_diameter_max);
      return averageDiameterOfA - averageDiameterOfB;
    });
    const shortenedArray = sortedArray.map(asteroid => {
      const { name, nasa_jpl_url, absolute_magnitude_h, estimated_diameter: { meters: { estimated_diameter_min: min, estimated_diameter_max: max } }, is_potentially_hazardous_asteroid: potentially_hazardous, close_approach_data } = asteroid;
      const [first_date] = close_approach_data;
      const { close_approach_date, relative_velocity: { kilometers_per_hour: velocity }, miss_distance: { kilometers: missing_by } } = first_date;
      return { name, nasa_jpl_url, absolute_magnitude_h, diameter: { min, max }, potentially_hazardous, close_approach_date, velocity, missing_by };
    });
    return res.json(shortenedArray);
  } catch (error) {
    return res.status(500).json({ error: { message: "The request could not be fulfilled. Please try again later." } })
  }
}

const dateOfLastWeek = (year, month, day) => {
  let newDate;
  if (day > 7 && month >= 10) {
    newDate = `${year}-${month}-${day - 7}`;
  } else if (day > 7 && month < 10) {
    newDate = `${year}-0${month}-${day - 7}`;
  } else if (['2', '4', '6', '8', '9'].includes(month)) {
    newDate = `${year}-0${month - 1}-${Number(day) + 24}`;
  } else if (month === '11') {
    newDate = `${year}-${month - 1}-${Number(day) + 24}`;
  } else if (['5', '7', '10'].includes(month)) {
    newDate = `${year}-0${month - 1}-${Number(day) + 23}`;
  } else if (month === '12') {
    newDate = `${year}-${month - 1}-${Number(day) + 23}`;
  } else if (month === '3') {
    const isLeap = leap(year);
    newDate = isLeap
      ? `${year}-${month - 1}-${Number(day) + 22}`
      : `${year}-${month - 1}-${Number(day) + 21}`;
  } else if (month === '1') {
    newDate = `${year - 1}-12-${Number(day) + 24}`;
  }
  return newDate;
}

const leap = yearString => {
  year = Number(yearString);
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}