import React, { Component } from 'react';
import { withGoogleMap, GoogleMap ,Marker} from 'react-google-maps';



 

class Map extends Component {
    render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 18.5204, lng: 73.8567 }}
  >
   <Marker position={{ lat:18.52014739558482,lng: 73.85819614323137}} />
   <Marker position={{ lat: 18.53138552045449, lng:73.85291995730286 }} />
   <Marker position={{ lat: 18.526775690328176, lng:73.87052247081182}} />
   <Marker position={{ lat: 18.503760161282102, lng:73.85146709451097}} />
   <Marker position={{ lat:18.5027449712632, lng:73.86607218889273 }} />
   <Marker position={{ lat: 18.519784863130994,lng: 73.85781381091769 }} />
    
  </GoogleMap>
  
       
    ));
    return(
       <div>
         <GoogleMapExample
           containerElement={ <div style={{ height: `1000px` }} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
         />
       </div>
    );
    }
 };
 export default Map;