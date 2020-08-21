import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row gutter="16">
        {this.props.news.map((item, key) => (
          <Col span={6} key={key} style={{ marginBottom: 30 }}>
            <Link to={{ pathname: "/news/" + item._id }}>
              <Card hoverable cover={<img src={item.imgUrl} />}>
                <Meta title={item.title} description={item.desc} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}

export default NewsCard;
