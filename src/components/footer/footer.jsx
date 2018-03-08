import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'./footer.css';

class FooterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='footer bg-black'>
        <div className='row footer-section'>
          <div className='col-md-2'>
            <span className='bg-logo'>Gighub</span>
          </div>
          <div className='col-md-2'>
            <span className='footer-title'>BROWSER</span>
            <ul className="footer-list">
              <li>Jobs</li>
              <li>Profile</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <span className='footer-title'>ABOUT GIGHUB</span>
            <ul className="footer-list">
              <li>About GIGHUB</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Privacy & Cookies</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <span className='footer-title'>INFORMATION</span>
            <ul className="footer-list">
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className='col-md-4'>
            <span className='footer-title'>SIGN UP FOR GIGHUB UPDATES</span>
            <input className="form-control footer-input-sm" type="text" placeholder="Email Address"></input>
            <span className='footer-title'>FOLLOW US</span>
              <div>
                <i className="fa fa-facebook social" aria-hidden="true"></i>
                <i className="fa fa-instagram social" aria-hidden="true"></i>
                <i className="fa fa-twitter social" aria-hidden="true"></i>
                <i className="fa fa-youtube social" aria-hidden="true"></i>
              </div>
          </div>
        </div>
        <hr className="col-md-12"></hr>
        <div className='row'>
          <div className='col-md-6 footer-rights'>
            <span>© 2018 Gighub. All Right Reserved.</span>
          </div>
          <div className='col-md-6 footer-address'>
            <span>1933 South Broadway, Los Angeles, CA 90007</span>
          </div>
        </div>
      </div>
    )
  }
};

export default FooterPage;