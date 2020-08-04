import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Meta } = Card;
    return (
      <Row gutter="16">
        {this.props.news.map((item, key) => (
          <Col span={6} key={key} style={{ marginBottom: 30 }}>
            <Link to={{ pathname: "/news/" + item.id }}>
              <Card hoverable cover={<img src={item.imgCover} />}>
                <Meta title={item.title} description={item.description} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}

export default NewsCard;
