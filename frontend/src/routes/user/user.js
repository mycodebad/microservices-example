/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import { containerItemCard as ContainerItemCard } from './../../components'
import { Alert } from 'reactstrap';
import './user.scss';
class User extends Component {
  render() {
    return (
      <div className="containerStore">
        <Alert color="info" className='text-center text-uppercase'>
          <h2>List of Users</h2>
        </Alert>
        <ContainerItemCard
          title={"Userss"} pic={'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'}
          author={'John Doe'} description={'Esto es React + Node'} />
      </div>
    );
  }
}
export default User;
