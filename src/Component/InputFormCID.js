import React from "react";
import moment from "moment";
import { Form, InputNumber, Button, DatePicker, Row, Col } from "antd";
import { dateFormat } from "../Asset/Data";

class InputFormCID extends React.Component {
  constructor(props) {
    super(props);
  }

  onFinish = (values) => {
    console.log("onFinish:", values);
    this.props.onSubmitForm(values.cid, values.dateofbirth);
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const today = new Date();

    return (
      <Row justify="center" style={{ marginTop: 30 }}>
        <Col span={10}>
          <Form
            {...layout}
            name="cidform"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              label="หมายเลขบัตรประชาชน"
              name="cid"
              rules={[
                { required: true, message: "กรุณากรอกหมายเลขบัตรประชาชน" },
              ]}
            >
              <InputNumber maxLength="13" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="วัน/เดือน/ปีเกิด"
              name="dateofbirth"
              rules={[
                { required: true, message: "กรุณาเลือก วัน/เดือน/ปีเกิด" },
              ]}
            >
              <DatePicker
                defaultValue={moment(today, dateFormat)}
                format={dateFormat}
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                ตรวจ
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default InputFormCID;
