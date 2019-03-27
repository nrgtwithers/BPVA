import React, { Component } from 'react';
import Tabs from '../components/Tabs'
// import QuizButton from '../components/QuizButton';
// import SearchBreedsBtn from '../components/SearchBreedsBtn';
// import NavBar from "../components/NavBar";
// import NearMeButton from '../components/GoogleMap';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'puppy.mp4'
        }
    }

    render() {
        return (
            <div>
                <h1>Main User Page</h1>
                <Tabs />
                
            </div>              
                )
            }
        };
        
 export default Home;