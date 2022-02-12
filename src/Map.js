import './Map.css';
import React ,{Component} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import ReactMapGL, {Marker} from 'react-map-gl'

// import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';

class Map extends Component{
    state = {
        viewport: {
          width: "100vw",
          height: "100vh",
          latitude: 42.430472,
          longitude: -123.334102,
          zoom: 12
        }
      };
    render(){
        return(
            <div className="map">
                <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/mapbox/outdoors-v11" mapboxAccessToken='pk.eyJ1Ijoic2hpYmluMTIzIiwiYSI6ImNrempleXFqZjF1ZXYybm8weHVtY3FyY3EifQ.gS0UWDOqiA7k_a0mm7hrOQ'>

                <Marker
              key="1"
              latitude="42.4"
              longitude="-123.3"
            >
              <img src="pin.png" alt="marker"/>
            </Marker>
                </ReactMapGL>

            </div>
        );
    }
}

export default Map