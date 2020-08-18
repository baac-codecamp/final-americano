import React from "react";
import moment from "moment";
import "moment/min/moment-with-locales";
import "moment/locale/th";
import axios from "axios";
import { Divider, Row, Col } from "antd";
import { urlCheckSalakBySelf } from "../Asset/URL";
import { errorMsg } from "../Asset/Data";

class ResultFormSelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roundDate: this.props.roundDate,
      rewardList: {},
      message: "",
    };
  }

  componentDidMount() {
    this.getSalakBySelf();
  }

  getSalakBySelf = async () => {
    const body = {
      rewardAtDate: this.state.roundDate,
    };
    await axios
      .post(urlCheckSalakBySelf, body)
      .then((res) => {
        this.setState({ rewardList: res.data.response_data });
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ message: errorMsg.notFoundData });
      });
  };

  render() {
    const { rewardList } = this.state;

    if (Object.keys(rewardList).length === 0) {
      return <div></div>;
    } else {
      let reward3_1 = [...rewardList.seq3.no].splice(0, 5);
      let reward3_2 = [...rewardList.seq3.no].splice(5, 5);
      let reward4_1 = [...rewardList.seq4.no].splice(0, 5);
      let reward4_2 = [...rewardList.seq4.no].splice(5, 5);
      let reward4_3 = [...rewardList.seq4.no].splice(10, 5);
      let reward4_4 = [...rewardList.seq4.no].splice(15, 5);
      let reward5_1 = [...rewardList.seq5.no].splice(0, 5);
      let reward5_2 = [...rewardList.seq5.no].splice(5, 5);
      let reward5_3 = [...rewardList.seq5.no].splice(10, 5);
      let reward5_4 = [...rewardList.seq5.no].splice(15, 5);
      let reward5_5 = [...rewardList.seq5.no].splice(20, 5);
      let reward5_6 = [...rewardList.seq5.no].splice(25, 5);
      let reward5_7 = [...rewardList.seq5.no].splice(30, 5);
      let reward5_8 = [...rewardList.seq5.no].splice(35, 5);

      moment.locale("th");
      return (
        <div className="check-by-self">
          <Divider />
          <Row justify="center">
            <Col span="16">
              <h1 style={{ textAlign: "center" }}>
                ผลการออกรางวัลสลากออมทรัพย์งวดวันที่{" "}
                {moment(this.state.roundDate).format("LL")}
              </h1>
              <table>
                <tr>
                  <th>รางวัลที่ 1</th>
                  <th colSpan="3">รางวัลที่ 2</th>
                </tr>
                <tr>
                  {rewardList.seq1.no.map((item, key) => (
                    <td className="award1">{item}</td>
                  ))}
                  {rewardList.seq2.no.map((item, key) => (
                    <td className="award2">{item}</td>
                  ))}
                </tr>
              </table>
              <table style={{ marginTop: 10 }}>
                <tr>
                  <th colSpan="5">รางวัลที่ 3</th>
                </tr>
                <tr>
                  {reward3_1.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward3_2.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
              </table>
              <table style={{ marginTop: 10 }}>
                <tr>
                  <th colSpan="5">รางวัลที่ 4</th>
                </tr>
                <tr>
                  {reward4_1.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward4_2.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward4_3.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward4_4.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
              </table>
              <table style={{ marginTop: 10 }}>
                <tr>
                  <th colSpan="5">รางวัลที่ 5</th>
                </tr>
                <tr>
                  {reward5_1.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward5_2.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward5_3.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward5_4.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward5_5.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward5_6.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward5_7.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
                <tr>
                  {reward5_8.map((item, key) => (
                    <td className="award">{item}</td>
                  ))}
                </tr>
              </table>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default ResultFormSelf;
