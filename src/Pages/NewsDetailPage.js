import React from "react";
import axios from "axios";
import { Layout, Alert } from "antd";
import FooterSection from "../Component/FooterSection";
import HeaderSection from "../Component/HeaderSection";
import { menuList, errorMsg } from "../Asset/Data";
import { urlAllNewsById } from "../Asset/URL";
const { Content } = Layout;

class NewsDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
      message: "",
      isLoadSuccess: false,
    };
  }

  componentDidMount() {
    this.getNewsById();
  }

  getNewsById = () => {
    const id = this.props.match.params.id;
    console.log("id :", id);
    const url = urlAllNewsById + id;

    axios
      .get(url)
      .then((res) => {
        const data = res.data.response_data;
        console.log(data);
        if (data) {
          this.setState({ news: data, isLoadSuccess: true });
        } else {
          this.setState({
            message: errorMsg.notFoundData,
            isLoadSuccess: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          message: errorMsg.notConnectServer,
          isLoadSuccess: true,
        });
      });
  };

  render() {
    const { title, imgUrl, desc } = this.state.news;
    return (
      <Layout>
        <HeaderSection isHomePage={false} />
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
            {this.state.message !== "" && (
              <Alert message={this.state.message} type="error" banner />
            )}
            <div className="news-detail">
              <div className="title">{title}</div>
              <img src={imgUrl} />
              <div className="description">{desc}</div>
            </div>
          </div>
        </Content>
        <FooterSection />
      </Layout>
    );
  }
}
export default NewsDetailPage;
