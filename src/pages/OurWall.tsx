import { Header } from "../components/Header";
import React from "react";
import Wall from "@vouchpanel/react";

const OurWall = (props: {}) => {
  return (
    <div>
      <Header></Header>
      <Wall id={"4"} darkMode="off"></Wall>
    </div>
  );
};

export default OurWall;
