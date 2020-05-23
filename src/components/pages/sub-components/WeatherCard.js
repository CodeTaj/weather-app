import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'react-moment';


export class WeatherCard extends Component {


    weatherImage = (skies) => {
        if (skies==='Clouds'){
            return <img src={ require('C:/Users/Taj/Documents/GitHub/weather-app/src/images/clouds.png') } style={skieStyle} alt={skies}/>
        }
        if (skies==='Sunny' || skies==='Clear'){
            return <img src={ require('C:/Users/Taj/Documents/GitHub/weather-app/src/images/sunny.png') } style={skieStyle}  alt={skies}/>
        }
        if (skies==='Rain'){
            return <img src={ require('C:/Users/Taj/Documents/GitHub/weather-app/src/images/rain.png') } style={skieStyle} alt={skies}/>
        }
    }
    render() {
        
        console.log(this.props.wxrDay)
        const {wxrDay} = this.props
        return (
            <div style={{display: 'inline-block'}}>
                <Card style={cardStyle}>
                    <CardContent>
                        <Moment unix format='MMMM Do YYYY'>{wxrDay.dt}</Moment>
                        <br/>
                        Average Temp:{wxrDay.temp.day}
                        <br/>
                        Most probable:{wxrDay.weather[0].main}
                        <br/>
                        {this.weatherImage(wxrDay.weather[0].main)}
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

const skieStyle ={
    height: '80px',
    width: '80px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  }
  
  const cardStyle = {
    width: '400px',
    display: 'inline-block',
  };

export default WeatherCard
