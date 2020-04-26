import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <header style={headerStyle}>
                    <h1>Weather application</h1>
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
