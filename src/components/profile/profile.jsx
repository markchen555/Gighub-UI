import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import './profile.css';

const API_SERVER = process.env.API_SERVER;

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: null,
    }

    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
   //this.fetch()
  }

  fetch() {
    axios.get(`${API_SERVER}/api/user/profile/${this.props.userId}}`)
    .then(items => {
      this.setState({ bio: items.data });
    })
    .catch(err => {
      console.log('Fetch err:', err);
    })
  }

  edit() {
    axios.put(`${API_SERVER}/edit`)
    .then(items => {
      console.log('Edit Success!');
    })
    .catch(err => {
      console.log('Fetch err:', err);
    })
  }

  render() {
    console.log(this.props.userId, 'this is props')
    return (
          <div className="container profile-wrapper">
            <div className="row my-2">
                <div className="col-lg-8 order-lg-2">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                        </li>
                    </ul>
                    <div className="tab-content py-4">
                        <div className="tab-pane active" id="profile">
                            <h5 className="mb-3">User Profile</h5>
                            <form role="form">
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Phone Number</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Location</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Headline</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Experience Level</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Education Level</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Linkedin</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Twitter</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Facebook</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Github</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Personal Portfolio</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Desire Salary</label>
                                <div className="col-lg-9">
                                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.props.userId}></input>
                                </div>
                              </div>
                            </form>
                        </div>
                        <div className="tab-pane" id="edit">
                            <form role="form">
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value=""></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value=""></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="email" value=""></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Phone Number</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value=""></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Location</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" value="" ></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Headline</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Experience Level</label>
                                    <div className="col-lg-9">
                                        <select id="user_time_zone" className="form-control" size="0">
                                            <option value="Entry">Entry</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advance">Advance</option>
                                            <option value="Expert">Expert</option>
                                        </select>
                                    </div>
                                </div>
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label">Education Level</label>
                                  <div className="col-lg-9">
                                      <select id="user_time_zone" className="form-control" size="0">
                                          <option value="High School">High school diploma or equivalent</option>
                                          <option value="College With No Degree">Some college, no degree</option>
                                          <option value="Postsecondary noo=n-degree award">Postsecondary non-degree award</option>
                                          <option value="Associate">Associate’s degree</option>
                                          <option value="Bachelor">Bachelor’s degree</option>
                                          <option value="Master">Master’s degree</option>
                                          <option value="Doctor">Doctoral or professional degree</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label">Linkedin</label>
                                  <div className="col-lg-9">
                                      <input className="form-control" type="text" value=""></input>
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label">Twitter</label>
                                  <div className="col-lg-9">
                                      <input className="form-control" type="text" value=""></input>
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label">Facebook</label>
                                  <div className="col-lg-9">
                                      <input className="form-control" type="text" value=""></input>
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label">Github</label>
                                  <div className="col-lg-9">
                                      <input className="form-control" type="text" value=""></input>
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label">Personal Portfolio</label>
                                  <div className="col-lg-9">
                                      <input className="form-control" type="text" value=""></input>
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label">Desire Salary</label>
                                  <div className="col-lg-9">
                                      <select id="user_time_zone" className="form-control" size="0">
                                          <option value="High School">High school diploma or equivalent</option>
                                          <option value="College With No Degree">Some college, no degree</option>
                                          <option value="Postsecondary noo=n-degree award">Postsecondary non-degree award</option>
                                          <option value="Associate">Associate’s degree</option>
                                          <option value="Bachelor">Bachelor’s degree</option>
                                          <option value="Master">Master’s degree</option>
                                          <option value="Doctor">Doctoral or professional degree</option>
                                      </select>
                                  </div>
                              </div>
                            
                              <div className="form-group row">
                                  <label className="col-lg-3 col-form-label form-control-label"></label>
                                  <div className="col-lg-9">
                                      <input type="reset" className="btn btn-secondary" value="Cancel"></input>
                                      <input type="button" className="btn btn-primary" value="Save Changes"></input>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 order-lg-1 text-center">
                  <img src="//placehold.it/150" className="mx-auto img-fluid img-circle d-block" alt="avatar"></img>
                  <h6 className="mt-2">Upload a different photo</h6>
                  <label className="custom-file">
                      <input type="file" id="file" className="custom-file-input"></input>
                      <button className="custom-file-control">Choose file</button>
                  </label>
              </div>
          </div>
      </div>
    )
  }
};

const ProfileState = (state) => {
  console.log(state.auth, 'this is profile state')
  return {
    token: state.auth.user.token,
    userId: state.auth.user.id,
  }
};

const ProfileDispatch = (dispatch) => {
  return {
    //authLogout: bindActionCreators(authLogout, dispatch),
  }
};


export default connect(ProfileState, ProfileDispatch)(ProfilePage);