//main,js is the final

// Foursquare API Info
const clientId = 'RQ0EXGUZDB4EVMXWBT02IPAYHM5CXXS33ESQMNDH3SRRARME';
const clientSecret = 'GXTO2SVGPO3MMFEV0ZQFLET0HJ33TRZ5T4EB1BU1EB0ACUSJ';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '1d2bf4ccc473c4fafed06f2a893c25ea';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = url + city + "&limit=10&client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20200702";
    console.log(urlToFetch);
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            console.log(venues);
            return venues
        }
    } catch (error) {
        console.log(error);
    }
}

const getForecast = async () => {
    const urlToFetch = weatherUrl + "?&q=" + $input.val() + "&APPID=" + openWeatherKey;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        // Add your code here:
        const venue = venues[index];
        const venueIcon = venue.categories[0].icon;
        const venueImgSrc = venueIcon.prefix + "bg_64" + venueIcon.suffix;
        let venueContent = `
            <h2>${venue.name}</h2>
                <img class="venueimage" src="${venueImgSrc}" />
                <h3>Address:</h3>
                <p>${venue.location.address}</p>
                <p>${venue.location.city}</p>
                <p>${venue.location.country}</p>`;
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    // Add your code here:
    let weatherContent = `
        <h2> High: ${day.main.temp_max}</h2>
            <h2> Low: ${day.main.temp_min}</h2>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="weathericon" />
            <h2>${weekDays[new Date().getDay()]}</h2>`;
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues()
        .then(fulfilled => { renderVenues(fulfilled) })
        .catch(reject => { console.log(reject) });
    getForecast()
        .then(fulfilled => { renderForecast(fulfilled) })
        .catch(reject => { console.log(reject) });
    return false;
}

$submit.click(executeSearch)