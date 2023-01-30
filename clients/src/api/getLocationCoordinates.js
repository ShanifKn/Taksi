const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `${process.env.REACT_APP_MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
  try {
    const response = await fetch(mapboxUrl);
    const data = await response.json();
    res.status(200).send({ message: "success", data: data });
    console.log(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "error", data: err.message });
  }
};

export default getLocationCoordinates;
