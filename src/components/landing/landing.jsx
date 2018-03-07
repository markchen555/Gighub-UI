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
        <header class="masthead header-wrapper text-center text-white d-flex">
            <div class="container my-auto">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <h1 class="text-uppercase">
                            <strong>Landing Page</strong>
                        </h1>
                        <hr></hr>
                    </div>
                    <div class="col-lg-8 mx-auto">
                        <p class="text-faded mb-5">Type the job type into the input bar to begin search.</p>
                        <input type="text"/>
                        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Submit</a>
                    </div>
                </div>
            </div>
        </header>
      </div>
    )
  }
};

export default LandingPage;
