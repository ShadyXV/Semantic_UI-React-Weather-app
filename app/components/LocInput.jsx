var React = require('react');
var {Segment, Header, Form, Input, Button, Icon} = require('semantic-ui-react');

var Loc = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length >0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render:function(){
    return (
      <Segment raised size='huge' color='olive'>
        <Header as='h1'>Get Current Weather data</Header>

        <Form onSubmit={this.onFormSubmit}>
          <Input transparent size="big">
            <input name='mainForm' type='search' placeholder='Search By City Name' ref="location"/>
          </Input>
          <Button icon>
            <Icon name='search'/>
          </Button>
      </Form>
    </Segment>
    );
  }
});

module.exports  = Loc;
