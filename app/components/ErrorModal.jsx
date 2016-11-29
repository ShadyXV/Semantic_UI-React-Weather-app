var React = require('react');
var {Button, Header, Icon, Modal, Confirm} = require('semantic-ui-react');

var ErrorModal = React.createClass({
  getDefaultProps:function (){
    return {
      title:'Error'
    };
  },
  propTypes:{
    title:React.PropTypes.string,
    message:React.PropTypes.string.isRequired
  },
  handleConfirm:function(){
    //close the modal
  },
  render:function (){
    var {title, message} = this.props;
    return(
      <Modal basic size='small' open onClose={this.close}>
    <Header icon='error' content={title}/>
    <Modal.Content>
      <p>{message}</p>
      <p>Try entering a vaild city name.</p>
    </Modal.Content>
    <Modal.Actions close>
      <Button basic color='red' inverted >
        <Icon closeIcon name='remove' /> ok

      </Button>
    </Modal.Actions>
  </Modal>
    );
  }
});

module.exports = ErrorModal;
