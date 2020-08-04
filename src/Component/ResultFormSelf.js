import React from "react";
import { Divider, Row, Col } from "antd";

class ResultFormSelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateOfRound: "16 มิถุนายน 2563",
    };
  }

  render() {
    return (
      <div className="check-by-self">
        <Divider />
        <Row justify="center">
          <Col span="16">
            <h1 style={{ textAlign: "center" }}>
              ผลการออกรางวัลสลากออมทรัพย์งวดวันที่ {this.state.dateOfRound}
            </h1>
            <table>
              <tr>
                <th>รางวัลที่ 1</th>
                <th colSpan="3">รางวัลที่ 2</th>
              </tr>
              <tr>
                <td className="award1">7440752</td>
                <td className="award2">1311380</td>
                <td className="award2">4706126</td>
                <td className="award2">8460534</td>
              </tr>
            </table>
            <table style={{ marginTop: 10 }}>
              <tr>
                <th colSpan="5">รางวัลที่ 3</th>
              </tr>
              <tr>
                <td className="award">1598632</td>
                <td className="award">4782646</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
            </table>
            <table style={{ marginTop: 10 }}>
              <tr>
                <th colSpan="5">รางวัลที่ 4</th>
              </tr>
              <tr>
                <td className="award">1598632</td>
                <td className="award">4782646</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">1598632</td>
                <td className="award">4782646</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
            </table>
            <table style={{ marginTop: 10 }}>
              <tr>
                <th colSpan="5">รางวัลที่ 5</th>
              </tr>
              <tr>
                <td className="award">1598632</td>
                <td className="award">4782646</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">1598632</td>
                <td className="award">4782646</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">1598632</td>
                <td className="award">4782646</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">1598632</td>
                <td className="award">4782646</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
              <tr>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
                <td className="award">1311380</td>
                <td className="award">4706126</td>
                <td className="award">8460534</td>
              </tr>
            </table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultFormSelf;
