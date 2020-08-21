import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewsCard from "../Component/NewsCard";
import FooterSection from "../Component/FooterSection";
import HeaderSection from "../Component/HeaderSection";
import { Layout, Button, Spin } from "antd";
import { menuList } from "../Asset/Data";
import { urlAllNews } from "../Asset/URL";
const { Content } = Layout;

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      isLoadSuccess: false,
      newList: [],
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    axios
      .get(urlAllNews)
      .then((res) => {
        const data = res.data.response_data;
        console.log(data);
        if (data) {
          this.setState({ newList: data, isLoadSuccess: true });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoadSuccess: true,
        });
      });
  };

  render() {
    return (
      <Layout>
        <HeaderSection isHomePage={true} />
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
              {this.state.isLoadSuccess ? (
                <NewsCard news={this.state.newList.slice(0, 4)} />
              ) : (
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <Spin size="large" />
                </div>
              )}
            </div>
          </div>
        </Content>

        <FooterSection />
      </Layout>
    );
  }
}
export default HomePage;
