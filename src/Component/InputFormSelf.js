import React from "react";
import moment from "moment";
import axios from "axios";
import { Form, Dropdown, Button, Row, Col, Menu, Alert } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { urlListRewardAtDate } from "../Asset/URL";
import {
  errorMsg,
  labelMsg,
  listRewardAtDate,
  dateFormatAPI,
} from "../Asset/Data";

class InputFormSelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roundDateList: [],
      roundDate: "",
      message: "",
      isDisable: true,
      selectedRound: "ทั้งหมด",
    };
  }

  componentDidMount() {
    this.getRoundDate();
  }

  getRoundDate = () => {
    axios
      .get(urlListRewardAtDate)
      .then((res) => {
        console.log(res);
        console.log(res.data.response_data.ListRewardAtDate);
        this.setState({ roundDateList: res.data.response_data.ListRewardAtDate });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: errorMsg.notConnectServer });
      });
  };

  onFinish = () => {
    this.props.onSubmitForm(this.state.roundDate);
  };

  handleMenuClick = (e) => {
    console.log(e);
    this.setState({
      roundDate: e.key,
      isDisable: false,
      selectedRound: moment(e.key).format("ll"),
    });
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { span: 24 },
    };
    const dropdownList = (
      <Menu onClick={this.handleMenuClick}>
        {this.state.roundDateList.map((item, key) => {
          const shortDate = moment(item).format("ll");
          const datekey = moment(item).format(dateFormatAPI);
          return <Menu.Item key={datekey}>{shortDate}</Menu.Item>;
        })}
      </Menu>
    );

    return (
      <div>
        {this.state.message !== "" && (
          <Alert message={this.state.message} type="error" banner />
        )}
        <Row justify="center" style={{ marginTop: 30 }}>
          <Col span={10}>
            <Form
              {...layout}
              name="cidform"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item label={labelMsg.roundDate} name="dateOfRound">
                <Dropdown overlay={dropdownList}>
                  <Button style={{ width: "200px" }}>
                    {this.state.selectedRound}
                    <DownOutlined
                      style={{ float: "right", lineHeight: "27px" }}
                    />
                  </Button>
                </Dropdown>
              </Form.Item>

              <Form.Item {...tailLayout} style={{ textAlign: "center" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={this.state.isDisable}
                >
                  ตรวจ
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default InputFormSelf;
