const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `${process.env.REACT_APP_MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

  try {
    console.log(req.body.location);
    const response = await fetch(mapboxUrl);
    console.log(response);
    const data = await response.json();

    res.status(200).send({ message: "success", data: data });
  } catch (err) {
    res.status(500).send({ message: "error", data: err.message });
  }
};

export default getLocationCoordinates;
