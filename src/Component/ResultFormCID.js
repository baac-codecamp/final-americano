import React from "react";
import moment from "moment";
import { Form, InputNumber, Button, DatePicker, Row, Col } from "antd";

class ResultFormCID extends React.Component {
  constructor(props) {
    super(props);
  }

  onFinish = (values) => {
    console.log("Success:", values);
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const dateFormat = "DD/MM/YYYY";

    return (
      <Row justify="center" style={{ marginTop: 30 }}>
        <Col span={10}>
          asdfasdf
        </Col>
      </Row>
    );
  }
}

export default ResultFormCID;
