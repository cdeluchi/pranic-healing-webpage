import React from "react";
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    InfoWindow,
    Marker,
} from "react-google-maps";

class Map extends React.Component {
    state = {
        address: "Lenaustraße 3, 12047, Berlin",
        city: "Berlin",
        area: "12047",
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 52.4899,
            lng: 13.4251,
        },
        markerPosition: {
            lat: 52.4899,
            lng: 13.4251,
        },
    };

    onPlaceSelected = (place) => {
        console.log("plc", place);
        const 
            latValue = 52.4899,
            lngValue = 13.4251;


        console.log("latvalue", latValue);
        console.log("lngValue", lngValue);

        this.setState({
            markerPosition: {
                lat: 52.4899,
                lng: 13.4251,
            },
            mapPosition: {
                lat: 52.4899,
                lng: 13.4251,
            },
        });
    };

    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap((props) => (
                <GoogleMap
                    defaultZoom={this.state.zoom}
                    defaultCenter={{
                        lat: this.state.mapPosition.lat,
                        lng: this.state.mapPosition.lng,
                    }}
                >
                 
                    <Marker
                        
                        position={{
                            lat: this.state.markerPosition.lat,
                            lng: this.state.markerPosition.lng,
                        }}
                    />
                    <InfoWindow
                        // onClose={this.onInfoWindowClose}
                        position={{
                            lat: this.state.markerPosition.lat + 0.0018,
                            lng: this.state.markerPosition.lng,
                        }}
                    >
                        <div>
                            <span>{this.state.address}</span>
                        </div>
                    </InfoWindow>
                    <Marker />

                    
                </GoogleMap>
            ))
        );

        return (
            <div
                className="map-container"
                style={{
                    width: 400,
                    height: 400,
                    maxWidth: 1000,
                }}
            >
                {/* <h1>Refugio Berlin</h1> */}

                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTTLx9iWxR9QJDs3sJhkpaS6lmTEl9zHk&libraries=places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map;

// import React from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// // import Geocode from "react-geocode";

// // Geocode.setApiKey("<AIzaSyBTTLx9iWxR9QJDs3sJhkpaS6lmTEl9zHk>"); // Enter Google Maps API here
// // Geocode.enableDebug();

// // Geocode.fromLatLng("52.52", "13.405").then(
// //     (response) => {
// //         const address = response.results[0].formatted_address;
// //         console.log(address);
// //     },
// //     (error) => {
// //         console.error(error);
// //     }
// // );

// const containerStyle = {
//     width: "400px",
//     height: "400px",
//     margin: "40px",
// };
// const center = {
//     lat: 52.4899,
//     lng: 13.4252,
// };
// // 52.4899° N, 13.4252° E
// // console.log("center", center);

// function Map() {
//     const { isLoaded } = useJsApiLoader({
//         id: "google-map-script",
//         googleMapsApiKey: "AIzaSyBTTLx9iWxR9QJDs3sJhkpaS6lmTEl9zHk",
//     });

//     // const { isLoaded: isGoogleLoaded } = useLoadScript({
//     //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     //     libraries: LIBRARIES,
//     // });
//     const [, setMap] = React.useState(null);

//     const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds();
//         map.fitBounds(bounds);
//         setMap(map);
//     }, []);
//     // console.log("onLoad", onLoad);

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null);
//     }, []);

//     return isLoaded ? (
//         <div className="maps">
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={13}
//                 onLoad={onLoad}
//                 onUnmount={onUnmount}
//             >
//                 {/* Child components, such as markers, info windows, etc. */}
//                 {/* <>
//                     <Marker
//                         className="marker"
//                         latitude={52.48}
//                         longitude={13.48}
//                         offsetLeft={-20}
//                         offsetTop={-10}
//                     >
//                         <div>
//                             <img
//                                 className="pinImg"
//                                 src={"/pin.png"}
//                                 alt="Logo"
//                             />
//                         </div>
//                     </Marker>
//                 </> */}
//             </GoogleMap>
//         </div>
//     ) : (
//         <></>
//     );
// }

// export default React.memo(Map);

// // // https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
// // // Refugio Café/Coordinates
// // // 52.4899° N, 13.4252° E
