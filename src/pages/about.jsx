import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Layout from "../components/layout";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import MenuButton from "../components/MenuButton/MenuButton";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";


class AboutPage extends Component {

  state = {
    menuOpen: false
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };


  render() {
    const {
      location
      
    } = this.props;
    const { menuOpen } = this.state;
    return (
      <Layout location={location}>
        <Drawer className="author-template" isOpen={menuOpen}>
          <div className="about-container">
            <Helmet title={`About | ${config.siteTitle}`} />
            <Navigation config={config} onClose={this.handleOnClose} />
            <SiteWrapper>
              <div className="home-template">
                <MainHeader cover={config.siteCover}>
                  <MainNav overlay={config.siteCover}>
                    <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                    <MenuButton
                      navigation={config.siteNavigation}
                      onClick={this.handleOnClick}
                    />

                  </MainNav>
                </MainHeader>
                <About />
              </div>
            </SiteWrapper>
          </div>
        </Drawer>
        
      </Layout>
      
    );
  }
}

export default AboutPage;
