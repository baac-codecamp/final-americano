import React from "react";
import moment from "moment";
import ConfettiGenerator from "confetti-js";
import { Form, Row, Col, Table, Divider, Modal, Button } from "antd";
import { columns } from "../Asset/ColumnCID";
import { dateFormat, labelMsg } from "../Asset/Data";

class ResultFormCID extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      rewardNo: "",
      rewardRoundDate: "",
    };
  }

  componentDidMount() {
    this.checkReward();
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  converMoneyFormat = (price) => {
    return new Intl.NumberFormat("bt-TH").format(price);
  };

  checkReward = () => {
    const { arrReward } = this.props.result;
    if (arrReward.lenght == 0) return;

    let nowMonth = new Date().getMonth() + 1;

    arrReward.map((item, key) => {
      let roundMonth = new Date(item.rewardAtDate).getMonth() + 1;

      if (nowMonth == roundMonth && item.rewardAtSeq == "1") {
        this.setState({
          visible: true,
          rewardNo: item.rewardNo,
          rewardRoundDate: moment(item.rewardAtDate).format("LL"),
        });
        setTimeout(() => {
          document.getElementsByClassName("ant-modal-mask")[0].innerHTML =
            '<canvas id="my-canvas"></canvas>';
          var confettiSettings = { target: "my-canvas" };
          var confetti = new ConfettiGenerator(confettiSettings);
          confetti.render();
        }, 500);
      }
    });
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
          title="ขอแสดงความยินดี"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div style={{ textAlign: "center" }}>
            <h1>คุณถูกรางวัลที่ 1</h1>
            <h1 className="alert-reward1">{this.state.rewardNo}</h1>
            <p>งวดวันที่ {this.state.rewardRoundDate}</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ResultFormCID;
