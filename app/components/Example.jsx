var React = require('react');
var {Link} = require('react-router');
var {Segment, List} = require('semantic-ui-react');

var Example = (props) => {
  return (
    <Segment piled>
    <div>
      <h1 className="text-center page-title">Example</h1>
      <p>Here's whats the weather like in</p>
        <List ordered>
          <List.Item ><Link to="/?Location=Kathmandu">Kathmandu,Nepal</Link></List.Item>
          <List.Item ><Link to="/?Location=lousiana">Lousiana,USA</Link></List.Item>
        </List>


    </div>
    </Segment>
  );
};

module.exports = Example;
