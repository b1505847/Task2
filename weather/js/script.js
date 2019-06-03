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
    var icon3DayAfter ;
    var tempCurrently2;
    var minTempTomorow2;
    var maxTempTomorow2;
    var minTemp2DayAfter2;
    var maxTemp2DayAfter2;
    var minTemp3DayAfter2;
    var maxTemp3DayAfter2;
    var summary2;
    var iconToday2;
    var iconTomorrow2;
    var icon2DayAfter2;
    var icon3DayAfter2; 
    var value=1;
    var title1;
    var title2;
    var title3;
    // var icon1;
    var icons;
    var humid;
    var wind;
    var icon2;
    var humid2;
    var wind2;
    var i = 1;
    
    var otherLocation;
    document.getElementById("defaultOpen").click();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position){
            lat = position.coords.latitude;
            lng = position.coords.longitude;
          //  $("#data").html("latitude: "+ lat +"<br>longtitude: "+ lng);

           var url ="https://api.darksky.net/forecast/032c149caf283c9ab234de226ea954a2/" + lat + "," + lng + "?callback=?&units=ca";

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
             humid = (data.currently.humidity*100).toFixed(2);
             wind = data.currently.windSpeed;
             icon = data.currently.icon;
            //  title1 = data.daily.data[0].summary;
            //  title2 = data.daily.data[1].summary;
            //  title3 = data.daily.data[2].summary;
              showWeather("");
              changeBackground(icon);
              getNgay();
          });  
        });

    }else {
      alert("We couldn` retrieve your location, please check your location settings");
    };

    $("#phat").on("click", function(){
      changeBackground(icon2); 
      

    });

    $("#defaultOpen").on("click", function(){
      changeBackground(icon); 
      
        

    });
    

    // Doi do C <-> do F//
    $(".slider").on("click", function() {
      value = -value;
      if(value<0){
        tempCurrently = changeTempCtoF(tempCurrently) ;
        minTempTomorow = changeTempCtoF(minTempTomorow) ;
        maxTempTomorow = changeTempCtoF(maxTempTomorow) ;
        minTemp2DayAfter = changeTempCtoF(minTemp2DayAfter) ;
        maxTemp2DayAfter = changeTempCtoF(maxTemp2DayAfter) ;
        minTemp3DayAfter = changeTempCtoF(minTemp3DayAfter) ;
        maxTemp3DayAfter = changeTempCtoF(maxTemp3DayAfter) ;
        tempCurrently2 = changeTempCtoF(tempCurrently2) ;
        minTempTomorow2 = changeTempCtoF(minTempTomorow2) ;
        maxTempTomorow2 = changeTempCtoF(maxTempTomorow2) ;
        minTemp2DayAfter2 = changeTempCtoF(minTemp2DayAfter2) ;
        maxTemp2DayAfter2 = changeTempCtoF(maxTemp2DayAfter2) ;
        minTemp3DayAfter2 = changeTempCtoF(minTemp3DayAfter2) ;
        maxTemp3DayAfter2 = changeTempCtoF(maxTemp3DayAfter2) ;
        // tempCurrently = (9/5*tempCurrently+32).toFixed(2);
        
        // minTempTomorow = (9/5*minTempTomorow+32).toFixed(2);
        // maxTempTomorow =(9/5*maxTempTomorow+32).toFixed(2);
        // minTemp2DayAfter = (9/5*minTemp2DayAfter+32).toFixed(2);
        // maxTemp2DayAfter = (9/5*maxTemp2DayAfter+32).toFixed(2);
        // minTemp3DayAfter = (9/5*minTemp3DayAfter+32).toFixed(2);
        // maxTemp3DayAfter = (9/5*maxTemp3DayAfter+32).toFixed(2);
        showWeather();
        // showWeather("2");
        //  $("#temp-currently").html(tempCurrently+ "&deg;");
      }else{
        tempCurrently = changeTempFtoC(tempCurrently) ;
        minTempTomorow = changeTempFtoC(minTempTomorow) ;
        maxTempTomorow = changeTempFtoC(maxTempTomorow) ;
        minTemp2DayAfter = changeTempFtoC(minTemp2DayAfter) ;
        maxTemp2DayAfter = changeTempFtoC(maxTemp2DayAfter) ;
        minTemp3DayAfter = changeTempFtoC(minTemp3DayAfter) ;
        maxTemp3DayAfter = changeTempFtoC(maxTemp3DayAfter) ;
        tempCurrently2 = changeTempFtoC(tempCurrently2) ;
        minTempTomorow2 = changeTempFtoC(minTempTomorow2) ;
        maxTempTomorow2 = changeTempFtoC(maxTempTomorow2) ;
        minTemp2DayAfter2 = changeTempFtoC(minTemp2DayAfter2) ;
        maxTemp2DayAfter2 = changeTempFtoC(maxTemp2DayAfter2) ;
        minTemp3DayAfter2 = changeTempFtoC(minTemp3DayAfter2) ;
        maxTemp3DayAfter2 = changeTempFtoC(maxTemp3DayAfter2) ;
        // minTempTomorow = (5/9*(minTempTomorow-32)).toFixed(2);
        // maxTempTomorow = (5/9*(maxTempTomorow-32)).toFixed(2);
        // minTemp2DayAfter = (5/9*(minTemp2DayAfter-32)).toFixed(2);
        // maxTemp2DayAfter = (5/9*(maxTemp2DayAfter-32)).toFixed(2);
        // minTemp3DayAfter = (5/9*(minTemp3DayAfter-32)).toFixed(2);
        // maxTemp3DayAfter = (5/9*(maxTemp3DayAfter-32)).toFixed(2);
        
        showWeather();
        // showWeather("2");
      }
      
  });
  function showWeather(){
    $("#temp-currently" ).html("Temperature: "+tempCurrently+ "&deg;");
    $("#temp-tomorrow" ).html(minTempTomorow+"&deg;|"+maxTempTomorow+"&deg;");
    $("#temp-2-day-after" ).html(minTemp2DayAfter+"&deg;|"+maxTemp2DayAfter+"&deg;");
    $("#temp-3-day-after" ).html(minTemp3DayAfter+"&deg;|"+maxTemp3DayAfter+"&deg;");
    $("#humid" ).html("Humidity: "+humid+ "%");
    $("#wind" ).html("Wind speed: "+wind+ " km/h");
    // $("#icon").html("<i class=\"wi wi-forecast-io-" + iconToday +"\">");
    icons = new Skycons({"color": "orange"});
    icons.set("icon" ,iconToday);
    icons.set("tomorrow-icon" , iconTomorrow);
    icons.set("2-day-after" , icon2DayAfter);
    icons.set("3-day-after" , icon3DayAfter);
    icons.play();

    // $("#tomorrow-icon").html("<i title=\""+title1+"\" class=\"wi wi-forecast-io-" + iconTomorrow+"\">");
    // $("#2-day-after").html("<i title=\""+title2+"\" class=\"wi wi-forecast-io-" + icon2DayAfter+"\">");
    // $("#3-day-after").html("<i title=\""+title3+"\" class=\"wi wi-forecast-io-" + icon3DayAfter+"\">");
    $("#summary").html(summary);

    $("#temp-currently2" ).html("Temperature: "+tempCurrently2+ "&deg;");
    $("#temp-tomorrow2" ).html(minTempTomorow2+"&deg;|"+maxTempTomorow2+"&deg;");
    $("#temp-2-day-after2" ).html(minTemp2DayAfter2+"&deg;|"+maxTemp2DayAfter2+"&deg;");
    $("#temp-3-day-after2" ).html(minTemp3DayAfter2+"&deg;|"+maxTemp3DayAfter2+"&deg;");
    $("#humid2" ).html("Humidity: "+humid2+ "%");
    $("#wind2" ).html("Wind speed: "+wind2+ " km/h");
    // $("#icon").html("<i class=\"wi wi-forecast-io-" + iconToday +"\">");
    // icons = new Skycons({"color": "orange"});
    icons.set("icon2" ,iconToday2);
    icons.set("tomorrow-icon2" , iconTomorrow2);
    icons.set("2-day-after2" , icon2DayAfter2);
    icons.set("3-day-after2" , icon3DayAfter2);
    icons.play();

    // $("#tomorrow-icon").html("<i title=\""+title1+"\" class=\"wi wi-forecast-io-" + iconTomorrow+"\">");
    // $("#2-day-after").html("<i title=\""+title2+"\" class=\"wi wi-forecast-io-" + icon2DayAfter+"\">");
    // $("#3-day-after").html("<i title=\""+title3+"\" class=\"wi wi-forecast-io-" + icon3DayAfter+"\">");
    $("#summary2" ).html(summary2);
}

$("#search").on("click", function getLocation(){
  var otherLocation = $("#txt").val();
  var lat;
  var lng;
  console.log(otherLocation);
  $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+otherLocation+"&APPID=3edd02e6040799429c7f443bd7b0f39a", function(forecast) {
    console.log(forecast);
    lat = forecast.city.coord.lat;
    lng = forecast.city.coord.lon;
    var location =  forecast.city.name +", "+ forecast.city.country;  
    $("#location2").html(location);
    var url ="https://api.darksky.net/forecast/032c149caf283c9ab234de226ea954a2/" + lat + "," + lng + "?callback=?&units=ca";
  $.getJSON(url, function(data) {
    console.log(data);
      tempCurrently2=data.currently.temperature;
      summary2 = data.currently.summary;
      iconToday2 = data.currently.icon;
      iconTomorrow2 = data.daily.data[0].icon;
      icon2DayAfter2 = data.daily.data[1].icon;
      icon3DayAfter2 = data.daily.data[2].icon;
        minTempTomorow2 = data.daily.data[0].temperatureMin;
        maxTempTomorow2 = data.daily.data[0].temperatureMax;
        minTemp2DayAfter2 = data.daily.data[1].temperatureMin;
        maxTemp2DayAfter2 = data.daily.data[1].temperatureMax;
        minTemp3DayAfter2 = data.daily.data[2].temperatureMin;
        maxTemp3DayAfter2 = data.daily.data[2].temperatureMax;
        humid2 = (data.currently.humidity*100).toFixed(2);
        wind2 = data.currently.windSpeed;
        icon2 =data.currently.icon;
        showWeather();
    changeBackground(icon2);
    });
  });
  
});

});

function changeTempCtoF(temp){
  temp = (9/5*temp+32).toFixed(2);
  return temp;
}

function changeTempFtoC(temp){
  temp = (5/9*(temp-32)).toFixed(2);
  return temp;
}


function changeBackground(icon) {
  if (icon == "clear-day") {
      $("body").css("background-image", 'url("img/clear-day.png")');
  }else if (icon == "partly-cloudy-day") {
      $("body").css("background-image", 'url("img/partly-cloudy-day.gif")');
  }else if (icon == "clear-night") {
      $("body").css("background-image", 'url("img/clear-night.jpg")');
  }else if (icon == "rain") {
    $("body").css("background-image", 'url("img/rain.jpg")');
  }else if (icon == "snow") {
    $("body").css("background-image", 'url("img/snow.jpg")');
  }else if (icon == "sleet") {
    $("body").css("background-image", 'url("img/sleet.jpg")');
  }else if (icon == "wind") {
    $("body").css("background-image", 'url("img/wind.jpg")');
  }else if (icon == "fog") {
    $("body").css("background-image", 'url("img/fog.jpg")');
  }else if (icon == "cloudy") {
    $("body").css("background-image", 'url("img/cloudy.png")');
  }else if (icon == "partly-cloudy-night") {
    $("body").css("background-image", 'url("img/partly-cloudy-night.jpg")');
  }else {
    $("body").css("background-image",'url("img/gray.jpg")' );
  }
}


function openTab(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  // if(i==1){
  //   changeBackground(icon);
  // }else{
  //   // changeBackground(icon2);
  // }
  getNgay();
  
  // document.getElementById("defaultOpen").click();
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
    
  }
  if(day2>=7){
    day2 = day2 -7;
    
  }
  if(day3>=7){
    day3 = day3 - 7;
    
  }
  if (dd < 10) {
    dd = '0' + dd
  }

  today = dd + ', ' + months[mm] + ', ' + yyyy;
  $(".date").html(today);
  $(".tomorrow-day").html(days[tomor]);
  $(".2-day-after-day").html(days[day2]);
  $(".3-day-after-day").html(days[day3]);
}
