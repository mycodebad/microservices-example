/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React from 'react';
import {Link} from 'react-router-dom';
import './not-found.scss';


const NotFound = () => {
  return (
    <div className="containerNotFound">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>
                Oops!</h1>
              <h2>
                404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <Link className="btn btn-primary btn-lg" to={'/'}>Return to home</Link>
                <a href="https://github.com/mycodebad" className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-envelope" /> Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;