# express-nasa

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
// 20190717155045
// http://localhost:3000/asteroids

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
  {
    "name": "(2018 VO3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3836092",
    "absolute_magnitude_h": 27.1,
    "diameter": {
      "min": 10.1054341542,
      "max": 22.5964377109
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-15",
    "velocity": "27781.9557115504",
    "missing_by": "59176776.099044151"
  },
  {
    "name": "(2015 VK1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3733138",
    "absolute_magnitude_h": 26.6,
    "diameter": {
      "min": 12.7219878539,
      "max": 28.4472296503
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "66092.0166030071",
    "missing_by": "71516512.032658312"
  },
  {
    "name": "(2016 JE18)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3753076",
    "absolute_magnitude_h": 26.3,
    "diameter": {
      "min": 14.6067964271,
      "max": 32.6617897446
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "45020.0520098266",
    "missing_by": "54723822.309040052"
  },
  {
    "name": "(2019 NR3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843175",
    "absolute_magnitude_h": 26.258,
    "diameter": {
      "min": 14.8920668336,
      "max": 33.2996737654
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "17297.2460884847",
    "missing_by": "6436174.652487048"
  },
  {
    "name": "(2017 FK3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3771643",
    "absolute_magnitude_h": 26.2,
    "diameter": {
      "min": 15.2951935344,
      "max": 34.201092472
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "55130.7124616623",
    "missing_by": "33958731.270269556"
  },
  {
    "name": "(2019 EE1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3838903",
    "absolute_magnitude_h": 26.047,
    "diameter": {
      "min": 16.4117531692,
      "max": 36.6977957162
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "33597.1360676678",
    "missing_by": "45278855.050815536"
  },
  {
    "name": "(2017 BG136)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3769438",
    "absolute_magnitude_h": 25.971,
    "diameter": {
      "min": 16.9963230286,
      "max": 38.0049336595
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "58286.9814901783",
    "missing_by": "43346324.394356784"
  },
  {
    "name": "(2015 CL13)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3710218",
    "absolute_magnitude_h": 25.7,
    "diameter": {
      "min": 19.2555078188,
      "max": 43.0566244241
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "75860.684346362",
    "missing_by": "48224260.361232131"
  },
  {
    "name": "(2018 VP5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3836124",
    "absolute_magnitude_h": 25.3,
    "diameter": {
      "min": 23.150212221,
      "max": 51.7654482198
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-15",
    "velocity": "66969.4800904916",
    "missing_by": "73255037.274839257"
  },
  {
    "name": "(2016 NJ33)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3755347",
    "absolute_magnitude_h": 25.2,
    "diameter": {
      "min": 24.2412481101,
      "max": 54.2050786336
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "16118.7976487251",
    "missing_by": "5729173.802405792"
  },
  {
    "name": "(2019 NQ5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843225",
    "absolute_magnitude_h": 25.098,
    "diameter": {
      "min": 25.4070929607,
      "max": 56.8119869708
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "35639.6458233534",
    "missing_by": "4398435.015451714"
  },
  {
    "name": "(2019 ND2)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843130",
    "absolute_magnitude_h": 25.031,
    "diameter": {
      "min": 26.2032389117,
      "max": 58.5922234371
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-11",
    "velocity": "18599.6247764648",
    "missing_by": "14720453.206715388"
  },
  {
    "name": "(2018 OZ)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3825828",
    "absolute_magnitude_h": 24.9,
    "diameter": {
      "min": 27.8326768072,
      "max": 62.2357573367
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "23690.3792353754",
    "missing_by": "39187325.930966585"
  },
  {
    "name": "(2019 NN3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843171",
    "absolute_magnitude_h": 24.784,
    "diameter": {
      "min": 29.3599273504,
      "max": 65.65079337
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "31835.8491989376",
    "missing_by": "320291.238758689"
  },
  {
    "name": "(2019 MW1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842954",
    "absolute_magnitude_h": 24.505,
    "diameter": {
      "min": 33.385276435,
      "max": 74.6517475563
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "30465.9032352893",
    "missing_by": "3005791.298470593"
  },
  {
    "name": "(2005 FC)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3274691",
    "absolute_magnitude_h": 24.5,
    "diameter": {
      "min": 33.4622374455,
      "max": 74.8238376074
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "41432.9619138142",
    "missing_by": "56705558.562261121"
  },
  {
    "name": "(2016 HR6)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3752515",
    "absolute_magnitude_h": 24.4,
    "diameter": {
      "min": 35.0392641108,
      "max": 78.3501764334
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "61534.3985962855",
    "missing_by": "74499844.038348148"
  },
  {
    "name": "(2017 LG1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3775210",
    "absolute_magnitude_h": 24.3,
    "diameter": {
      "min": 36.6906137531,
      "max": 82.0427064882
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "50149.8076793828",
    "missing_by": "50366272.152102746"
  },
  {
    "name": "(2019 NC)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843081",
    "absolute_magnitude_h": 24.295,
    "diameter": {
      "min": 36.7751943531,
      "max": 82.2318344592
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "27587.029000658",
    "missing_by": "9079297.944046608"
  },
  {
    "name": "(2018 BF5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3797902",
    "absolute_magnitude_h": 24.2,
    "diameter": {
      "min": 38.4197891064,
      "max": 85.9092601232
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "38798.4172963716",
    "missing_by": "14692308.013051458"
  },
  {
    "name": "(2019 LT4)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842864",
    "absolute_magnitude_h": 24.184,
    "diameter": {
      "min": 38.7039220732,
      "max": 86.5446007516
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "27029.1534920398",
    "missing_by": "11238131.566605113"
  },
  {
    "name": "(2019 AF11)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3837851",
    "absolute_magnitude_h": 24.145,
    "diameter": {
      "min": 39.4053307032,
      "max": 88.1129981282
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-11",
    "velocity": "20901.9812940809",
    "missing_by": "56647806.843099953"
  },
  {
    "name": "(2019 ML3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843086",
    "absolute_magnitude_h": 24.018,
    "diameter": {
      "min": 41.7787052337,
      "max": 93.4200249144
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "40774.2442459585",
    "missing_by": "9856284.866454224"
  },
  {
    "name": "(2019 NF1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843110",
    "absolute_magnitude_h": 24.002,
    "diameter": {
      "min": 42.0876790136,
      "max": 94.1109112897
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-17",
    "velocity": "36134.914328856",
    "missing_by": "7386077.309770925"
  },
  {
    "name": "(2019 MR2)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843059",
    "absolute_magnitude_h": 23.958,
    "diameter": {
      "min": 42.9491898948,
      "max": 96.0373081834
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "30925.7307361368",
    "missing_by": "18466825.634025498"
  },
  {
    "name": "(2019 NM4)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843179",
    "absolute_magnitude_h": 23.904,
    "diameter": {
      "min": 44.0306378189,
      "max": 98.4554992557
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "28448.3311479042",
    "missing_by": "3447363.639768249"
  },
  {
    "name": "(2007 WU3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3395961",
    "absolute_magnitude_h": 23.8,
    "diameter": {
      "min": 46.1907460282,
      "max": 103.2856480504
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "65636.1168778181",
    "missing_by": "62463674.346506037"
  },
  {
    "name": "(2019 NW5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843276",
    "absolute_magnitude_h": 23.779,
    "diameter": {
      "min": 46.6396171316,
      "max": 104.2893543508
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "56051.5871444962",
    "missing_by": "6987090.784689151"
  },
  {
    "name": "(2019 ML2)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843054",
    "absolute_magnitude_h": 23.751,
    "diameter": {
      "min": 47.2449046257,
      "max": 105.6428183335
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "22862.1757053628",
    "missing_by": "27742858.330689128"
  },
  {
    "name": "(2003 ME1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3157021",
    "absolute_magnitude_h": 23.6,
    "diameter": {
      "min": 50.6471458835,
      "max": 113.2504610618
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "37255.2205645483",
    "missing_by": "65840253.106201487"
  },
  {
    "name": "(2019 NS6)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843302",
    "absolute_magnitude_h": 23.462,
    "diameter": {
      "min": 53.9703179522,
      "max": 120.6812997084
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-17",
    "velocity": "41245.4034389941",
    "missing_by": "19009542.621128428"
  },
  {
    "name": "(2019 LF5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842881",
    "absolute_magnitude_h": 23.448,
    "diameter": {
      "min": 54.3194015544,
      "max": 121.4618743728
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-17",
    "velocity": "27791.4703865526",
    "missing_by": "15754148.413506647"
  },
  {
    "name": "(2017 OM1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3778076",
    "absolute_magnitude_h": 23.4,
    "diameter": {
      "min": 55.5334911581,
      "max": 124.1766612574
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "87357.1314669361",
    "missing_by": "46555780.656530871"
  },
  {
    "name": "(2019 KD3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842614",
    "absolute_magnitude_h": 23.144,
    "diameter": {
      "min": 62.4820077816,
      "max": 139.7140167704
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "28624.4808988655",
    "missing_by": "5946920.413612386"
  },
  {
    "name": "(2019 NB1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843106",
    "absolute_magnitude_h": 22.996,
    "diameter": {
      "min": 66.8890421037,
      "max": 149.5684450938
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "16255.3291292392",
    "missing_by": "35644087.335082321"
  },
  {
    "name": "(2019 NJ1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843112",
    "absolute_magnitude_h": 22.922,
    "diameter": {
      "min": 69.2077892658,
      "max": 154.7533213708
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "30319.698101135",
    "missing_by": "19188145.977263367"
  },
  {
    "name": "(2019 MZ3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843117",
    "absolute_magnitude_h": 22.814,
    "diameter": {
      "min": 72.7369316284,
      "max": 162.6447235959
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "103489.7198014487",
    "missing_by": "9413227.437181504"
  },
  {
    "name": "(2019 JT7)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3841949",
    "absolute_magnitude_h": 22.664,
    "diameter": {
      "min": 77.9390264436,
      "max": 174.2769612281
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-17",
    "velocity": "25033.5285076619",
    "missing_by": "13872234.974271319"
  },
  {
    "name": "(2002 FT6)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3117468",
    "absolute_magnitude_h": 22.5,
    "diameter": {
      "min": 84.0533402073,
      "max": 187.9489824394
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-17",
    "velocity": "60468.2487129773",
    "missing_by": "27434192.98567898"
  },
  {
    "name": "(2019 BF1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3837953",
    "absolute_magnitude_h": 22.38,
    "diameter": {
      "min": 88.8290416389,
      "max": 198.6277754808
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "22698.5615073457",
    "missing_by": "55417159.652624645"
  },
  {
    "name": "(2019 KE3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842616",
    "absolute_magnitude_h": 22.379,
    "diameter": {
      "min": 88.8699583451,
      "max": 198.7192680171
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "43310.8803609922",
    "missing_by": "19165708.166736742"
  },
  {
    "name": "(2019 GR21)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3841525",
    "absolute_magnitude_h": 22.011,
    "diameter": {
      "min": 105.2822060918,
      "max": 235.4181696424
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "32189.5560905899",
    "missing_by": "26629803.069519865"
  },
  {
    "name": "(2016 GG2)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3749030",
    "absolute_magnitude_h": 22,
    "diameter": {
      "min": 105.8168859331,
      "max": 236.6137501138
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "50936.6809494832",
    "missing_by": "47554114.457363862"
  },
  {
    "name": "(2019 LF1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842755",
    "absolute_magnitude_h": 21.995,
    "diameter": {
      "min": 106.0608190479,
      "max": 237.1592011403
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "27032.179072195",
    "missing_by": "42776882.585526426"
  },
  {
    "name": "(2005 UJ6)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3297366",
    "absolute_magnitude_h": 21.5,
    "diameter": {
      "min": 133.2155666981,
      "max": 297.8790627982
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "91771.7880565069",
    "missing_by": "70678340.224691537"
  },
  {
    "name": "481127 (2005 UJ6)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2481127",
    "absolute_magnitude_h": 21.5,
    "diameter": {
      "min": 133.2155666981,
      "max": 297.8790627982
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "91771.8317073706",
    "missing_by": "70678405.972955402"
  },
  {
    "name": "(2019 JS5)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3841847",
    "absolute_magnitude_h": 21.378,
    "diameter": {
      "min": 140.9142704751,
      "max": 315.0938877822
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "26018.3124095981",
    "missing_by": "34196394.519099665"
  },
  {
    "name": "(2019 NE2)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843131",
    "absolute_magnitude_h": 21.066,
    "diameter": {
      "min": 162.6877963678,
      "max": 363.780971788
    },
    "potentially_hazardous": true,
    "close_approach_date": "2019-07-11",
    "velocity": "78654.8080740874",
    "missing_by": "11405801.32305451"
  },
  {
    "name": "(2019 ME2)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843049",
    "absolute_magnitude_h": 20.934,
    "diameter": {
      "min": 172.8840694199,
      "max": 386.5805314498
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-17",
    "velocity": "17553.309804544",
    "missing_by": "38529445.795816208"
  },
  {
    "name": "(2018 NP1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3825580",
    "absolute_magnitude_h": 20.9,
    "diameter": {
      "min": 175.6123184804,
      "max": 392.6810818086
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "49898.2482529495",
    "missing_by": "36913380.951143227"
  },
  {
    "name": "(2016 NH15)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3754435",
    "absolute_magnitude_h": 20.9,
    "diameter": {
      "min": 175.6123184804,
      "max": 392.6810818086
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "13309.1439407522",
    "missing_by": "52547073.264444383"
  },
  {
    "name": "(2019 MQ1)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842952",
    "absolute_magnitude_h": 20.817,
    "diameter": {
      "min": 182.454666985,
      "max": 407.9810381905
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-15",
    "velocity": "97207.3033409257",
    "missing_by": "51965722.058942047"
  },
  {
    "name": "(2010 JV34)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3520666",
    "absolute_magnitude_h": 20.8,
    "diameter": {
      "min": 183.8886720703,
      "max": 411.1875710413
    },
    "potentially_hazardous": true,
    "close_approach_date": "2019-07-10",
    "velocity": "42083.7702775132",
    "missing_by": "34866505.551704437"
  },
  {
    "name": "418849 (2008 WM64)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2418849",
    "absolute_magnitude_h": 20.6,
    "diameter": {
      "min": 201.6299194428,
      "max": 450.8582061718
    },
    "potentially_hazardous": true,
    "close_approach_date": "2019-07-14",
    "velocity": "72289.1970047772",
    "missing_by": "68468115.500168311"
  },
  {
    "name": "(2019 JC47)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842749",
    "absolute_magnitude_h": 20.501,
    "diameter": {
      "min": 211.0352370903,
      "max": 471.8891357818
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "19051.0240174009",
    "missing_by": "53637474.276888705"
  },
  {
    "name": "(2016 LM48)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3754252",
    "absolute_magnitude_h": 20.5,
    "diameter": {
      "min": 211.1324447897,
      "max": 472.1064988055
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "44839.5877632978",
    "missing_by": "53496725.629531963"
  },
  {
    "name": "(2018 MR8)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3825514",
    "absolute_magnitude_h": 20.4,
    "diameter": {
      "min": 221.0828103591,
      "max": 494.3561926196
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "61146.6725179451",
    "missing_by": "42817886.538905141"
  },
  {
    "name": "(2015 FZ344)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3717078",
    "absolute_magnitude_h": 20.3,
    "diameter": {
      "min": 231.5021222103,
      "max": 517.6544821978
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-15",
    "velocity": "42764.5824495782",
    "missing_by": "31378259.028113664"
  },
  {
    "name": "(2019 NP3)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843173",
    "absolute_magnitude_h": 19.816,
    "diameter": {
      "min": 289.3043585454,
      "max": 646.9042118945
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "40461.9769402661",
    "missing_by": "65327642.82507414"
  },
  {
    "name": "524268 (2001 TO48)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2524268",
    "absolute_magnitude_h": 19.7,
    "diameter": {
      "min": 305.1792325939,
      "max": 682.4015094011
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "40335.7711133182",
    "missing_by": "25046571.18744556"
  },
  {
    "name": "(2001 TO48)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3092388",
    "absolute_magnitude_h": 19.7,
    "diameter": {
      "min": 305.1792325939,
      "max": 682.4015094011
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-13",
    "velocity": "40335.7710590352",
    "missing_by": "25046558.995219155"
  },
  {
    "name": "(2013 NT11)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3645001",
    "absolute_magnitude_h": 19.6,
    "diameter": {
      "min": 319.5618867213,
      "max": 714.5621017269
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "89376.9263986158",
    "missing_by": "56020211.510189394"
  },
  {
    "name": "425713 (2011 BK24)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2425713",
    "absolute_magnitude_h": 19.6,
    "diameter": {
      "min": 319.5618867213,
      "max": 714.5621017269
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-15",
    "velocity": "16069.7932143985",
    "missing_by": "73765363.091773195"
  },
  {
    "name": "(2011 UG21)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3582232",
    "absolute_magnitude_h": 19.5,
    "diameter": {
      "min": 334.6223744549,
      "max": 748.2383760735
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-10",
    "velocity": "42581.3838492492",
    "missing_by": "40790372.589474722"
  },
  {
    "name": "(2019 HL)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3841528",
    "absolute_magnitude_h": 19.442,
    "diameter": {
      "min": 343.6805673395,
      "max": 768.4931111167
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "66651.050753802",
    "missing_by": "70014132.563393557"
  },
  {
    "name": "(2013 AA32)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3623609",
    "absolute_magnitude_h": 19.3,
    "diameter": {
      "min": 366.9061375314,
      "max": 820.4270648822
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-11",
    "velocity": "86833.6824073655",
    "missing_by": "20449778.626562425"
  },
  {
    "name": "153315 (2001 NH6)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2153315",
    "absolute_magnitude_h": 19.2,
    "diameter": {
      "min": 384.1978910643,
      "max": 859.0926012318
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-16",
    "velocity": "88138.7367719735",
    "missing_by": "27691461.409367264"
  },
  {
    "name": "526449 (2006 OH15)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2526449",
    "absolute_magnitude_h": 18.9,
    "diameter": {
      "min": 441.1181999969,
      "max": 986.3702813054
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "64863.1547442731",
    "missing_by": "64370064.570356729"
  },
  {
    "name": "(2006 OH15)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3337835",
    "absolute_magnitude_h": 18.9,
    "diameter": {
      "min": 441.1181999969,
      "max": 986.3702813054
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "64863.1563310436",
    "missing_by": "64370053.948907959"
  },
  {
    "name": "(2019 MA2)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3842964",
    "absolute_magnitude_h": 18.803,
    "diameter": {
      "min": 461.2697521568,
      "max": 1031.430521787
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-14",
    "velocity": "110828.8040674075",
    "missing_by": "15477512.496056044"
  },
  {
    "name": "257744 (2000 AD205)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2257744",
    "absolute_magnitude_h": 18.5,
    "diameter": {
      "min": 530.3407233187,
      "max": 1185.8779085771
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "47102.3147783326",
    "missing_by": "29520068.445108261"
  },
  {
    "name": "293054 (2006 WP127)",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2293054",
    "absolute_magnitude_h": 18.3,
    "diameter": {
      "min": 581.5070396458,
      "max": 1300.2892700427
    },
    "potentially_hazardous": false,
    "close_approach_date": "2019-07-12",
    "velocity": "81118.0234278025",
    "missing_by": "15034649.454255602"
  },
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