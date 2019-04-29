import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import "./index.css";

export const MapContainer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJpMlKrjQ6G9Jf7I8jp1RObNp4C7LvRJc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ margin: `32px 0px`, height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 37.33939, lng: -121.89496 }}>
    <Marker
      position={{ lat: 37.33739, lng: -121.89496 }}
      onClick={props.onMarkerClick}
    />
    <Marker
      position={{ lat: 37.33939, lng: -121.89696 }}
      onClick={props.onMarkerClick}
    />
    <Marker
      position={{ lat: 37.33919, lng: -121.89196 }}
      onClick={props.onMarkerClick}
    />
  </GoogleMap>
));
