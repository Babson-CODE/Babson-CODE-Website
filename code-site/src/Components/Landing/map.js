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
    const mapContainerRef = useRef(null);

    componentDidMount() {
        const map = new mapboxgl.map({
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
        map.on('move', () => {

            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

    }
        render() {
            return (
            <div>
                <div className='sidebarStyle'>
                    <div> Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div className='map-container' ref={this.mapContainer} />
            </div>
        );
     
    }
}

function MapComp() {

}

export default MapboxApp;