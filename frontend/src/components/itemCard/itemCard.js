import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
  
class itemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  onClickBtn (val= undefined) {

    this.setState({
      modal: val ||!this.state.modal
    });
  }
  render () {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.author}</CardSubtitle>
          </CardBody>
          <img width="100%" src={this.props.pic} alt="Card  cap"/>
          <CardBody>
            <CardText>{this.props.description}</CardText>  
            <Button outline color="primary" size='lg' block onClick={() => this.onClickBtn()} >Obtener</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

itemCard.propTypes = {
  modal: PropTypes.bool
};

itemCard.defaultProps = {
  modal: false
}

export default itemCard;