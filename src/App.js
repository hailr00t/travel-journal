import React from "react";
import Nav from "./components/Nav";
import Destination from "./components/Destination";
import data from "./data";

const destinations = data.map((destination) => {
  return <Destination key={destination.id} destination={destination} />;
});

export default function App() {
  return (
    <div>
      <Nav />
      {destinations}
    </div>
  );
}
