import React from "react";
import image from "../phonebook.svg.png";

const Home = () => {
  return (
    <div className="addPanel">
      <img src={image} width={"400px"} alt="" />
      <h2>Best Phonebook App</h2>
    </div>
  );
};

export default Home;
