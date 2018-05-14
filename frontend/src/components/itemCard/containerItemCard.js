import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { itemCard as ItemCard } from './../';
import LazyLoad from 'react-lazyload';
import uuid from 'uuid';

class containerItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems
    }
  }

  componentWillReceiveProps(next) {
    if(next.listItems !== undefined && next.listItems !== null) {
      this.setState({ listItems: next.listItems });
    }
  }
  onClickBtn (Item) {
    if (this.props.onClickBtn !== undefined && this.props.onClickBtn !== null) {
      this.props.onClickBtn(Item);
    }
  }
  render() {
    let { listItems } = this.state

    return <div>
      <div className='container-fluid'>
        <div className='row'>
          {listItems.map(item => (
            <div className="col-12 col-sm-6 col-md-4" key={uuid.v4()}>
              <LazyLoad once key={uuid.v4()} height={150}>
                <ItemCard ref={item._id}
                  id={item._id}
                  title={item.name} pic={item.image}
                  author={item.autor} description={item.description} 
                  onClickBtn={(Item) => this.onClickBtn(Item)} />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>
    </div>
  }
}

containerItemCard.propTypes = {
  listItems: PropTypes.array,
  onClickBtn: PropTypes.func
}
containerItemCard.defaultProps = {
  listItems: []
}
export default containerItemCard;