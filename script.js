$(document).ready(function () {

var temeperature = 0;
var date = "";
var humidity = 0;
var wind = 0;
var UV = 0;
var cities = ["Philadelphia", "New York", "Austin", "Chicago", "Orlando", "Seattle", "Denver"];
var apikey = "a1b741a4db22b397c16b70d7a9b62d4e";
var latcurrent = 0;
var loncurrent = 0;
var locationCurrent = "everywhere"
var date = 0;
var temp5day = [];
var date5day = [];
var humidity5day = [];
var icon5day = [];


var currentUrl = "http://api.openweathermap.org/data/2.5/weather?q=Austin&appid=a1b741a4db22b397c16b70d7a9b62d4e&units=imperial";
var fivedayUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=a1b741a4db22b397c16b70d7a9b62d4e&units=imperial";
var totalUrl = "http://api.openweathermap.org/data/2.5/onecall?lat=39.73915&lon=-104.9847&exclude=hourly&appid=80ac2ea85a9a3b2d9a80136b971a9572&units=imperial";



// Three ajax calls for the weather, UV index, and the five day forcast
function cityWeatherInfo {
    
}





function allInfo () {
    $.ajax({
        url:totalUrl,
        method:"GET",
    })
    
    .then (function(response){
        console.log (response)
// insert code here
    })
}
allInfo ()


function currentInfo () {
    $.ajax({
        url:currentUrl,
        method:"GET",
    })
    
    .then (function(response){
        console.log (response)
    })
}
currentInfo ()


function fivedayInfo () {
    $.ajax({
        url:currentUrl,
        method:"GET",
    })
    
    .then (function(response){
        console.log (response)
    })
}
fivedayInfo ()



}


// var temp = $("<p>").addClass(card-text).text("Temperature " + response.data.main + " Fahrenheit")
// $("#test").append(temp)