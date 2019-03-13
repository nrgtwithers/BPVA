import React, { Component } from 'react';
import Form from '../components/Form'
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
                <Form />
                
            </div>              
                )
            }
        };
        
export default Home;