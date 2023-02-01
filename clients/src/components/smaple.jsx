const directions = async () => {
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}.json?access_token=${mapboxgl.accessToken}`;
      const response = await axios.get(url);
      const direction = response.routes[0].geometry;
      setDirection(direction);
    };
    directions();

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