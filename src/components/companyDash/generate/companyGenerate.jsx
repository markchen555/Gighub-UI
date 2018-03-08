import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

class CompanyGenerate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      updated: false,
      keys: {},
      genKey: '',
    };
  }

  componentDidMount() {
    if (!this.state.updated) {
      axios.get(`${process.env.API_SERVER}/api/company/key`, {
        headers: {
          Authorization: `${this.props.token}`,
        }
      })
        .then(({ data }) => {
          this.setState({
            updated: true,
            keys: data,
          });
        })
        .catch(err => {
          alert(`Error grabbing Keys`);
          this.setState({
            updated: true,
          });
        });
    }
  }

  setFirst(text) {
    this.setState({
      firstName: text,
    });
  }

  setLast(text) {
    this.setState({
      lastName: text,
    });
  }

  generateKey() {
    const { firstName, lastName } = this.state;

    axios({
      method: 'POST',
      url: `${process.env.API_SERVER}/api/company/key`,
      headers: {
        "Authorization": `${this.props.token}`,
      },
      data: { firstName, lastName }
    })
      .then(({ data }) => {
        this.setState({
          updated: false,
          genKey: data,
        });
        this.componentDidMount();
      })
      .catch(err => {
        alert(`There was an error generating a key.`);
        this.setState({
          updated: false,
        });
        this.componentDidMount();
      });
  }

  render() {
    const { updated, genKey, firstName, lastName, keys } = this.state;

    if (!updated) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div>
        <div className="row justify-content-center login-row">
          <h3>Generated Keys</h3>
        </div>
        <div className="row justify-content-center login-row">
          {
            Object.keys(keys).map((key, i) => (
              <h5 key={`gen-key-${i}`}><strong>{key}: </strong>{keys[key]}</h5>
            ))
          }
        </div>
        <div className="row justify-content-center login-row">
          <button type="text" className="btn btn-outline-primary" data-toggle="modal" data-target="#genKeyModal">
            Generate Key
          </button>
          <div className="modal" id="genKeyModal" tabIndex="-1" role="dialog" aria-labelledby="genKeyLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="genKeyLabel">Generate Key for Recruiter</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="comp-gen_first">First Name</label>
                      <input type="text" id="comp-gen_first" className="form-control" onChange={(e) => this.setFirst(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comp-gen_last">Last Name</label>
                      <input type="text" id="comp-gen_first" className="form-control" onChange={(e) => this.setLast(e.target.value)} />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={(e) => {
                    e.preventDefault();
                    this.generateKey();
                  }} >
                    Generate Key
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          !!genKey &&
          <div className="row justify-content-center login-row">
            <h4>{`Generated Key for ${firstName} ${lastName}: ${genKey}`}</h4>
          </div>
        }
      </div>
    )
  }
};

const CompGenState = (state) => {
  return {
    token: state.auth.user.token,
  }
};

CompanyGenerate.propTypes = {
  token: PropTypes.string,
};

export default connect(CompGenState)(CompanyGenerate);
