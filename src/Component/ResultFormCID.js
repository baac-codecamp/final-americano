import React from "react";
import moment from "moment";
import { Form, Row, Col, Table, Divider, Modal, Button } from "antd";
import { columns } from "../Asset/ColumnCID";
import { dateFormat, labelMsg } from "../Asset/Data";

class ResultFormCID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  converMoneyFormat = (price) => {
    return new Intl.NumberFormat("bt-TH", {
      maximumSignificantDigits: 3,
    }).format(price);
  };

  render() {
    const layout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    };
    const tailLayout = {
      wrapperCol: { offset: 10, span: 14 },
    };

    const { cid, cusName, bod, arrReward } = this.props.result;
    const date = moment(bod).format("LL");
    let data = [];

    arrReward.map((item, key) => {
      console.log(this.converMoneyFormat(item.rewardPrice))
      data.push({
        key: key,
        no: key + 1,
        rewardAtDate: moment(item.rewardAtDate).format(dateFormat),
        accType: item.accType,
        salakNo: `${item.salakNoStart} - ${item.salakNoEnd}`,
        rewardNo: item.rewardNo,
        rewardAtSeq: item.rewardAtSeq,
        rewardPrice: this.converMoneyFormat(item.rewardPrice),
      });
    });

    return (
      <div>
        <Row justify="center" style={{ marginTop: 30 }}>
          <Col span={10}>
            <Form {...layout} name="cidresult">
              <Form.Item label={labelMsg.cid} name="cid">
                <span>{cid}</span>
              </Form.Item>
              <Form.Item label={labelMsg.name} name="cusName">
                <span>{cusName}</span>
              </Form.Item>
              <Form.Item label={labelMsg.bod} name="bod">
                <span>{date}</span>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  onClick={() => window.location.reload(false)}
                >
                  ค้นหาอีกครั้ง
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Divider />
        <Row justify="center" style={{ marginTop: 30 }}>
          <Col style={{ width: "100%" }}>
            <Table
              columns={columns}
              dataSource={data}
              onChange={this.onChange}
            />
          </Col>
        </Row>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ResultFormCID;
