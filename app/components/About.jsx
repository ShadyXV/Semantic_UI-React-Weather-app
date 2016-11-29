var React = require('react');
var {Segment, List} = require('semantic-ui-react');

 var About =(props) => {
   return(
     <Segment piled>
       <h1>About</h1>
       <p>
         This is a Weather App build on React as on The Complete React Web App Developer Course
       </p>
       <p>Here are some of the tools i've used</p>

     <List bulleted>
       <List.Item href="https://facebook.github.io/react">React-The Javascript </List.Item>
       <List.Item href="http://openweathermap.org">Open Weather Map API</List.Item>
       <List.Item href="http://react.semantic-ui.com/introduction">semanticUI React</List.Item>
      </List>
       <p>Icons Downloaded From <a href="http://www.flaticon.com/"> Flaticon</a></p>
     </Segment>
   );
 };

module.exports = About;
