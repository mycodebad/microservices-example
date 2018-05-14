import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,InputGroup, InputGroupAddon, Input } from 'reactstrap';
import $ from 'jquery';
class modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      title: this.props.title,
      description: this.props.description
    }
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.isOpen !== undefined && nextprops.isOpen !== null) {
      this.setState({ isOpen: nextprops.isOpen })
    }
    if (nextprops.title !== undefined && nextprops.title !== null) {
      this.setState({ title: nextprops.title })
    }
    if (nextprops.description !== undefined && nextprops.description !== null) {
      this.setState({ description: nextprops.description })
    }
  }
  toggle() {
    this.validateEmail();
    if (this.validateEmail($('#email').val())){
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }
  validateEmail(ValueInput) {
    console.log('validateEmail', $('#email').val());
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return (emailRegex.test(ValueInput))
  }
  onChange (ValueInput) {
    console.log('onChange', ValueInput);
    if (this.validateEmail(ValueInput)) {

    }
  }
  render() {
    let { isOpen, title, description } = this.state;
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={() => this.toggle()}>&times;</button>;

    return <div>
      <Modal isOpen={isOpen} toggle={() => this.toggle()} className={this.props.className} external={externalCloseBtn}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <b>{description}</b><br /> <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input ref={ (email) => this.email = email } name='email' id='email' placeholder="example@domain.com" onChange={(e) => this.onChange(`${e.target.value}`)} />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button ref='ButtonObtener' color="primary" onClick={() => this.toggle()}>Obtener</Button>
        </ModalFooter>
      </Modal>
    </div>
  }
}

modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
}

modal.defaultProps = {
  isOpen: false,
  title: '',
  description: ''
}

export default modal;