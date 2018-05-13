import React, { Component } from 'react';
import { itemCard as ItemCard } from './../';
import LazyLoad from 'react-lazyload';
import uuid from 'uuid';

class containerItemCard extends Component {
  renderItemsCard = () => {
    var listItems = []
    for (let i = 0; i < 100; i++) {

      listItems.push()
    }
    return listItems;
  }
  render() {
    let datos = ['primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer',
      'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer', 'primer', 'segundo', 'tercer']
    return <div>
      <div className='container-fluid'>
        <div className='row'>
          {datos.map(dato => (
            <div className="col-12 col-sm-4 col-md-3" key={uuid.v4()}>
              <LazyLoad once key={uuid.v4()} height={150}>
                <ItemCard
                  title={this.props.title} pic={'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'}
                  author={'John Doe'} description={'Esto es React + Node'} />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>
    </div>
  }
}

export default containerItemCard;