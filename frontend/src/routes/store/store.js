/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import { containerItemCard as ContainerItemCard, modal as Modal } from './../../components'
import { Alert } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  onClickBtnParent (Item) {
    console.log('onClickBtnParent', Item);
    this.refs.Modal.setState({ isOpen: true, description: 'Le enviaremos un correo para poder descargar del articulo: ' + Item.title, idItem: Item.id })
  }
  obtenerItemParent (DataUser) {
    console.log('obtenerItemParent', DataUser);
    axios.post('http://localhost:3000/courses/buy',{
      email: DataUser.email,
      idCourse: DataUser.idItem
    })
    .then(response => {
      console.log('response', response);
      toast.info("Se realizo el link a tu correo, revisalo !");

    })
    .catch(error => {
      console.log('error', error)
      toast.error("Hubo un error, vuelva a intentar mas tarde !");
    })
  }
  render() {
    return (
      <div className="containerStore">
        <ToastContainer />
        <Alert color="info" className='text-center text-uppercase'>
          <h2>Tienda</h2>
        </Alert>
        <ContainerItemCard ref='ContainerItemCard' listItems={[]}
          title={"Esto es un titulo"} pic={'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'}
          author={'John Doe'} description={'Esto es React + Node'} onClickBtn={(Item) => this.onClickBtnParent(Item)} />
        <Modal ref='Modal' title={'Mensaje'} description={'Le enviaremos un correo para poder descargar del articulo'} 
        obtenerItem={(DataUser) => this.obtenerItemParent(DataUser)} />
      </div>
    );
  }
}
export default Store;
