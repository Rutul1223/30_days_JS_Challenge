/* Activity -> 1 : Setting Up the Project */

// Task_1 - Initialize a new project directory and set up the basic HTML structure for the weather app.

// Answer :- Explore index.html file

// Task_2 - Add a basic CSS file to style the weather app, including a container for displaying weather information.

// Answer :- Explore styles.css file

/* Activity -> 2 : Fetching Weather Data */

// Task_3 - Use the 'fetch' API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.

// document.getElementById('searchButton').addEventListener('click', async () => {
//     const city = document.getElementById('city').value;
//     if (city) {
//         const apiKey = await fetchApiKey();
//         fetchWeatherData(city, apiKey);
//     } else {
//         alert('Please enter a city name.');
//     }
// });

// async function fetchApiKey() {
//     const response = await fetch('/api/key');
//     const data = await response.json();
//     return data.apiKey;
// }

// async function fetchWeatherData(city, apiKey) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// Task_4 - Parse the weather data and display the current temperature, weather condition and city name on the web page.

// document.getElementById('searchButton').addEventListener('click', async () => {
//     const city = document.getElementById('city').value;
//     if (city) {
//         const apiKey = await fetchApiKey();
//         fetchWeatherData(city, apiKey);
//     } else {
//         alert('Please enter a city name.');
//     }
// });

// async function fetchApiKey() {
//     const response = await fetch('/api/key');
//     const data = await response.json();
//     return data.apiKey;
// }

// async function fetchWeatherData(city, apiKey) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         updateWeatherInfo(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// function updateWeatherInfo(data) {
//     const locationElement = document.getElementById('location');
//     const temperatureElement = document.getElementById('temperature');
//     const descriptionElement = document.getElementById('description');

//     const cityName = data.name;
//     const temperature = data.main.temp;
//     const weatherDescription = data.weather[0].description;

//     locationElement.textContent = `Location: ${cityName}`;
//     temperatureElement.textContent = `Temperature: ${temperature}°C`;
//     descriptionElement.textContent = `Description: ${weatherDescription}`;
// }

/* Activity -> 3 : Adding Search Functionality */

// Task_5 - Add an input feild and a search button to the HTML structure. style the input and button using CSS.

// Answer :- Explore styles.css file

// Task_6 - Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.

// Answer :- Refer Task-4 is same

/* Activity -> 4 : Displaying a 5-Day Forecast */

// Task_7 - Use the 'fetch' API to get a 5-day weather forecast from the public weather API. Log the response data to the console.

// document.getElementById('searchButton').addEventListener('click', async () => {
//     const city = document.getElementById('city').value;
//     if (city) {
//         const apiKey = await fetchApiKey();
//         fetchWeatherData(city, apiKey);
//         fetchWeatherForecast(city, apiKey); // Fetch 5-day forecast
//     } else {
//         alert('Please enter a city name.');
//     }
// });

// async function fetchApiKey() {
//     const response = await fetch('/api/key');
//     const data = await response.json();
//     return data.apiKey;
// }

// async function fetchWeatherData(city, apiKey) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         updateWeatherInfo(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// async function fetchWeatherForecast(city, apiKey) {
//     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('5-Day Weather Forecast:', data);
//     } catch (error) {
//         console.error('Error fetching weather forecast:', error);
//     }
// }

// function updateWeatherInfo(data) {
//     const locationElement = document.getElementById('location');
//     const temperatureElement = document.getElementById('temperature');
//     const descriptionElement = document.getElementById('description');

//     const cityName = data.name;
//     const temperature = data.main.temp;
//     const weatherDescription = data.weather[0].description;

//     locationElement.textContent = `Location: ${cityName}`;
//     temperatureElement.textContent = `Temperature: ${temperature}°C`;
//     descriptionElement.textContent = `Description: ${weatherDescription}`;
// }

// Task_8 - Parse the forecast data and display the temperature and weather condition for each day in the forcast on the web page.

// document.getElementById('searchButton').addEventListener('click', async () => {
//     const city = document.getElementById('city').value;
//     if (city) {
//         const apiKey = await fetchApiKey();
//         fetchWeatherData(city, apiKey);
//         fetchWeatherForecast(city, apiKey); // Fetch 5-day forecast
//     } else {
//         alert('Please enter a city name.');
//     }
// });

// async function fetchApiKey() {
//     const response = await fetch('/api/key');
//     const data = await response.json();
//     return data.apiKey;
// }

// async function fetchWeatherData(city, apiKey) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         updateWeatherInfo(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// async function fetchWeatherForecast(city, apiKey) {
//     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         updateWeatherForecast(data);
//     } catch (error) {
//         console.error('Error fetching weather forecast:', error);
//     }
// }

// function updateWeatherInfo(data) {
//     const locationElement = document.getElementById('location');
//     const temperatureElement = document.getElementById('temperature');
//     const descriptionElement = document.getElementById('description');

//     const cityName = data.name;
//     const temperature = data.main.temp;
//     const weatherDescription = data.weather[0].description;

//     locationElement.textContent = `Location: ${cityName}`;
//     temperatureElement.textContent = `Temperature: ${temperature}°C`;
//     descriptionElement.textContent = `Description: ${weatherDescription}`;
// }

// function updateWeatherForecast(data) {
//     const forecastContainer = document.getElementById('forecast');
//     forecastContainer.innerHTML = ''; // Clear previous forecast data

//     // Forecast data is provided every 3 hours. Group by day.
//     const days = {};

//     data.list.forEach(item => {
//         const date = new Date(item.dt * 1000);
//         const day = date.toLocaleDateString(); // e.g., '8/5/2024'

//         if (!days[day]) {
//             days[day] = [];
//         }

//         days[day].push({
//             temp: item.main.temp,
//             description: item.weather[0].description
//         });
//     });

//     Object.keys(days).forEach(day => {
//         const dayData = days[day][0]; // Take the first entry of the day
//         const forecastItem = document.createElement('div');
//         forecastItem.className = 'forecast-item';

//         forecastItem.innerHTML = `
//             <h3>${day}</h3>
//             <p>Temperature: ${dayData.temp}°C</p>
//             <p>Description: ${dayData.description}</p>
//         `;

//         forecastContainer.appendChild(forecastItem);
//     });
//     // Show the forecast section
//     forecastContainer.style.display = 'block';
// }

/* Activity -> 5 : Enhancing the UI */

// Task_9 - Add icons or images to represent different weather conditions (e.g.,sunny,rainy,cloudy) based on the weather data.

// function updateWeatherInfo(data) {
//     const locationElement = document.getElementById('location');
//     const temperatureElement = document.getElementById('temperature');
//     const descriptionElement = document.getElementById('description');
//     const weatherIcon = document.getElementById('weatherIcon');

//     const cityName = data.name;
//     const temperature = data.main.temp;
//     const weatherDescription = data.weather[0].description;
//     const weatherCode = data.weather[0].icon; // Weather icon code (e.g., "01d")

//     locationElement.textContent = `Location: ${cityName}`;
//     temperatureElement.textContent = `Temperature: ${temperature}°C`;
//     descriptionElement.textContent = `Description: ${weatherDescription}`;

//     // Update the icon based on the weather code
//     weatherIcon.className = `fa ${getWeatherIconClass(weatherCode)}`;
// }

// function getWeatherIconClass(iconCode) {
//     const weatherIcons = {
//         '01d': 'fa-sun', // Clear sky (day)
//         '01n': 'fa-moon', // Clear sky (night)
//         '02d': 'fa-cloud-sun', // Few clouds (day)
//         '02n': 'fa-cloud-moon', // Few clouds (night)
//         '03d': 'fa-cloud', // Scattered clouds
//         '03n': 'fa-cloud', // Scattered clouds
//         '04d': 'fa-cloud-meatball', // Broken clouds
//         '04n': 'fa-cloud-meatball', // Broken clouds
//         '09d': 'fa-cloud-showers-heavy', // Shower rain
//         '09n': 'fa-cloud-showers-heavy', // Shower rain
//         '10d': 'fa-cloud-sun-rain', // Rain (day)
//         '10n': 'fa-cloud-moon-rain', // Rain (night)
//         '11d': 'fa-poo-storm', // Thunderstorm
//         '11n': 'fa-poo-storm', // Thunderstorm
//         '13d': 'fa-snowflake', // Snow
//         '13n': 'fa-snowflake', // Snow
//         '50d': 'fa-smog', // Mist
//         '50n': 'fa-smog' // Mist
//     };

//     return weatherIcons[iconCode] || 'fa-question'; // Default icon if not found
// }

// function updateWeatherForecast(data) {
//     const forecastContainer = document.getElementById('forecast');
//     forecastContainer.innerHTML = ''; // Clear previous forecast data

//     // Forecast data is provided every 3 hours. Group by day.
//     const days = {};

//     data.list.forEach(item => {
//         const date = new Date(item.dt * 1000);
//         const day = date.toLocaleDateString(); // e.g., '8/5/2024'

//         if (!days[day]) {
//             days[day] = [];
//         }

//         days[day].push({
//             temp: item.main.temp,
//             description: item.weather[0].description,
//             icon: item.weather[0].icon // Weather icon code
//         });
//     });

//     Object.keys(days).forEach(day => {
//         const dayData = days[day][0]; // Take the first entry of the day
//         const forecastItem = document.createElement('div');
//         forecastItem.className = 'forecast-item';

//         forecastItem.innerHTML = `
//             <h3>${day}</h3>
//             <i class="fa ${getWeatherIconClass(dayData.icon)}"></i>
//             <p>Temperature: ${dayData.temp}°C</p>
//             <p>Description: ${dayData.description}</p>
//         `;

//         forecastContainer.appendChild(forecastItem);
//     });

//     // Show the forecast section
//     forecastContainer.style.display = 'block';
// }

// Task_10 - Add CSS animations or transitions to make the weather app more interactive and visually appearing. 

document.getElementById('searchButton').addEventListener('click', handleSearch);
document.getElementById('city').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

async function handleSearch() {
    const city = document.getElementById('city').value;
    if (city) {
        const apiKey = await fetchApiKey();
        fetchWeatherData(city, apiKey);
    } else {
        alert('Please enter a city name.');
    }
}

async function fetchApiKey() {
    const response = await fetch('/api/key');
    const data = await response.json();
    return data.apiKey;
}

async function fetchWeatherData(city, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        updateWeatherInfo(data);

        // Show weather info and hide forecast initially
        document.querySelector('.weather-info').classList.add('show');
        document.querySelector('.forecast').classList.remove('show');

        // Fetch and display forecast
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();
        updateWeatherForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherInfo(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    locationElement.textContent = `Location: ${cityName}`;
    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    descriptionElement.textContent = `Description: ${weatherDescription}`;
}

function updateWeatherForecast(data) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = ''; // Clear previous forecast data

    const days = {}; // To hold the aggregated forecast data

    // Iterate over the forecast data and aggregate by day
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString(); // e.g., '8/5/2024'
        if (!days[date]) {
            days[date] = {
                temp: 0,
                count: 0,
                description: item.weather[0].description,
                icon: item.weather[0].icon
            };
        }
        days[date].temp += item.main.temp;
        days[date].count += 1;
    });

    // Create and append forecast elements
    for (const [date, data] of Object.entries(days)) {
        const avgTemp = (data.temp / data.count).toFixed(1);
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';

        forecastItem.innerHTML = `
            <h3>${date}</h3>
            <i class="fa ${getWeatherIconClass(data.icon)}"></i>
            <p>Temperature: ${avgTemp}°C</p>
            <p>Description: ${data.description}</p>
        `;

        forecastContainer.appendChild(forecastItem);
    }

    // Add class to show forecast with transition
    forecastContainer.classList.add('show');
}

function getWeatherIconClass(iconCode) {
    const iconMap = {
        '01d': 'fa-sun',
        '01n': 'fa-moon',
        '02d': 'fa-cloud-sun',
        '02n': 'fa-cloud-moon',
        '03d': 'fa-cloud',
        '03n': 'fa-cloud',
        '04d': 'fa-cloud-meatball',
        '04n': 'fa-cloud-meatball',
        '09d': 'fa-cloud-showers-heavy',
        '09n': 'fa-cloud-showers-heavy',
        '10d': 'fa-cloud-sun-rain',
        '10n': 'fa-cloud-moon-rain',
        '11d': 'fa-bolt',
        '11n': 'fa-bolt',
        '13d': 'fa-snowflake',
        '13n': 'fa-snowflake',
        '50d': 'fa-smog',
        '50n': 'fa-smog'
    };
    return iconMap[iconCode] || 'fa-question';
}