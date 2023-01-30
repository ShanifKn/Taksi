import React from "react";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import "../../styles/map.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/shanifmhd/cldezr292001v01nwc45c2pps",
      center: [78.6569, 11.1271],
      zoom: 6,
    });
  }, []);

  return <div className="main" id="map" />;
};

export default Map;
