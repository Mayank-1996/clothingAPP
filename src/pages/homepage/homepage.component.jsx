import React from "react";
import Directory from "../../components/directory/directory.component";

// import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styled";

const HomePage = (props) => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
