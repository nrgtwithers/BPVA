import React, { Component } from 'react';

class Ratings extends Component {
    state = {
        videoURL: 'puppy.mp4'
    }

    render() {
        return (
            <div>
                <strong>Marissa Lewis</strong><br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>If you are looking for a new style or color, you can trust Monica to make sure you look great when you walk out of Positive Image.</p>
                <br />
                <strong>Brittany Smith</strong><br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>Monica is always friendly and extremely professional. She is very experienced and always gives me whatever I ask her to do. She is AMAZING!</p>
                <br />
                <strong>Taylah Walker</strong><br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>Monica is always a delight. She has excellent coloring skills. Wonderful personality. Always makes me feel special.</p>
                <br />
                <strong>Anita Garcia</strong><br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p>Excellent color and cut, as always. Monica knows just what I need/want to make me happy when I leave every single time.</p>
            </div>
        )
    }
};

export default Ratings;