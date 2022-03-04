import React from 'react';
import ReactDOM, { render } from 'react-dom';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYmFic29uY29kZSIsImEiOiJja2V0OWt5cGcxY2l6Mnhtcm82YXU5dXU1In0.OCBYVv2dIEhN0OtPNi3YJQ"
});

export default function MapboxComp() {
    
    return(
    <div>
        <Map
            style="mapbox://stlyes/mapbox/streets-v9"
            containerStyle={{
                height: '50vh',
                width: '50vw'
            }}
            center={[-71.266373, 42.295244]}
        >
            <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15"}}>
                <Feature coordinates={[-71.266373, 42.295244]} />
                <Marker coordinates={[-71.266373, 42.295244]} anchor="center" style={{zIndex: 1500}}>
                    <div><LocationOnIcon id="marker-15"/></div> 
                    </Marker>
            </Layer>
        </Map>
    </div>
    )
};