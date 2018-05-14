import React, { Component } from 'react';
import { containerItemCard as ContainerItemCard } from './../../components'
import { Alert } from 'reactstrap';
import axios from 'axios';
class Show extends Component {
  componentWillMount () {
    console.log('componentWillMount', this);
    let { email } = this.props.match.params;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.withCredentials = true;
    axios.defaults.crossDomain = true;
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    };
    axios.get('http://localhost:3000/users/' + email, {}, config)
      .then((response) => {
        console.log('response', response);
        return response.data
      })
      .then(data => {
        console.log('data', data);
        let { coursesUser } = data.courses;
        console.log('coursesUser', coursesUser);
        this.refs.ContainerCourses.setState({ listItems: coursesUser })
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  render () {
    let { email } = this.props.match.params;

    return <div>
            <Alert color="info" className='text-center text-uppercase'>
          <h4>Usuario: {email}</h4>
        </Alert>
        <ContainerItemCard ref='ContainerCourses' listItems={[]}
          title={"Esto es un titulo"} pic={'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'}
          author={'John Doe'} description={'Esto es React + Node'} onClickBtn={(User) => this.onClickBtnParent(User)} />
  
    </div>
  }
}

export default Show;