import React from "react";

import CustomLink from "../Atoms/CustomLink/CustomLink";

import "../index.css";

const Home = () => {
  return (
    <div className="verticalFlexBox">
      <CustomLink pageToLink="groups">View Group List</CustomLink>
      <CustomLink pageToLink="users">View User List</CustomLink>
    </div>
  );
};

export default Home;

Home.displayName = "Home";
