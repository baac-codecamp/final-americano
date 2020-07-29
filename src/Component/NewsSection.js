import React from "react";
import { Row, Col, Card } from "antd";
import coverNews from '../Asset/Image/cover-news.png'

class NewsSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Meta } = Card;
    return (
      <Row gutter="16">
        <Col span={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={coverNews}
              />
            }
          >
            <Meta title="สลากออมทรัพย์ทวีสิน" description="ชุด เกษตรมั่นคง 3" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={coverNews}
              />
            }
          >
            <Meta title="สลากออมทรัพย์ทวีสิน" description="ชุด เกษตรมั่นคง 3" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={coverNews}
              />
            }
          >
            <Meta title="สลากออมทรัพย์ทวีสิน" description="ชุด เกษตรมั่นคง 3" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={coverNews}
              />
            }
          >
            <Meta title="สลากออมทรัพย์ทวีสิน" description="ชุด เกษตรมั่นคง 3" />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default NewsSection;
