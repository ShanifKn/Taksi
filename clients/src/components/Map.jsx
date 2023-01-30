import React, { useContext, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { LocationContext } from "../Context/locationContext";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const [pickupCoordinates, dropoffCoordinates] = useContext(LocationContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/shanifmhd/cldezr292001v01nwc45c2pps",
      center: [78.6569, 11.1271],
      zoom: 6,
    });
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 60,
      });
    }
  }, []);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className="flex-1 h-full w-full fixed" id="map" />;
};

export default Map;
