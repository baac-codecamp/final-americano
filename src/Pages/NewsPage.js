import React from "react";
import { Layout, Pagination, Row, Col } from "antd";
import FooterSection from "../Component/FooterSection";
import Header from "../Component/Header";
import NewsCard from "../Component/NewsCard";
import { menuList, newsList, limitNews } from "../Asset/Data";

class NewsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 1,
      minValue: 0,
      maxValue: limitNews
    };
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({
      minValue: (value - 1) * limitNews,
      maxValue: value * limitNews
    });
  };

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
          <div className="title-page">{menuList[3].name}</div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <NewsCard news={newsList.slice(this.state.minValue, this.state.maxValue)} />

            <Row justify="center">
              <Col>
                <Pagination
                  defaultCurrent={this.state.current}
                  defaultPageSize={limitNews}
                  onChange={this.handleChange}
                  total={newsList.length}
                />
              </Col>
            </Row>
          </div>
        </Content>
        <FooterSection />
      </Layout>
    );
  }
}
export default NewsPage;
