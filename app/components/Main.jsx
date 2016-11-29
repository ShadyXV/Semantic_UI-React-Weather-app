var React = require('react');
var Nav = require('Nav');
var {Container,Form , Input} = require('semantic-ui-react');

 var Main = (props) =>{
   return (
     <div>
       <Nav/>
         <Container textAlign='center'>
          {props.children}
         </Container>
     </div>
   );
 };
module.exports = Main;

//          {props.children}
