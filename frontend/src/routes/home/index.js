/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="containerHome">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="success-template">
                <h1>
                  hi!</h1>

                <div className="success-details">
                  Welcome to example The MicroServices
                </div>
                <div className="success-actions">
                  
                  <a href="https://github.com/mycodebad" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-envelope" /> Contact me: My Code Bad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  urlConnect: PropTypes.string,
  portConnect: PropTypes.number
}

Home.defaultProps = {
  urlConnect: 'http://localhost',
  portConnect: 8888
};

export default Home;
