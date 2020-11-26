import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import videBg from '../../components/Video/video_bg_720.mp4';

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, loggedIn }) => (
  <>
    <Navbar loggedIn={loggedIn} />
    <SideDrawer loggedIn={loggedIn} />
      <video
          autoPlay
          loop
          muted
          style={
              {
                  position: "fixed",
                  width: "100%",
                  left: "50%",
                  top: "50%",
                  height: "100%",
                  objectFit: "cover",
                  transform:"translate(-50%,-50%)",
                  zIndex: "-1",
                  // filter: "brightness(20%)"
              }

          }
      >
          <source src={videBg} type="video/mp4"/>
      </video>

    <MainWrapper>
        {children}
    </MainWrapper>
  </>
);

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(Layout);
