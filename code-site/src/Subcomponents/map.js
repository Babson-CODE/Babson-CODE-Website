import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiYmFic29uY29kZSIsImEiOiJja2V0OWt5cGcxY2l6Mnhtcm82YXU5dXU1In0.OCBYVv2dIEhN0OtPNi3YJQ";

class MapboxApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };

    }

    componentDidMount() {
        const map = new mapboxgl.map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

}


export default MapboxApp;