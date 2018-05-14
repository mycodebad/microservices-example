/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import { containerItemCard as ContainerItemCard, modal as Modal } from './../../components'
import { Alert } from 'reactstrap';
import axios from 'axios';
import './store.scss';
class Store extends Component {

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
    axios.get('http://localhost:3000/courses', {}, config)
      .then((response) => {
        console.log('response', response);
        return response.data
      })
      .then(data => {
        console.log('data', data);
        this.refs.ContainerItemCard.setState({
          listItems: data || []
        })
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  render() {
    return (
      <div className="containerStore">
        <Alert color="info" className='text-center text-uppercase'>
          <h2>Tienda</h2>
        </Alert>
        <ContainerItemCard ref='ContainerItemCard' listItems={[]}
          title={"Esto es un titulo"} pic={'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'}
          author={'John Doe'} description={'Esto es React + Node'} />
        <Modal isOpen title={'Mensaje'} description={'Le enviaremos un correo para poder descargar el articulo'} />
      </div>
    );
  }
}
export default Store;
