const apiKey="f56a2df206ebca9f312719c792a89a6a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=(Math.round(data.main.temp-273.15))+"°C";
    document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity)+"%";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+ "km/hr";
    if(data.weather[0].main == "Clouds"){
         weatherIcon.src="images/clouds.png";
         document.body.style.backgroundImage = "url('images/bg_clouds.jpg')";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
        document.body.style.backgroundImage = "url('images/bg_clear.webp')";
    }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
        document.body.style.backgroundImage = "url('images/bg_rain2.jpg')";
    }
     else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
        document.body.style.backgroundImage = "url('images/bg_cloud1.jpg')";
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
        document.body.style.backgroundImage = "url('images/bg_rain2.jpg')";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
});
