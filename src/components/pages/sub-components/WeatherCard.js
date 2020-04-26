import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export class WeatherCard extends Component {
    render() {
        return (
            <div>
                {/* {console.log(this.props.wxrDay)} */}
                <Card>
                    <CardContent>
                    {this.props.wxrDay.name}
                    {console.log(this.props.wxrDay)}
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default WeatherCard
