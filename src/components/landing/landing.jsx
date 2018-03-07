import React, { Component } from 'react';
import'./landing.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-wrapper">
        <video id="myVideo" className="video-container video-container-overlay" autoPlay loop muted data-reactid=".0.1.0.0">
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://www.w3schools.com/howto/rain.mp4"></source>
        </video>
        {/* <div className="content text-center">
          <h1>Landing Page</h1>
          <p>Lorem ipsum...</p>
        </div> */}
        <header className="masthead header-wrapper text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase">
                            <strong>Landing Page</strong>
                        </h1>
                        <hr></hr>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <p className="text-faded mb-5">Type the job type into the input bar to begin search.</p>
                        <input type="text"/>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Submit</a>
                    </div>
                </div>
            </div>
        </header>
      </div>
    )
  }
};

export default LandingPage;
