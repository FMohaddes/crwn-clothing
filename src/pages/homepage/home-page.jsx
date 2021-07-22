import React from 'react'
import Directory from "../../components/directory/directory";
import {HomePageContainer} from "./home-page.styles";

function HomePage() {
     // throw Error;
     return (
          <HomePageContainer>
              <Directory/>
          </HomePageContainer>
     );
}

export default HomePage;
