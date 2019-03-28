import React, { Component } from 'react';
// import Form from '../components/Form'
// import QuizButton from '../components/QuizButton';
// import SearchBreedsBtn from '../components/SearchBreedsBtn';
// import NavBar from "../components/NavBar";
// import NearMeButton from '../components/GoogleMap';
import FAQ from '../components/Collapsible';
import Video from "../components/Video";
// import { Fab } from '@material-ui/core';


class Home extends Component {


    state = {
        videoURL: 'puppy.mp4'
    }


    render() {
        return (
            <div>

                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>BPVA</h1>
                <p style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>Beauty Professional Virtual Assistant</p>
                <Video />
                <FAQ />

            </div>
        )
    }
};

export default Home;