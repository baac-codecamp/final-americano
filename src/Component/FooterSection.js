import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

class FooterSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Footer>
        <div style={{ color: "#49AF49", fontSize: "16px", fontWeight: "600" }}>
          ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร
        </div>
        <div style={{ color: "#49AF49" }}>
          Bank for Agriculture and Agricultural Cooperatives
        </div>
        <div>
          เลขที่ 2346 ถนนพหลโยธิน แขวงเสนานิคม เขตจตุจักร กรุงเทพฯ 10900
        </div>
        <div style={{ fontSize: "16px" }}>
          call-center:{" "}
          <a href="tel:02-555-0555" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
            02-555-0555
          </a>
        </div>
      </Footer>
    );
  }
}

export default FooterSection;
