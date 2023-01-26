import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: window.innerWidth,
  height: window.innerHeight,
  position: "absolute",
};

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2hhbmlmbWhkIiwiYSI6ImNsZGNlcWEwNzBhMDkzc21pN3cwcWhuMmcifQ.1eOl_qr3K0NfDSBj2znGoA"; // Set your mapbox token here

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [0, 0],
        zoom: 5,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default Map;
