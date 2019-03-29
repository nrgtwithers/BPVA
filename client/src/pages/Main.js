import React, { Component } from 'react';
import Tabs from '../components/Tabs'
import CenteredGrid from '../components/Grid';



class Home extends Component {
    state = {
            videoURL: 'puppy.mp4'
        }

    render() {
        return (
            <div className="section">
                <h2>Welcome <strong>*Insert Username*</strong> to BPVA.</h2>
                <CenteredGrid />
                <br />
                <Tabs />
                
            </div>              
                )
            }
        };
        
 export default Home;