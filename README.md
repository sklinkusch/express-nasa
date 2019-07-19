# express-nasa

**_dedicated to captain Leandro Frigerio, the cleaner of the ~~space~~ sea_**

## Features

It consumes the [NASA API](https://api.nasa.gov/index.html) to get the following astronomic data

- data for the "Astronomy Picture of the Day (APOD)" for a given date
- data for all asteroids close to the earth during the last week

## Techniques

- Node.js
- Express
  - GET requests
  - middlewares

## How to use express-color

### Offline usage

#### Setup of the package

1. Clone the repository using `git clone git@github.com:sklinkusch/express-nasa.git` (SSH) or `git clone https://github.com/sklinkusch/express-nasa` (HTTPS).
1. Move into the directory `express-nasa` and run `npm install` or `yarn`.
1. Run `npm run dev` or `yarn dev` in the folder. The server is available on `https://localhost:3000`.

#### Making requests

Requests can be made in the browser, within JavaScript files using `XMLHttpRequest`, `fetch`, or `axios`, and with tools like Postman.

##### Astronomy Picture of the Day (APOD)

Input:

```
https://localhost:3000/apod?date=$DATE&years=$YEARS or
https://localhost:3000/apod?date=$DATE
```

If the years parameter is omitted, it is set to a default value of five years.

Example:

```
https://localhost:3000/apod?date=01-21&years=3
```

Output:

```
[
  {
    "remainingRequests": "955",
    "date": "2019-01-21",
    "title": "InSight Lander Takes Selfie on Mars",
    "explanation": "This is what NASA's Insight lander looks like on Mars. With its solar panels, InSight is about the size of a small bus.  Insight successfully landed on Mars in November with a main objective to detect seismic activity. The featured selfie is a compilation of several images taken of different parts of the InSight lander, by the lander's arm, at different times. SEIS, the orange-domed seismometer seen near the image center last month, has now been placed on the Martian surface.  With this selfie, Mars InSight continues  a long tradition of robotic spacecraft on Mars taking and returning images of themselves, including Viking, Sojourner, Pathfinder, Spirit, Opportunity, Phoenix, and Curiosity.  Data taken by Mars Insight is expected to give humanity unprecedented data involving the interior of Mars, a region thought to harbor formation clues not only about Mars, but Earth.    Growing Gallery:  Last Night's Total Lunar Eclipse",
    "url": "https://apod.nasa.gov/apod/image/1901/Selfie_InSight_1080.jpg"
  },
  {
    "remainingRequests": "953",
    "date": "2018-01-21",
    "title": "The Upper Michigan Blizzard of 1938",
    "explanation": "Yes, but can your blizzard do this? In Upper Michigan's Storm of the Century in 1938, some snow drifts reached the level of utility poles. Nearly a meter of new and unexpected snow fell over two days in a storm that started 80 years ago this week.  As snow fell and gale-force winds piled snow to surreal heights; many roads became not only impassable but unplowable; people became stranded; cars, school buses and a train became mired; and even a dangerous fire raged. Fortunately only two people were killed, although some students were forced to spend several consecutive days at school.  The featured image was taken by a local resident soon after the storm. Although all of this snow eventually melted, repeated snow storms like this help build lasting glaciers in snowy regions of our planet Earth.",
    "url": "https://apod.nasa.gov/apod/image/1801/snowpoles_brinkman_960.jpg"
  },
  {
    "remainingRequests": "952",
    "date": "2017-01-21",
    "title": "Daphnis the Wavemaker",
    "explanation": "Plunging close to the outer edges of Saturn's rings, on January 16 the Cassini spacecraft captured this closest yet view of Daphnis. About 8 kilometers across and orbiting within the bright ring system's Keeler gap, the small moon is making waves. The 42-kilometer wide outer gap is foreshortened in the image by Cassini's viewing angle. Raised by the influenced of the small moon's weak gravity as it crosses the frame from left to right, the waves are formed in the ring material at the edge of the gap. A faint wave-like trace of ring material is just visible trailing close behind Daphnis. Remarkable details on Daphnis can also be seen, including a narrow ridge around its equator, likely an accumulation of particles from the ring.  Participate: Take an Aesthetics & Astronomy Survey",
    "url": "https://apod.nasa.gov/apod/image/1701/PIA21056_1020c.jpg"
  }
]
```

##### Asteroids during the last week

Input:

```
https://localhost:3000/asteroids
```

Output:

```
[
  {
    "name": "(2019 NM5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843216",
    "absolute_magnitude_h": 27.11,
    "diameter": {
      "min": 10.0590039018,
      "max": 22.4926165103
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "31534.9980607601",
    "missing_by": "817679.996452684"
  },
  ...,
  {
    "name": "455554 (2004 MQ1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2455554",
    "absolute_magnitude_h": 18,
    "diameter": {
      "min": 667.6594134952,
      "max": 1492.931834393
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "112084.3461971297",
    "missing_by": "71120795.50757772"
  }
]
```

### Online usage

#### Making requests

Requests can be made in the browser, within JavaScript files using `XMLHttpRequest`, `fetch`, or `axios`, and with tools like Postman.

##### Astronomy Picture of the Day (APOD)

Input:

```
https://express-nasa.sklinkusch.now.sh/apod?date=$DATE&years=$YEARS or
https://express-nasa.sklinkusch.now.sh/apod?date=$DATE
```

If the years parameter is omitted, it is set to a default value of five years.

Example:

```
https://express-nasa.sklinkusch.now.sh/apod?date=01-21&years=3
```

Output:

```
[
  {
    "remainingRequests": "955",
    "date": "2019-01-21",
    "title": "InSight Lander Takes Selfie on Mars",
    "explanation": "This is what NASA's Insight lander looks like on Mars. With its solar panels, InSight is about the size of a small bus.  Insight successfully landed on Mars in November with a main objective to detect seismic activity. The featured selfie is a compilation of several images taken of different parts of the InSight lander, by the lander's arm, at different times. SEIS, the orange-domed seismometer seen near the image center last month, has now been placed on the Martian surface.  With this selfie, Mars InSight continues  a long tradition of robotic spacecraft on Mars taking and returning images of themselves, including Viking, Sojourner, Pathfinder, Spirit, Opportunity, Phoenix, and Curiosity.  Data taken by Mars Insight is expected to give humanity unprecedented data involving the interior of Mars, a region thought to harbor formation clues not only about Mars, but Earth.    Growing Gallery:  Last Night's Total Lunar Eclipse",
    "url": "https://apod.nasa.gov/apod/image/1901/Selfie_InSight_1080.jpg"
  },
  {
    "remainingRequests": "953",
    "date": "2018-01-21",
    "title": "The Upper Michigan Blizzard of 1938",
    "explanation": "Yes, but can your blizzard do this? In Upper Michigan's Storm of the Century in 1938, some snow drifts reached the level of utility poles. Nearly a meter of new and unexpected snow fell over two days in a storm that started 80 years ago this week.  As snow fell and gale-force winds piled snow to surreal heights; many roads became not only impassable but unplowable; people became stranded; cars, school buses and a train became mired; and even a dangerous fire raged. Fortunately only two people were killed, although some students were forced to spend several consecutive days at school.  The featured image was taken by a local resident soon after the storm. Although all of this snow eventually melted, repeated snow storms like this help build lasting glaciers in snowy regions of our planet Earth.",
    "url": "https://apod.nasa.gov/apod/image/1801/snowpoles_brinkman_960.jpg"
  },
  {
    "remainingRequests": "952",
    "date": "2017-01-21",
    "title": "Daphnis the Wavemaker",
    "explanation": "Plunging close to the outer edges of Saturn's rings, on January 16 the Cassini spacecraft captured this closest yet view of Daphnis. About 8 kilometers across and orbiting within the bright ring system's Keeler gap, the small moon is making waves. The 42-kilometer wide outer gap is foreshortened in the image by Cassini's viewing angle. Raised by the influenced of the small moon's weak gravity as it crosses the frame from left to right, the waves are formed in the ring material at the edge of the gap. A faint wave-like trace of ring material is just visible trailing close behind Daphnis. Remarkable details on Daphnis can also be seen, including a narrow ridge around its equator, likely an accumulation of particles from the ring.  Participate: Take an Aesthetics & Astronomy Survey",
    "url": "https://apod.nasa.gov/apod/image/1701/PIA21056_1020c.jpg"
  }
]
```

##### Asteroids during the last week

Input:

```
https://express-nasa.sklinkusch.now.sh/asteroids
```

Output:

```
[
  {
    "name": "(2019 NM5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843216",
    "absolute_magnitude_h": 27.11,
    "diameter": {
      "min": 10.0590039018,
      "max": 22.4926165103
    },
  ...,
  {
    "name": "455554 (2004 MQ1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2455554",
    "absolute_magnitude_h": 18,
    "diameter": {
      "min": 667.6594134952,
      "max": 1492.931834393
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "112084.3461971297",
    "missing_by": "71120795.50757772"
  }
]
```

### Troubleshooting

In this section, common error messages are explained.

#### You have to provide a date in your query

This means, you tried to get the astronomy pictures of the day (APOD) without telling the date. The minimum input is

```
https://localhost:3000/apod?date=01-21
```

for the 21<sup>st</sup> of January. You may also state an optional years parameter, the input changes to

```
https://localhost:3000/apod?date=01-21&years=3
```

#### The date has to be in the format MM-DD, e.g. 04-01 for the 1st of April.

You provided a date that was in the wrong format. The date consists of a two-digit month, followed by a '-' sign and a two-digit day.

#### The request could not be fulfilled. Please try again later.

You tried to make a request, which did not work for some reason although the input was well-formed. It is not your fault, but maybe something is wrong with the NASA server.

#### The endpoint you selected does not exist. Please refer to the manual on https://github.com/sklinkusch/color-nasa.

You tried to access an endpoint that does not exist. The working endpoints are:

```
https://localhost:3000/apod
https://localhost:3000/asteroids
```
