import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "../Component/NewsCard";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { Layout, Button } from "antd";
import { menuList, newsList } from "../Asset/Data";

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
              <Button className="btn-header-section" size="large">
                <Link to={menuList[1].url}>{menuList[1].name}</Link>
              </Button>
              <Button className="btn-header-section" size="large">
                <Link to={menuList[2].url}>{menuList[2].name}</Link>
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
            <div className="home-title">
              <div className="title-text">{menuList[3].name}</div>
            </div>
            <div style={{ marginTop: 24 }}>
              <NewsCard news={newsList.slice(0, 4)} />
            </div>
          </div>
        </Content>

        <Footer />
      </Layout>
    );
  }
}
export default HomePage;
