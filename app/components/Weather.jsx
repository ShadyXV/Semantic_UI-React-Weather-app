var React = require('react');
var Loc = require('Loc');
var WeatherUpdate = require('WeatherUpdate');
var openweathermap = require('Openweathermap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState:function(){
    return {
      isLoading:false,
    }
  },
  handleSearch: function(location){

    var that = this;

    this.setState({
      isLoading:true,
      errorMessage:undefined
    });

    openweathermap.getTemp(location).then(function(data){
      that.setState({
        location:location,
        temp:data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        wind_speed:data.wind.speed,
        visibility:data.visibility,
        sunrise:data.sys.sunrise,
        sunset:data.sys.sunset,
        isLoading:false
      });
    },function(e){
      that.setState({
        isLoading:false,
        errorMessage:e.message
      });
    });
  },
   render:function(){
     var {isLoading,temp,location,errorMessage,pressure,humidity,temp_min,temp_max, wind_speed, visibility, sunrise, sunset}=this.state;

     function renderMessage (){
       if(isLoading){
         return <h3 className="text-center">fetching Weather...</h3>
       }else if (temp && location){
        return  <WeatherUpdate temp={temp} location={location} pressure={pressure} humidity={humidity} max={temp_max} min={temp_min} windSpeed={wind_speed} visibility={visibility} sunrise={sunrise} sunset={sunset}/>
       }
     };

     function renderError() {
       if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    };

     return(
       <div>
        <Loc onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
       </div>
     );
   }
 });

module.exports = Weather;
