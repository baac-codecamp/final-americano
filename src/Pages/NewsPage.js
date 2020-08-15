import React from "react";
import axios from "axios";
import { Layout, Pagination, Row, Col, Spin, Alert } from "antd";
import FooterSection from "../Component/FooterSection";
import HeaderSection from "../Component/HeaderSection";
import NewsCard from "../Component/NewsCard";
import { menuList, limitNews, errorMsg } from "../Asset/Data";
import { urlAllNews } from "../Asset/URL";

class NewsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 1,
      minValue: 0,
      maxValue: limitNews,
      newList: [],
      isLoadSuccess: false,
      message: "",
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

  handleChange = (value) => {
    console.log(value);
    this.setState({
      minValue: (value - 1) * limitNews,
      maxValue: value * limitNews,
    });
  };

  render() {
    const { Content } = Layout;
    const { newList } = this.state;

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
            {this.state.isLoadSuccess ? (
              <div>
                <NewsCard
                  news={newList.slice(this.state.minValue, this.state.maxValue)}
                />

                {newList.length > 0 && (
                  <Row justify="center">
                    <Col>
                      <Pagination
                        defaultCurrent={this.state.current}
                        defaultPageSize={limitNews}
                        onChange={this.handleChange}
                        total={newList.length}
                      />
                    </Col>
                  </Row>
                )}
              </div>
            ) : (
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <Spin size="large" />
              </div>
            )}
          </div>
        </Content>
        <FooterSection />
      </Layout>
    );
  }
}
export default NewsPage;
