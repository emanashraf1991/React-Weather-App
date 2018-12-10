import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';


const API_KEY='45513e55e58b364b0bec2d0cc7cad3a4';

class App extends React.Component{

  state={
    temperture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

const city=e.target.elements.city.value;
const country=e.target.elements.country.value;

    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data=await api_call.json();
    if(city && country){
      this.setState({
        temperture: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        temperture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: "Please enter values!!!"
      })
    }

  }

  render(){
    return(
        <div>
          <Titles />
          <Form getWeather= {this.getWeather}/>
          <Weather 
          temperture= {this.state.temperture}
city= {this.state.city}
country= {this.state.country}
humidity= {this.state.humidity}
description= {this.state.description}
error={this.state.error}
          />
        </div>

      );
  }

}

export default App;