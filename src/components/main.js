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
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=montreal&appid=bfc7b55aa961b52c6fe4ce1e50d0cfcf')
        .then(res=> (this.setState({wxrList: res.data})))
    }

    render() {
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
