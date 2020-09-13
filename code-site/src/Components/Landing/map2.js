import React from 'react';
import ReactDOM, { render } from 'react-dom';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

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
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15 '}}>
                <Feature coordinates={[-71.264840, 42.295410]} />
            </Layer>
        </Map>
    </div>
    )
};