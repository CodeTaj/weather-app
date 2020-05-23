import React, { Component } from 'react';
import Moment from 'react-moment';

export class Header extends Component {
    render() {
        return (
            <div>
                <header style={headerStyle}>
                    <h1>Weather application</h1>
                    <h5><Moment format='LLL'/></h5>
                    <br/>
                </header>
            </div>
        )
    }
}

const headerStyle = {
    backgroundColor: '#282c34',
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }
  

export default Header
