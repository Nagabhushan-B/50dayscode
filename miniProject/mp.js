async function weth(city) {
    const apikey="d449c67dff53937090494a6565e2b564";
 try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        const data =await res.json();
        console.log(data);
        document.getElementById("temp").textContent=`Temperature:${Math.round(data.main.temp-273.15)}°C`;
        document.getElementById("hum").textContent=`Humidity:${data.main.humidity}%`;
        document.getElementById("wind").textContent=`Wind Speed:${Math.round(data.wind.speed)}km/hr`;
}
 catch{
    console.log("error");
 }
}
document.getElementById('btn').addEventListener('click', function() {
    const inp = document.getElementById('inp').value;
    weth(inp);
});