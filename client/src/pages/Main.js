import React, { Component } from 'react';
import Tabs from '../components/Tabs'
import UserCard from '../components/Card';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    render() {
        return (
            <div className="section">
                <h2>Welcome <strong>*Insert Username*</strong> to BPVA.</h2>
                <UserCard />
                <br />
                <Tabs />
                
            </div>              
                )
            }
        };
        
 export default Home;