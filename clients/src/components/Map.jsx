import React, { useContext, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationContext } from "../Context/locationContext";
import axios from "axios";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/shanifmhd/cldezr292001v01nwc45c2pps",
      center: [75.71389, 15.317277],
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

    // const distance = async () => {
    //   try {
    //     const url = `${process.env.REACT_APP_MAPBOX_DISTANCE_URL}/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?sources=0&destinations=1&annotations=distance&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
    //     const distancel = await axios.get(url);
    //     console.log(`distance: ${distancel}`);
    //   } catch (err) {
    //     // console.log(pickupCoordinates, dropoffCoordinates);
    //     console.log(err.message);
    //   }
    // };

    // distance();
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className="flex-1 h-full w-full fixed" id="map" />;
};

export default Map;
