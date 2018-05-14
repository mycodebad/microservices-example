/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.scss';

import Header from './../shared/header';
import Navigation from './../shared/navigation';

class App extends Component {
  openNavigation = () => {
    console.log("refs", this);
    let { isOpen } = this.refs.Navigation.refs.Menu.state
    this.refs.Navigation.refs.Menu.setState({ isOpen: !isOpen})
  }
  render () {
    let { children } = this.props
    return (
      <div ref='App' className="containerApp w-100">
        <Header openNavigation={() => this.openNavigation()}/>
        <Navigation ref="Navigation" />
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;