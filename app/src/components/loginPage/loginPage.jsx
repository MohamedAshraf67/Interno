import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

import "./loginPage.css";

class LoginPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }

  render() {
    
    return (
          <div data-layer="8cfe587f-1969-4dfe-a1f1-2785532b5869" className="loginPage">        
        <div data-layer="eb2454f3-dd5b-4821-bc79-e69f0da08eb1" className="rectangle23"></div>
        <div data-layer="88f0071f-3652-4dfa-94f8-9a09166a718a" className="userLogin">User Login</div>
        <div data-layer="415a5e7c-7b94-45cb-b215-242f2fa39305" className="rectangle24"></div>
        <div data-layer="580a7bef-a1d8-4381-ab6c-98d6ceea419f" className="rectangle25"></div>
        <div data-layer="2e5c3437-4d80-409a-aa02-17352f7227ee" className="rectangle26"></div>
        <div data-layer="b1404ca9-1971-42c0-8617-c7d7023dbeba" className="login">Login</div>
        <div data-layer="f176a9a2-ed25-4835-9462-f586f3ff15d8" className="usericonblack01"></div>
        <div data-layer="f38102b4-917d-41c7-ac91-655d562b8745" className="lockpasswordprotectsafetysecurityicon1320086045132546966"></div>
        <div data-layer="fb3a600f-956e-4fa0-9292-cc8e6b5588f4" className="username">Username</div>
        <div data-layer="a8a2943f-bf13-4216-852b-cafc67558e1f" className="password">Password</div>
        <div data-layer="9c237e46-e659-4776-a2c5-e88cdbec8deb" className="accountLoginPasswordKeyComputerManNearVectorMaleCharacterDesignConceptLandingPageWebPosterBanner184009994"></div>
</div>

    );
  }
}

LoginPage.propTypes = {

}

LoginPage.defaultProps = {

}


export default LoginPage;