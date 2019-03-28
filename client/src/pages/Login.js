import React, { Component } from 'react';
import Form from '../components/Form'

class Home extends Component {
    state = {
            videoURL: 'puppy.mp4'
        }

    render() {
        return (
            <div>
                <Form />
                
            </div>              
                )
            }
        };
        
export default Home;