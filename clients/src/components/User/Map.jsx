import React, { useContext, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationContext } from "../../Context/locationContext";
import axios from "axios";
import { getDirection } from "../../api/getLocationCoordinates";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/shanifmhd/cldkoobkv002i01o5kg04zcoe",
      style: "mapbox://styles/shanifmhd/cldztzhx4001y01qmjjh0n0vt",
      center: [76.6413, 10.1632],
      zoom: 7,
    });

    map.on("load", async () => {
      // let routesPoint2;
      // let routesPoint1;

      if (pickupCoordinates && dropoffCoordinates) {
        console.log("pick", pickupCoordinates);
        console.log("dropoff", dropoffCoordinates);

        await getDirection(pickupCoordinates, dropoffCoordinates)
          .then((result) => {
            console.log(result);
            if (result.data.routes.length > 0) {
              const newDirections = result.data.routes[0].geometry;
              if (newDirections !== directions) {
                setDirections(newDirections);
              }
            }

            // setDirections(result.data.routes[0].geometry);
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
          })
          .then(() => {
            addToMap(map, pickupCoordinates);
            addToMap(map, dropoffCoordinates);
          });

        // if (result.data.routes.length > 0) {
        //
        // }
      }
      if (pickupCoordinates) {
        // addToMap(map, pickupCoordinates);
      }

      if (dropoffCoordinates) {
        // addToMap(map, dropoffCoordinates);
      }
    });
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    // eslint-disable-next-line no-unused-vars
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className="flex-1 h-full w-full fixed" id="map" />;
};

export default Map;
