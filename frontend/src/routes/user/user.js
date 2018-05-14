/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { containerItemCard as ContainerItemCard } from './../../components'
import { Alert } from 'reactstrap';
import axios from 'axios';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {browserHistory} from 'react-router'

import './user.scss';
class User extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.withCredentials = true;
    axios.defaults.crossDomain = true;
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    };
    axios.get('http://localhost:3000/users', {}, config)
      .then((response) => {
        console.log('response', response);
        return response.data
      })
      .then(data => {
        console.log('data', data);
        let listItems = this.formatDatauser(data)
        this.refs.ContainerUsers.setState({ listItems: listItems })
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  formatDatauser (DataUser) {
    return _.map(DataUser, user => {
      return {
        name: 'Usuario',
        image: 'https://randomuser.me/api/portraits/lego/2.jpg',
        autor: 'John Doe',
        email: user.email,
        description: user.email,
        _id: user._id
      }
    })
  }
  onClickBtnParent (User) {
    console.log('onClickBtnParent', this);
    this.props.history.push('/_user/show/'+ User.description)
  }
  render() {
    return (
      <div className="containerStore">
        <ToastContainer />
        <Alert color="info" className='text-center text-uppercase'>
          <h2>Usuarios</h2>
        </Alert>
        <ContainerItemCard ref='ContainerUsers' listItems={[]}
          title={"Esto es un titulo"} pic={'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'}
          author={'John Doe'} description={'Esto es React + Node'} onClickBtn={(User) => this.onClickBtnParent(User)} />
      </div>
    );
  }
}

User.contextTypes = {
  router: PropTypes.object
}
export default User;
