import React from "react";
import { Layout } from "antd";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import InputFormCID from "../Component/InputFormCID";
import ResultFormCID from "../Component/ResultFormCID";
import { checkSalakByCID } from "../Asset/Wording";

class CheckSalakByCIDPage extends React.Component {
  constructor(props) {
    super(props);
    this.status = {
      isSubmitForm: false,
    };
  }
  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <Header isHomePage={false} />
        <div className="header-image-cover nav">
          <div className="header-image">
          </div>
        </div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 24 }}
        >
              <div className="title-page">{checkSalakByCID}</div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {/* {this.state.isSubmitForm ? <ResultFormCID /> : <InputFormCID />} */}
            <InputFormCID />
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
export default CheckSalakByCIDPage;
