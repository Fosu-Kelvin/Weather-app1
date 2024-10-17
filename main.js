const apiKey = "3b6403132bbb9f8f16c8ceaa370a4d16";

const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) =>{
    try{
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        
            
        if(response.status == 404){
            document.querySelector(".error").style.display ="block";
            document.querySelector(".weather").style.display = "none";
            

        }else{
            const jsonUserData = await response.json();
            
           
           
            document.querySelector(".city").innerHTML = jsonUserData.name;
            document.querySelector(".temp").innerHTML = Math.round(jsonUserData.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = jsonUserData.main.humidity+ "%";
            document.querySelector(".wind").innerHTML = jsonUserData.wind.speed +" km/h";
    
            if(jsonUserData.weather[0].main == "Clouds"){
                weatherIcon.src="images/cloud-removebg-preview.png";
    
            }else if(jsonUserData.weather[0].main == "Clear"){
                weatherIcon.src="images/clear-removebg-preview.png";
    
            }else if(jsonUserData.weather[0].main == "Rain"){
                weatherIcon.src="images/rain-removebg-preview.png";
    
            }else if(jsonUserData.weather[0].main == "Drizzle"){
                weatherIcon.src="images/humidityicon-removebg-preview.png";
    
            }else if(jsonUserData.weather[0].main == "Mist"){
                weatherIcon.src="images/mist-removebg-preview.png";
            }
            else if(jsonUserData.weather[0].main == "Snow"){
                weatherIcon.src="images/snow-removebg-preview.png";
            }
            else if(jsonUserData.weather[0].main == "Wind"){
                weatherIcon.src="images/wind-removebg-preview.png";
            }
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display ="none";

        }
      
       


    }catch(err){
        console.warn(err)
    }
  

}
searchBtn.addEventListener("click",()=>{
const regex = / {2,}/g; 
const newText = searchBox.value.replaceAll(regex, " ");
    
    checkWeather(newText);
    
});

