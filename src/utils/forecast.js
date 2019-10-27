const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/51a0af2388b5090beff711ec70ea8ba0/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} High temprature is ${body.daily.data[0].temperatureHigh} degress and low ${body.daily.data[0].temperatureLow} degress. It is currently ${body.currently.temperature} degress out. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    })
}

module.exports = forecast