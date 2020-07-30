import React from "react";
import moment from "moment";
import { Form, Dropdown, Button, Row, Col, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

class InputFormSelf extends React.Component {
  constructor(props) {
    super(props);
  }

  onFinish = (values) => {
    console.log("Success:", values);
    this.props.onSubmitForm(values.cid, values.dateofbirth);
  };

  handleMenuClick = (e) => {
    console.log("click", e);
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { span: 24 },
    };
    const dateFormat = "DD/MM/YYYY";
    const dropdownList = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">16 ก.ค. 63</Menu.Item>
        <Menu.Item key="2">16 มิ.ย. 63</Menu.Item>
        <Menu.Item key="3">16 พ.ค. 63</Menu.Item>
      </Menu>
    );

    return (
      <Row justify="center" style={{ marginTop: 30 }}>
        <Col span={10}>
          <Form
            {...layout}
            name="cidform"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item label="เลือกงวด" name="dateOfRound">
              <Dropdown overlay={dropdownList}>
                <Button style={{ width: "200px" }}>
                  ทั้งหมด{" "}
                  <DownOutlined
                    style={{ float: "right", lineHeight: "27px" }}
                  />
                </Button>
              </Dropdown>
            </Form.Item>

            <Form.Item {...tailLayout} style={{ textAlign: "center" }}>
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

export default InputFormSelf;
