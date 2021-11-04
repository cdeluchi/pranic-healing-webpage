import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "400px",
    height: "400px",
    margin: "40px",
};

function Map() {
    const center = {
        lat: 52.48,
        lng: 13.42,
    };
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "REACT_APP_GOOGLE_MAPS_API_KEY",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div className="maps">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* Child components, such as markers, info windows, etc. */}
                <>
                    <Marker
                        className="marker"
                        latitude={52.48}
                        longitude={13.48}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <div>
                            <img
                                className="pinImg"
                                src={"/pin.png"}
                                alt="Logo"
                            />
                        </div>
                    </Marker>
                </>
            </GoogleMap>
        </div>
    ) : (
        <></>
    );
}

export default React.memo(Map);

// https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
// Refugio Café/Coordinates
// 52.4899° N, 13.4252° E
