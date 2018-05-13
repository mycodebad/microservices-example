/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './header.scss';

class Header extends Component {
  openNavigation (event) {
    event.preventDefault();
    if (this.props.openNavigation !== null) {
      this.props.openNavigation()
    }
  }
  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="search-box">
            <button className="dismiss">
              <i className="icon-close" />
            </button>
            <form id="searchForm" role="search">
              <input type="search" placeholder="What are you looking for..." className="form-control" />
            </form>
          </div>
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              <div className="navbar-header">
                <a href="/" className="navbar-brand">
                <div className="brand-text brand-big">
                  <span>Micro</span><strong>Servicios</strong>
                </div>
                <div className="brand-text brand-small"><strong>Microservicios</strong></div></a>
                  <a id="toggle-btn"  className="menu-btn active" onClick={(event) => this.openNavigation(event)}>
                    <span /><span /><span />
                  </a>
              </div>
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <li className="nav-item">
                  <a href="https://github.com/mycodebad/microservices-example" className="nav-link logout">Repositorio
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  openNavigation: PropTypes.func
};

export default Header;
