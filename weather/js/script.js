$(document).ready(function(){
    var lat;
    var lng;
    var tempCurrently;
    var minTempTomorow;
    var maxTempTomorow;
    var minTemp2DayAfter;
    var maxTemp2DayAfter;
    var minTemp3DayAfter;
    var maxTemp3DayAfter;
    var summary;
    var iconToday;
    var iconTomorrow;
    var icon2DayAfter;
    var icon3DayAfter 
    var value=1;
    var title1;
    var title2;
    var title3;
    var icons
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position){
            lat = position.coords.latitude;
            lng = position.coords.longitude;
           $("#data").html("latitude: "+ lat +"<br>longtitude: "+ lng);

           var url ="https://api.darksky.net/forecast/032c149caf283c9ab234de226ea954a2/" + lat + "," + lng + "?callback=?&units=si";

              $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&APPID=3edd02e6040799429c7f443bd7b0f39a", function(forecast) {
                console.log(forecast);
                var location =  forecast.name;  
                $("#location").html(location);
              });
           $.getJSON(url, function(data) {
                      console.log(data);

                      
            tempCurrently=data.currently.temperature;
            summary = data.currently.summary;
            iconToday = data.currently.icon;
            iconTomorrow = data.daily.data[0].icon;
            icon2DayAfter = data.daily.data[1].icon;
            icon3DayAfter = data.daily.data[2].icon;
             minTempTomorow = data.daily.data[0].temperatureMin;
             maxTempTomorow = data.daily.data[0].temperatureMax;
             minTemp2DayAfter = data.daily.data[1].temperatureMin;
             maxTemp2DayAfter = data.daily.data[1].temperatureMax;
             minTemp3DayAfter = data.daily.data[2].temperatureMin;
             maxTemp3DayAfter = data.daily.data[2].temperatureMax;
             title1 = data.daily.data[0].summary;
             title2 = data.daily.data[1].summary;
             title3 = data.daily.data[2].summary;
              showWeather();
              changeBackground(data);
              getNgay();
          });  
        });

    }else {
      alert("We couldn` retrieve your location, please check your location settings");
    };
    // Doi do C <-> do F//
    $(".slider").on("click", function() {
      value = -value;
      if(value<0){
        tempCurrently = (9/5*tempCurrently+32).toFixed(2);
        minTempTomorow = (9/5*minTempTomorow+32).toFixed(2);
        maxTempTomorow =(9/5*maxTempTomorow+32).toFixed(2);
        minTemp2DayAfter = (9/5*minTemp2DayAfter+32).toFixed(2);
        maxTemp2DayAfter = (9/5*maxTemp2DayAfter+32).toFixed(2);
        minTemp3DayAfter = (9/5*minTemp3DayAfter+32).toFixed(2);
        maxTemp3DayAfter = (9/5*maxTemp3DayAfter+32).toFixed(2);
        showWeather();
        //  $("#temp-currently").html(tempCurrently+ "&deg;");
      }else{
        tempCurrently = (5/9*(tempCurrently-32)).toFixed(2);
        minTempTomorow = (5/9*(minTempTomorow-32)).toFixed(2);
        maxTempTomorow = (5/9*(maxTempTomorow-32)).toFixed(2);
        minTemp2DayAfter = (5/9*(minTemp2DayAfter-32)).toFixed(2);
        maxTemp2DayAfter = (5/9*(maxTemp2DayAfter-32)).toFixed(2);
        minTemp3DayAfter = (5/9*(minTemp3DayAfter-32)).toFixed(2);
        maxTemp3DayAfter = (5/9*(maxTemp3DayAfter-32)).toFixed(2);
        
        showWeather();
      }
      
  });
  function showWeather(){
    $("#temp-currently").html(tempCurrently+ "&deg;");
    $("#temp-tomorrow").html(minTempTomorow+"&deg;|"+maxTempTomorow+"&deg;");
    $("#temp-2-day-after").html(minTemp2DayAfter+"&deg;|"+maxTemp2DayAfter+"&deg;");
    $("#temp-3-day-after").html(minTemp3DayAfter+"&deg;|"+maxTemp3DayAfter+"&deg;");
    // $("#icon").html("<i class=\"wi wi-forecast-io-" + iconToday +"\">");
    icons = new Skycons({"color": "orange"});
    icons.set("icon",iconToday);
    icons.set("tomorrow-icon", iconTomorrow);
    icons.set("2-day-after", icon2DayAfter);
    icons.set("3-day-after", icon3DayAfter);
    icons.play();

    $("#tomorrow-icon").html("<i title=\""+title1+"\" class=\"wi wi-forecast-io-" + iconTomorrow+"\">");
    $("#2-day-after").html("<i title=\""+title2+"\" class=\"wi wi-forecast-io-" + icon2DayAfter+"\">");
    $("#3-day-after").html("<i title=\""+title3+"\" class=\"wi wi-forecast-io-" + icon3DayAfter+"\">");
    $("#summary").html(summary);
}
});




function changeBackground(data) {
  if (data.currently.icon == "clear-day") {
      $("body").css("background-image", 'url("img/clear-day.png")');
  } else if (data.currently.icon == "partly-cloudy-day") {
      $("body").css("background-image", 'url("img/partly-cloudy-day.jpeg")');
  } else if (data.currently.icon == "clear-night") {
      $("body").css("background-image", 'url("img/clear-night.jpg")');
  }  else if (data.currently.icon == "rain") {
    $("body").css("background-image", 'url("img/rain.jpg")');
  } else if (data.currently.icon == "snow") {
    $("body").css("background-image", 'url("img/snow.jpg")');
  }else if (data.currently.icon == "sleet") {
    $("body").css("background-image", 'url("img/sleet.jpg")');
  }else if (data.currently.icon == "wind") {
    $("body").css("background-image", 'url("img/wind.jpg")');
  }
  else if (data.currently.icon == "fog") {
    $("body").css("background-image", 'url("img/fog.jpg")');
  }else if (data.currently.icon == "cloudy") {
    $("body").css("background-image", 'url("img/cloudy.png")');
  }else if (data.currently.icon == "partly-cloudy-night") {
    $("body").css("background-image", 'url("img/partly-cloudy-night.jpg")');
  }else {
    $("body").css("background-image",'url("img/gray.jpg")' );
  }
}


function getNgay(){
  var months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  var days = ["Sun","Mon","Tue","Wes","Thu","Fri","Sat"];
 
  var today = new Date();
  var day =today.getDay();
  var dd = today.getDate();
  var mm = today.getMonth(); //January is 0!
  var yyyy = today.getFullYear();
  
  var tomor = day +1;
   var day2 = day+2;
   var day3 = day+3;
  if(tomor>=7){
    tomor = tomor  -7;
    console.log(tomor);
  }
  if(day2>=7){
    day2 = day2 -7;
    console.log(tomor);
  }
  if(day3>=7){
    day3 = day3 - 7;
    console.log(tomor);
  }
  if (dd < 10) {
    dd = '0' + dd
  }

  today = dd + ', ' + months[mm] + ', ' + yyyy;
  $(".date").html(today);
  $("#tomorrow-day").html(days[tomor]);
  $("#2-day-after-day").html(days[day2]);
  $("#3-day-after-day").html(days[day3]);
}
