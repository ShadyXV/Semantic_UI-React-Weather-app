var React = require('react');
var {Menu, Form, Input} = require('semantic-ui-react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch:function(e){
    e.preventDefault();
    alert('Not Yet Wired Up!');
  },
  render:function(){
    return(
        <Menu fluid  widths={5}>
          <Menu.Item fluid>
            <strong>earthWeather</strong>
          </Menu.Item >
          <Menu.Item fluid>
            <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold',color:'gray'}}>Get Weather</IndexLink>
          </Menu.Item>
          <Menu.Item fluid>
            <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold',color:'gray'}}>About</Link>
          </Menu.Item>
          <Menu.Item fluid>
            <Link to='/example' activeClassName='active' activeStyle={{fontWeight:'bold',color:'gray'}}>Example</Link>
          </Menu.Item>


          <Form fluid onSubmit={this.onSearch} className='NavForm'>
            <Form.Field>
              <Input transparent size='small' placeholder="Search Weather By City" icon='search'></Input>
            </Form.Field>
          </Form>


        </Menu>
    );
  }
})


module.exports = Nav;
