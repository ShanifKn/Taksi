import React, { useContext, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationContext } from "../../Context/locationContext";
import axios from "axios";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/shanifmhd/cldkoobkv002i01o5kg04zcoe",
      center: [76.6413, 10.1632],
      zoom: 7,
    });

    map.on("load", async () => {
      if (pickupCoordinates && dropoffCoordinates) {

        console.log(`pickupCoordinates`)

        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${mapboxgl.accessToken}`;
        const result = await axios.get(url);

        console.log(result.data.routes)

        setDirections(result.data.routes[0].geometry);

        const routeLayer = {
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: directions,
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#888",
            "line-width": 8,
          },
        };

        map.addLayer(routeLayer);
      }
      if (pickupCoordinates) {
        addToMap(map, pickupCoordinates);
      }
      if (dropoffCoordinates) {
        addToMap(map, dropoffCoordinates);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    // eslint-disable-next-line no-unused-vars
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className="flex-1 h-full w-full fixed" id="map" />;
};

export default Map;
