import React, { Component } from 'react';
import './css/Weather.css';
import WeatherIcon from 'react-icons-weather';
const callApi = async (url) => {

    let head = {
    }

    const response = await fetch(url, {
        method: "GET",
        headers: head,

    });
    const respbody = await response.json();


    if (response.status !== 200) throw Error(respbody.message);

    return respbody;
};
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            city: '',
            icon: "800"
        };
    }
    componentDidMount() {
        if (this.props.lat && this.props.lon) {
            callApi(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${this.props.appid}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "GET"
                })
                .then(res => {
                    this.setState({
                        temp: res.main.temp,
                        city: res.name,
                        icon: res.weather[0].id
                    })
                })
                .catch(res => { console.log(res) })
        }
        else if (this.props.city) {
            callApi(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${this.props.appid}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "GET"
                })
                .then(res => {
                    this.setState({                        
                        temp: res.main.temp,
                        city: res.name,
                        icon: res.weather[0].id
                    })
                })
                .catch(res => { console.log(res) })
        }

    }
    render() {
        return (
            <div {...this.props} className="simpleReactWeather">
                <div className="simpleReactWeather-city-icon"> 
                <WeatherIcon className="simpleReactWeather-icon" name="owm" iconId={String(this.state.icon)} flip="horizontal" rotate="90" />
                <p className="simpleReactWeather-city">{this.state.city}</p>
                </div>
                <p className="simpleReactWeather-temp">{this.props.unit == "F" ? Math.round(this.state.temp * (9/5) - 459.67) + "°F": Math.round(this.state.temp - 273.15) + "°C"}</p>
                
            </div>
        );
    }
}

export default Weather;