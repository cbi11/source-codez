import React, { Component } from 'react';
import '../App.css'

class Sidebar extends Component {
        state = {  
        }
        render() { 
            return (  
                <div className="sidebar">
                    <div className="refresh-button"><a href="index.html">Refresh</a></div>
                    <div className="content">
                        <p className="welcome-text">Your decision goes below</p>
                        {
                            this.props.sideState.header === "" ? 
                        <h1>{this.props.sideState.defaultHeader}</h1> : <h1 className="header">{this.props.sideState.header}</h1>
                        
                        }
                        <p className="answer">{this.props.sideState.randomOutput}</p>
                    </div>
                </div>
            );
        }
    }
     

 
export default Sidebar;