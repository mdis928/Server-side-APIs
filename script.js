$(document).ready(function () {

var temperature = 0;
var date = "";
var humidity = 0;
var wind = 0;
var UV = 0;
var cities = ["Philadelphia", "New York", "Austin", "Chicago", "Orlando", "Seattle", "Denver"];
var apikey = "a1b741a4db22b397c16b70d7a9b62d4e";
var latCurrent = 0;
var lonCurrent = 0;
var locationCurrent = "everywhere"
var date = 0;
var temp5day = [];
var date5day = [];
var humidity5day = [];
var icon5day = [];







// Three ajax calls for the weather, UV index, and the five day forcast
function cityWeatherInfo (city) {
    var weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + locationCurrent + "&APPID=" + apikey;
        $.ajax({
            url:currentUrl,
            method:"GET",
        })
        .then (function(response){
            temperature = ((response.main.temp)-273.15) * 9/5 + 32;
            temperature = temperature.tofixed(2);
            humidity = response.main.humidity;
            wind = response.wind.speed;
            latCurrent = response.coord.lat;
            lonCurrent = response.coord.lon;

    var weatherApiUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + latCurrent + "&lon=" + lonCurrent;
        $.ajax({
           url: weatherApiUrl,
           method: "GET",
        })
        .then(function(response) {
        UV=response.value;
        date = response.date_iso;
        var split = date.split("T");
        date = split[0];
        $("#tempCurrent").text("temperature: " + temperature + " F");
        $("#locationCurrent").text(locationCurrent + "(" + date + ")");
        $("#humidCurrent").text("Humidity: " + humidity + " %");
        $("#windCurrent").text("Wind Speed: " + wind + " MPH");
        $("#UVCurrent").text("UV Index: " + UV);
        })

    var weatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=" + apiKey + "&q=" + locationCurrent;
        $ajax({
            url: weatherApiUrl,
            method: "Get",
        })
    }).then(function (response){
        console.log(response);
        for ( var i =0; i < 5; i++){
            temp5day[i] = (((response.list[4+(i*8)].main.temp)-273.15)*9/5 + 32).toFixed(2);
            console.log(temp5day);
            var dateTemp= response.list[4+(i*8)].dt_txt;
            dateTemp = dateTemp.split(" ");
            date5day[i] = dateTemp[0];
            console.log(date5day);
            humidity5day[i]= response.list[4+(i*8)].main.humidity;                
            console.log(humidity5day);
            icon5day[i]= response.list[4+(i*8)].weather.icon;
            $("#date1").text("Date: " + date5day[0] + " ");
            $("#temp1").text("Temperature: " + temp5day + " F");
            $("#humid1").text("Humidity: " + humidity5day + " %");
            $("#icon1").text("Current weather: " + icon5day + " ");
            // $(this).append(date5day[0]);
            $("#date2").text("Date: " + date5day[8] + " ");
            $("#temp2").text("Temperature: " + temp5day[8] + " F");
            $("#humid2").text("Humidity: " + humidity5day[8] + " %");
            $("#icon2").text("Current weather: " + icon5day + " ");
            // $(this).append(date5day[8]);
            $("#date3").text("Date: " + date5day[16] + " ");
            $("#temp3").text("Temperature: " + temp5day + " F");
            $("#humid3").text("Humidity: " + humidity5day + " %");
            $("#icon3").text("Current weather: " + icon5day + " ");
            // $(this).append(date5day[16]);
            $("#date4").text("Date: " + date5day[24] + " ");
            $("#temp4").text("Temperature: " + temp5day + " F");
            $("#humid4").text("Humidity: " + humidity5day + " %");
            $("#icon4").text("Current weather: " + icon5day + " ");
            // $(this).append(date5day[24]);
            $("date5").text("Date: " + date5day[32] + " ");
            $("#temp5").text("Temperature: " + temp5day + " F");
            $("#humid5").text("Humidity: " + humidity5day + " %");
            $("#icon5").text("Current weather: " + icon5day + " ");
            $(this).append(date5day[32]);
        }
    })
}


function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < cities.length; i++) {

        var a = $("<button>");
        a.addClass("city");
        a.attr("data-name", cities[i]);
        a.text(cities[i]);
        $("#buttons-view").append(a);
    }
}

function pop5day(){
    for (var i = 0; i < temp5day.length, i++;){
        var colWrap = $("<div>").attr({"class": "col-md-2"});
        var card = $("<div>").attr ({"class": "card", "style":"width: 18rem,"});
        var cardBody = $("<div>").attr({"class":"card-body"});
        
    }
}

$("#add-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val();
    cities.push(city);
    console.log(cities);
    var recordNumber = $("#recordNumber").val();

    renderButtons();
    displayCityInfo();
    pop5day();
});

$("#buttons-view").on("click", "button", function (){
    locationCurrent = $(this).attr("data-name");
    console.log(locationCurrent);
    displayCityInfo();
})
renderButtons();
})















// var temp = $("<p>").addClass(card-text).text("Temperature " + response.data.main + " Fahrenheit")
// $("#test").append(temp)




// var fivedayUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=a1b741a4db22b397c16b70d7a9b62d4e&units=imperial";
// var totalUrl = "http://api.openweathermap.org/data/2.5/onecall?lat=39.73915&lon=-104.9847&exclude=hourly&appid=80ac2ea85a9a3b2d9a80136b971a9572&units=imperial";




// function allInfo () {
//     $.ajax({
//         url:totalUrl,
//         method:"GET",
//     })
    
//     .then (function(response){
//         console.log (response)
// // insert code here
//     })
// }
// allInfo ()




// function fivedayInfo () {
//     $.ajax({
//         url:currentUrl,
//         method:"GET",
//     })
    
//     .then (function(response){
//         console.log (response)
//     })
// }
// fivedayInfo ()