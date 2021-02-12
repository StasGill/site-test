import React from "react";
import image from "../phonebook.svg.png";

const Home = () => {
  return (
    <div className="addPanel">
      <img src={image} width={"400px"} alt="" />
      <h2>
        Best Phonebook App
        <br /> Please Sign In or Register for use it
      </h2>
    </div>
  );
};

export default Home;
