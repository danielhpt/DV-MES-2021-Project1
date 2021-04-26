# Tutorial

## Setup

1. Download and install [Node.js](https://nodejs.org/en/download/ "Download Node.js") (follow the wizard with the
   default configuration)
2. Clone this [repository](https://github.com/danielhpt/DV-Tutorial-Begin "Github repository")
```
git clone https://github.com/danielhpt/DV-Tutorial-Begin.git
```
3. Open the project in the IDE of your preference (we
   recommend [WebStorm](https://www.jetbrains.com/webstorm/download/ "Download WebStorm"))
4. In the terminal (in the root of the project) execute: `npm install`

## Content of the project

* A simple implementation of a webserver with Node and Express
* The "style.css" file (inside ./public/stylesheets/) contains the css of the page, you can change the 'width' and '
  height' of the '.divTableCell' to resize the table cells
* The "index.html" file (inside ./views/) is where the tutorial will take place. Contains:
    * [Chart.js](https://www.chartjs.org/) the library that will be used in this tutorial
    ```html
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    ```
    * [JQuery](https://jquery.com/)
    * CSS
    * The space to put your code
    ```javascript
    let onLoad = function () {
        /**
         * Insert your code here
         */
    };
    ```
    * The canvas tags that will contain the charts
    ```html
    <canvas id="myChart_1"></canvas>
    ```

## Running the project

In the terminal (in the root of the project) execute: `npm run dev`  
It will run the project using *nodemon*, that automatically restart the node application when files change. This way,
there is no need to restart the server all the time.

In the browser open [localhost:3000](http://localhost:3000/)

## Exercises

Open the file ./view/index.html and write your code inside the onload function.

1. Adding the data:
    1. Add the data below, corresponding to the Top 10 councils with the largest population in Portugal, in 2018 (and
       their population in 2011), as well as their coordinates:
    ```javascript
    // Top 10 councils with the largest population in Portugal, in 2018
    const cities = [
        'Lisboa',
        'Sintra',
        'Vila Nova de Gaia',
        'Porto',
        'Cascais',
        'Loures',
        'Braga',
        'Amadora',
        'Oeiras',
        'Matosinhos'
    ];
    const pop2018 = [
        507220,
        388434,
        299938,
        215284,
        212474,
        211359,
        181919,
        181724,
        176218,
        174382
    ];
    // Populations of those cities in 2011
    const pop2011 = [
        547733,
        377835,
        302295,
        237591,
        206479,
        205054,
        181494,
        175136,
        172120,
        175478
    ];
    // Longitude and latitude (x, y)
    const citGeo = [
        {x: -9.13333, y: 38.71667},
        {x: -9.37826, y: 38.80097},
        {x: -8.61742, y: 41.13363},
        {x: -8.61099, y: 41.14961},
        {x: -9.42146, y: 38.69790},
        {x: -9.16845, y: 38.83091},
        {x: -8.42005, y: 41.55032},
        {x: -9.23083, y: 38.75382},
        {x: -9.31460, y: 38.69690},
        {x: -8.69630, y: 41.18440}
    ];
    // Longitude, latitude and population in 2018 (x, y, r)
    const citGeoPop = [  // population divided by 10000 for scale
        {x: -9.13333, y: 38.71667, r: 50.7220},
        {x: -9.37826, y: 38.80097, r: 38.8434},
        {x: -8.61742, y: 41.13363, r: 29.9938},
        {x: -8.61099, y: 41.14961, r: 21.5284},
        {x: -9.42146, y: 38.69790, r: 21.2474},
        {x: -9.16845, y: 38.83091, r: 21.1359},
        {x: -8.42005, y: 41.55032, r: 18.1919},
        {x: -9.23083, y: 38.75382, r: 18.1724},
        {x: -9.31460, y: 38.69690, r: 17.6218},
        {x: -8.69630, y: 41.18440, r: 17.4382}
    ];
    ```
    2. Also add some colors, for later:
    ```javascript
    const colors = [
        'rgba(109, 198, 42, 0.7)',
        'rgba(23, 54, 120, 0.7)',
        'rgba(23, 120, 105, 0.7)',
        'rgba(23, 120, 54, 0.7)',
        'rgba(120, 120, 23, 0.7)',
        'rgba(120, 86, 23, 0.7)',
        'rgba(120, 23, 23, 0.7)',
        'rgba(120, 23, 58, 0.7)',
        'rgba(120, 23, 102, 0.7)',
        'rgba(102, 23, 120, 0.7)',
        'rgba(58, 23, 120, 0.7)',
        'rgba(29, 23, 120, 0.7)',
    ];
    ```
2. Creating your first chart:
    1. Let's begin with the basic configuration of every chart:
    ```javascript
    new Chart(document.getElementById(id) /* Canvas element */,{
        type: '', // bar, line, doughnut, pie, radar, scatter, bubble, polar
        data: {
            labels: [],
            datasets: [{
                label: "",
                data: [],
            }]
        },
        options: {}
    });
    ```
    2. For this chart let's use the first canvas `id = 'myChart_1'` and the *type* `'bar'`
    3. For the *data.labels* we will use the `cities` constant, for the *data.datasets.label* lets put `"Population"`
       and for the *data.datasets.data* we will use the `pop2018` constant
    4. Let's try to run it and open [localhost:3000](http://localhost:3000/)
    5. Better add some color. Inside *data.datasets* add:
    ```javascript
    backgroundColor: 'rgba(109, 198, 42, 0.9)'
    ```
    6. Refresh the page
    7. At this point you should have something like this:
    ```javascript
    new Chart(document.getElementById("myChart_1"), {
        type: 'bar',
        data: {
            labels: cities,
            datasets: [{
                label: "Population",
                data: pop2018,
                backgroundColor: 'rgba(109, 198, 42, 0.9)'
            }]
        },
        options: {}
    });
    ```
3. Line chart:
    1. Let's begin by coping the code of the bar chart
    2. Change the canvas id to `id = 'myChart_2'` and the *type* to `'line'`
    3. Refresh the page
    4. Let's make sure that it begins at 0. Inside *options* add:
    ```javascript
    scales: {
        y: {
            beginAtZero: true
        }
    }
    ```
    5. Refresh the page
    6. At this point you should have something like this:
    ```javascript
    new Chart(document.getElementById("myChart_2"), {
        type: 'line',
        data: {
            labels: cities,
            datasets: [{
                label: "Population",
                data: pop2018,
                backgroundColor: 'rgba(109, 198, 42, 0.9)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    ```
4. Pie/Doughnut chart:
    1. Again, let's begin by coping the code of the bar chart
    2. Change the canvas id to `id = 'myChart_3'` and the *type* to `'pie'` or `'doughnut'`
    3. It's better to have different colors for each slice. Change the *data.datasets.backgroundColor* to the `colors`
       constant
    4. Refresh the page
    5. Try clicking in the legend and see what happens
    6. At this point you should have something like this:
    ```javascript
    new Chart(document.getElementById("myChart_3"), {
        type: 'pie', // doughnut, pie
        data: {
            labels: cities,
            datasets: [{
                label: "Population",
                data: pop2018,
                backgroundColor: colors
            }]
        },
        options: {}
    });
    ```
5. Radar chart:
    1. Let's go back to the basic configuration and add a second dataset:
    ```javascript
    new Chart(document.getElementById(id),{
        type: '',
        data: {
            labels: [],
            datasets: [{
                label: "",
                data: [],
            }, {
                label: "",
                data: [],
            }]
        },
        options: {}
    });
    ```
    2. For this chart let's use `id = 'myChart_4'`, the *type* `'radar'` and for the *data.labels* `cities`
    3. For the first dataset:
        1. *data.datasets.label* = `"Population in 2018"`
        2. *data.datasets.data* = `pop2018`
    4. For the second dataset:
        1. *data.datasets.label* = `"Population in 2011"`
        2. *data.datasets.data* = `pop2011`
    5. Let's add some color to differentiate them
        1. First dataset (red)
        ```javascript
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
        ```
        2. Second dataset (blue)
        ```javascript
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)'
        ```
    6. And make sure that it begins at 0. Inside *options* add:
    ```javascript
    scales: {
        r: {
            beginAtZero: true
        }
    }
    ```
    7. Refresh the page
    8. At this point you should have something like this:
    ```javascript
    new Chart(document.getElementById("myChart_4"), {
        type: 'radar',
        data: {
            labels: cities,
            datasets: [{
                label: "Population in 2018",
                data: pop2018,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
            }, {
                label: "Population in 2011",
                data: pop2011,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true
                }
            }
        }
    });
    ```
6. Scatter chart
    1. Let's begin by coping the code of the pie chart
    2. Change the canvas id to `id = 'myChart_5'`, the *type* to `'scatter'` and the *data.datasets.data* to
       the `citGeo` constant
    3. Let's make sure that the x-axis appears. Inside *options* add:
    ```javascript
    scales: {
        x: {
            type: 'linear',
            position: 'bottom'
        }
    }
    ```
    4. Refresh the page
    5. At this point you should have something like this:
    ```javascript
    new Chart(document.getElementById("myChart_5"), {
        type: 'scatter',
        data: {
            labels: cities,
            datasets: [{
                label: "Population",
                data: citGeo,
                backgroundColor: colors
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
    ```
6. Scatter chart
    1. Let's begin by coping the code of the scatter chart
    2. Change the canvas id to `id = 'myChart_6'`, the *type* to `'bubble'` and the *data.datasets.data* to
       the `citGeoPop` constant
    3. Refresh the page
    4. At this point you should have something like this:
    ```javascript
    new Chart(document.getElementById("myChart_6"), {
        type: 'bubble',
        data: {
            labels: cities,
            datasets: [{
                label: "Population",
                data: citGeoPop,
                backgroundColor: colors
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
    ```