import React from "react";
import moment from "moment";
import { Form, Button, Row, Col, Table, Menu, Dropdown, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";

class ResultFormCID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: "X-XXXX-XXXX1-23-4",
      fullname: "นางสาวเอ็มม่า บูธ",
      dateOfBirth: "23/06/2533",
    };
  }

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
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
      wrapperCol: { offset: 8, span: 16 },
    };
    const dateFormat = "DD/MM/YYYY";
    const columns = [
      {
        title: "ลำดับ",
        dataIndex: "no",
        align: "center",
      },
      {
        title: "งวดที่",
        dataIndex: "round",
        align: "center",
      },
      {
        title: "ชุด",
        dataIndex: "set",
        align: "center",
      },
      {
        title: "หมายเลข",
        dataIndex: "number",
        align: "center",
      },
      {
        title: "จำนวนเงิน",
        dataIndex: "total",
        align: "center",
      },
    ];

    const data = [
      {
        key: "1",
        no: 1,
        round: "16/06/2563",
        set: "ASDF",
        number: "1234567890",
        total: "500 บาท",
      },
      {
        key: "2",
        no: 2,
        round: "16/06/2563",
        set: "ASDF",
        number: "1234567890",
        total: "500 บาท",
      },
      {
        key: "3",
        no: 3,
        round: "16/06/2563",
        set: "ASDF",
        number: "1234567890",
        total: "500 บาท",
      },
      {
        key: "4",
        no: 4,
        round: "16/06/2563",
        set: "ASDF",
        number: "1234567890",
        total: "500 บาท",
      },
    ];

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Row justify="center" style={{ marginTop: 30 }}>
          <Col span={10}>
            <Form {...layout} name="cidresult">
              <Form.Item label="หมายเลขบัตรประชาชน" name="cid">
                <span>{this.state.cid}</span>
              </Form.Item>
              <Form.Item label="ชื่อ-นามสกุล" name="cid">
                <span>{this.state.fullname}</span>
              </Form.Item>
              <Form.Item label="วัน/เดือน/ปีเกิด" name="cid">
                <span>{this.state.dateOfBirth}</span>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Divider />
        <Row justify="center" gutter="64">
          <Col>
            <span className="mr-10">งวดที่ :</span>
            <Dropdown overlay={menu}>
              <Button>
                ทั้งหมด <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
          <Col>
            <span className="mr-10">ชุดที่ :</span>
            <Dropdown overlay={menu}>
              <Button>
                ทั้งหมด <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 30 }}>
          <Col style={{ width: "100%" }}>
            <Table
              columns={columns}
              dataSource={data}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultFormCID;
