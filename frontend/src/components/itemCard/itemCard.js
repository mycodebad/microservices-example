import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  
class itemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentDidMount () {
    console.log('ComponentDidMOunt ItemCard');
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
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card  cap"/>
          <CardBody>
            <CardText>{this.props.description}</CardText>  
            <Button outline color="primary" size='lg' block onClick={() => this.onClickBtn()} >Obtener</Button>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={() => this.onClickBtn(false)} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.onClickBtn(false)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={() => this.onClickBtn(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

itemCard.propTypes = {
  modal: PropTypes.bool
};

itemCard.default = {
  modal: false
}

export default itemCard;