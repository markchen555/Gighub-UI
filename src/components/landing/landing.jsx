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
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://storage.googleapis.com/coverr-main/mp4/Slow_Typer.mp4"></source>
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
                            <strong>Welcome To Gighub!!</strong>
                        </h1>
                        <hr></hr>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <p className="text-faded mb-5">Type the job title into the input section to begin searching.</p>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Job Title" aria-label="Job Title" aria-describedby="basic-addon2"></input>
                        <div className="input-group-append">
                        <button className="btn btn-secondary" type="button">Search</button>
                        </div>
                      </div>
                    </div>   
                </div>
            </div>
        </header>
      </div>
    )
  }
};

export default LandingPage;
