/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import './navigation.scss';

class Navigation extends Component {
  menuSelected () {
    console.log("Selected");
    this.refs.Menu.setState({ isOpen: false })
  }
  render() {
    return (
      <div>
        <Menu ref='Menu' isOpen={false} >
            <Link className="menu-item" to={'/'} onClick={() => this.menuSelected()}>Home</Link>
            <Link className="menu-item" to={'/not_found'} onClick={() => this.menuSelected()}>Not Found</Link>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
