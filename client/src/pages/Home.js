import React, { Component } from 'react';
import FAQ from '../components/Collapsible';
import Video from "../components/Video";

class Home extends Component {


    state = {
        videoURL: 'puppy.mp4'
    }


    render() {
        return (
            <div>

                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>BPVA</h1>
                <p style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>Beauty Professional Virtual Assistant</p>
                {/* <TextEffect/> */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
                <Video />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40, marginTop: 40}}>
                <FAQ />
                </div>

            </div>
        )
    }
};

export default Home;