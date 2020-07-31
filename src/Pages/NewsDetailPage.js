import React from "react";
import { Layout, Row, Col } from "antd";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { menuList, newsList } from "../Asset/Data";

class NewsDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id :", id);
  }

  render() {
    const { Content } = Layout;
    const { title, imgCover, description } = newsList[0];
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
          <div className="title-page">{menuList[3].name}</div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <div className="news-detail">
              <div className="title">{title}</div>
              <img src={imgCover} />
              <div className="description">{description}</div>
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
export default NewsDetailPage;
