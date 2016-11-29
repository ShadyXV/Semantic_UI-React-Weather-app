var React = require('react');
var {Segment, List, Image} = require('semantic-ui-react');
//var imgLoc = require("file-loader!../images/placeholder.png")
// var WeatherUpdate  = React.createClass({
//   render:function (){
//     var {temp,location} = this.props;
//     return (
//       <p>Its {temp}c in {location}</p>
//     );
//   }
// });

//Stateless functional components with props.
// var WeatherUpdate = (props) =>{
//   var {temp, location} = props;
//   return (
//     <p>Its {temp}c in {location}</p>
//   );
// }
// module.exports = WeatherUpdate;

//es6 destructruing inside arguments.
//({temp, location}) =>{
var WeatherUpdate = ({temp, location, pressure, humidity, max, min, windSpeed, visibility, sunrise, sunset}) =>{
  return (
    <Segment piled>
      <List relaxed size='big'>

        <List.Item>
          <Image avatar src="https://i1.imgpile.com/i/zQmeG.png"/>
        <List.Content>
          <List.Description>{location}</List.Description>
        </List.Content>
        </List.Item>

        <List.Item>
          <Image avatar src='https://i4.imgpile.com/i/zQ88X.png' />
        <List.Content>
          <List.Description>{temp} &deg;c</List.Description>
        </List.Content>
        </List.Item>

        <List.Item>
          <Image avatar src='https://i1.imgpile.com/i/zQqBR.png' />
        <List.Content>
          <List.Description>{visibility} m</List.Description>
        </List.Content>
        </List.Item>

        <List.Item>
          <Image avatar src="https://i3.imgpile.com/i/zQAIg.png" />
        <List.Content>
          <List.Description>{windSpeed} km/hr</List.Description>
        </List.Content>
        </List.Item>

        <List.Item>
          <Image avatar src='https://i1.imgpile.com/i/zQV6h.png' />
        <List.Content>
          <List.Description>{pressure} pa</List.Description>
        </List.Content>
        </List.Item>

        <List.Item>
          <Image avatar src='https://i1.imgpile.com/i/zQl22.png' />
        <List.Content>
          <List.Description>{humidity}</List.Description>
        </List.Content>
        </List.Item>


      </List>
    </Segment>
  );
}
module.exports = WeatherUpdate;
