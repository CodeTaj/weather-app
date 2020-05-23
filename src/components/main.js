import React, { Component } from 'react'
import WeatherCards from './pages/WeatherCards'
import Header from './layout/Header'
import axios from 'axios'

export class main extends Component {
    state = {
        wxrList: [],
        dummyWxrList: [{weather:'10'}, {weather:'11'}, {weather:'12'}]
    }

    componentDidMount(){
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=45.5017&lon=-73.5673&appid=f6bb4c1b529c94855b6e63272c09a188&units=metric')
        .then(res=> (this.setState({wxrList: res.data.daily})))
    }

    render() {
        console.log('FROM MAIN')
        console.log(this.props.wxrList)
        return (
            <div>
                <Header/>
                <div>
                    <WeatherCards wrxFC = {this.state.wxrList}/>
                </div>
            </div>
        )
    }
}

export default main
