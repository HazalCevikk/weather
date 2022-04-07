import axios from 'axios';
import React , {useState} from 'react';
import './index.css';

function App() {

const [data ,setData] = useState({})
const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5ede90df58ee78feac442404cb20a3f9`


const searchLocation = (event) => {
  if(event.key=== 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data);
    })
  }
}





  return (
    <div className='App'>   
    <div className='container'>
     <div className='search'>
       <input type="text" placeholder='Enter Location' value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation}></input>
     </div>
     
       <div className='top'>
           <div className='location'>
             <p>{data.name}</p>
           </div>
           <div className='temp'>             
             {data.main ? <h1>{(( data.main.temp-32 ) / 1.8000).toFixed()}°C</h1> : null}
           </div>
           <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
           </div>
 
       </div>
 
 
      {data.name ?  <div className='bottom'>    
           <div className='feels'>
             {data.main ? <p className='bold'>{((data.main.feels_like -32 ) / 1.8000).toFixed()} °C</p> : null} 
             <p className='opacity'>Feels Like</p>
           </div>
           <div className='humadity'>
             {data.main ? <p className='bold'>{data.main.humidity.toFixed()} %</p> : null}
             <p className='opacity'>Humidity</p>
           </div>
           <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
             <p className='opacity'>Wind</p>
           </div>             
       </div> : null}
      
       </div> 
   
    </div>
  )
}

export default App