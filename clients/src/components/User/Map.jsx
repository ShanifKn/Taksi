import React, { useContext, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationContext } from "../../Context/locationContext";
import { getDirection } from "../../api/getLocationCoordinates";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/shanifmhd/cldztzhx4001y01qmjjh0n0vt",
      center: [76.6413, 10.1632],
      zoom: 7,
    });

    map.on("load", async () => {
      const bounds = new mapboxgl.LngLatBounds();

      if (pickupCoordinates && dropoffCoordinates) {
        await getDirection(pickupCoordinates, dropoffCoordinates).then(
          (result) => {
            const routeLayer = {
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: {
                  type: "Feature",
                  properties: {},
                  geometry: result.data.routes[0].geometry,
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
        );
      }
      if (pickupCoordinates) {
        addToMap(map, pickupCoordinates);
        bounds.extend(pickupCoordinates);
      }

      if (dropoffCoordinates) {
        addToMap(map, dropoffCoordinates);
        bounds.extend(dropoffCoordinates);
      }
      addBoundsToMap(map, bounds);
    });
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    // eslint-disable-next-line no-unused-vars
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  const addBoundsToMap = (map, bounds) => {
    map.fitBounds(bounds, { padding: 20 });
  };

  return <div className="flex-1 h-full w-full fixed" id="map" />;
};

export default Map;
