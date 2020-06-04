const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=d568b21f1ccc63098739ea4d41cf0e34&units=metric'
    request({url, json : true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.cod === '400'){
            callback('Unable to find location. Try another search.', undefined)
        }else{    
            data = body.weather[0].description + '. It is currently ' + body.main.temp + ' degrees out. Humidity : ' + body.main.humidity + ' %'
            callback(undefined, data)
        }
    })
}

module.exports = forecast