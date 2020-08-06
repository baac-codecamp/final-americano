import React from "react";
import moment from "moment";
import { Form, Row, Col, Table, Divider } from "antd";
import { columns } from "../Asset/ColumnCID";
import { resultData, dateFormat, labelMsg } from "../Asset/Data";

class ResultFormCID extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  render() {
    const layout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    };

    const { cid, cif, cusName, bod, arrReward } = resultData;
    const date = moment(bod).format(dateFormat);
    const data = [];

    const dataReward = arrReward.map((item, key) => {
      data.push({
        key: item.accNo,
        no: key + 1,
        rewardAtDate: moment(item.rewardAtDate).format(dateFormat),
        accType: item.accType,
        salakNo: `${item.salakNoStart} - ${item.salakNoEnd}`,
        rewardNo: item.rewardNo,
        rewardAtSeq: item.rewardAtSeq,
        rewardPrice: item.rewardPrice,
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
      </div>
    );
  }
}

export default ResultFormCID;
