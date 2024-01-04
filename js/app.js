// Do not Show API key on your JS file

const API_KEY=`d16d201e731f07f8d8d6057e68c6b233`;
const loadTemperature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTempearature(data));
}

const displayTempearature= data=>{
    // const temperature= document.getElementById('temperature');
    // temperature.innerText=data.main.temp;
    setInnerTextById('temperature',data.main.temp);
    setInnerTextById('weather_situation',data.weather[0].main);
    console.log(data.weather[0].main);

   

}


const setInnerTextById=(id,text)=>{
const temperature= document.getElementById(id);
temperature.innerText=text;
}
document.getElementById('btn_search').addEventListener('click',function(){
    const searchField= document.getElementById('input_field');
    const city= searchField.value ;
    document.getElementById('city').innerText= city;
    loadTemperature(city);
})

loadTemperature('Dhaka');