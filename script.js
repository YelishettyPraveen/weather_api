

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
 let fetchData=async ()=>{
     let key="70a14e63f932db1495be7fe95997e074";
    let place=document.getElementById("place").value
    let Data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
    let finalOutput=await  Data.json();
    let tempChange=document.getElementById("t")
    let humidChange=document.getElementById("h")
    let weather=document.querySelector("h3")
    let image=document.getElementById("image")
    let weathermain =(finalOutput.weather[0].main).toLowerCase();
    let tempValue=Math.round(finalOutput.main.temp-273)
    let humidValue=Math.round(finalOutput.main.humidity)
    tempChange.innerHTML=`${tempValue}<sup>o</sup>C`
    humidChange.innerHTML=`${humidValue}KMPH`
    weather.innerHTML=`${weathermain}`
    weather.style=`background-color:white;`
    // weather.innerHTML=`<h3 style="background-color: white;">${weathermain}</h3>`
    switch(weathermain){
        case "rain": image.src="./assets/rain.gif";
            break;
         case "haze": image.src="./assets/haze.gif";
            break;
        case "clouds":image.src="assets/cloud.gif";
            break;
        case "mist":image.src="./assets/mist.gif";
            break;
        case "dust":image.src="./assets/favicon.png";
            break;
        default:image.src="./assets/trial5.webp";
            break;
    }
 }
 fetchData();
})

    
    