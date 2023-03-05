import axios from "axios";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export const getDirection = async (pickupCoordinates, dropoffCoordinates) => {
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${mapboxgl.accessToken}`;
  const result = await axios.get(url);
  return result;
};

export const getLocationName = async (lng, lat) => {
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`);
  const data = await response.json();

  const location = data.features[0].place_name;
  const parts = location.split(",");
  const locationName = `${parts[parts.length - 3]}, ${parts[parts.length - 2]}, ${parts[parts.length - 1]}`;

  return locationName;
};
