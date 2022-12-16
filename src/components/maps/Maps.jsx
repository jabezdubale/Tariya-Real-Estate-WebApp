import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./maps.scss"
import useAxios from "axios-hooks";

const containerStyle = {
  width: "100%",
  height: "100%"
};
const center = {
  lat: 8.980603,
  lng: 38.757759
};

const Maps = () => {
  const [{ data, error, loading }] = useAxios(
    "https://tariya-real-estate.herokuapp.com/api/realestate/list"
  );

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="map">
      <LoadScript googleMapsApiKey="AIzaSyCjEqMzBylmXbesRR74V9AyIh2GvhSulPY">
      <GoogleMap
          center={center}
          mapContainerStyle={containerStyle}
          zoom={10}
        >
          {data.map((location) => {
            return (
              <Marker
                key={location.id}
                position={{
                  lat: parseFloat(location.locationLatitude),
                  lng: parseFloat(location.locationLongitude),
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;