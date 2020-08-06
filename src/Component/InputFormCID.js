import React from "react";
import moment from "moment";
import { Form, InputNumber, Button, DatePicker, Row, Col } from "antd";
import {
  dateFormat,
  dateFormatAPI,
  requiredMsg,
  validateMsg,
  labelMsg,
} from "../Asset/Data";

class InputFormCID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  disabledDate(current) {
    return current && current > moment().endOf("day");
  }

  onFinish = (values) => {
    const bod = moment(values.dateOfbirth._d);
    this.props.onSubmitForm(values.cid.toString(), bod.format(dateFormatAPI));
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
    const checkLength = (rule, value) => {
      if (!value) return;
      if (value.toString().length == 13) {
        return Promise.resolve();
      }
      return Promise.reject(validateMsg.cidLength);
    };

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
              label={labelMsg.cid}
              name="cid"
              rules={[
                {
                  required: true,
                  message: requiredMsg.cid,
                },
                { validator: checkLength },
              ]}
            >
              <InputNumber
                maxLength={13}
                minLength={13}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item
              label={labelMsg.bod}
              name="dateOfbirth"
              rules={[{ required: true, message: requiredMsg.bod }]}
            >
              <DatePicker
                defaultValue={moment(today, dateFormat)}
                format={dateFormat}
                disabledDate={this.disabledDate}
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
