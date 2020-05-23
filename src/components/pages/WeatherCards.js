import React, { Component } from 'react'
import WeatherCard from './sub-components/WeatherCard'

export class WeatherCards extends Component {

    render() {
        console.log("this.props.wrxFC")
        console.log(this.props.wrxFC)
        return this.props.wrxFC.map((wxrDay, index) => (
                    <WeatherCard key={index} wxrDay={wxrDay}/>
                ))
    }
}

export default WeatherCards
