import React from "react";
import { Layout } from "antd";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { menuList } from "../Asset/Wording";

class CheckSalakBySelfPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <Header isHomePage={false} />
        <div className="header-image-cover nav">
          <div className="header-image"></div>
        </div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 24 }}
        >
          <div className="title-page">{menuList[2].name}</div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {menuList[2].name}
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
export default CheckSalakBySelfPage;
