import React from "react";
import NewsSection from "../Component/NewsSection";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { Layout, Button } from "antd";
import { menuList, checkSalakByCID, checkSalakBySelf } from "../Asset/Wording";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <Header isHomePage={true} />
        <div className="header-image-cover">
          <div className="header-image">
            <div className="header-content">
              <Button className="btn-header-section mr-40" size="large">
                {checkSalakByCID}
              </Button>
              <Button className="btn-header-section" size="large">
                {checkSalakBySelf}
              </Button>
            </div>
          </div>
        </div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 24 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <div className="title">
              <div className="title-text">{menuList[3].name}</div>
            </div>
            <div style={{ marginTop: 24 }}>
              <NewsSection />
            </div>
          </div>
        </Content>

        <Footer />
      </Layout>
    );
  }
}
export default HomePage;
