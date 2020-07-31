import React from "react";
import { Layout } from "antd";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import InputFormCID from "../Component/InputFormCID";
import ResultFormCID from "../Component/ResultFormCID";
import { menuList } from "../Asset/Data";

class CheckSalakByCIDPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
    };
  }

  onSubmitForm = (cid, dateOfBirth) => {
    console.log("main page: ", cid, dateOfBirth);
    this.setState({ isSubmit: true });
  };

  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <Header isHomePage={false} />
        <div className="header-image-cover nav">
          <div className="header-image"></div>
        </div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 24 }}
        >
          <div className="title-page">{menuList[1].name}</div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {this.state.isSubmit ? (
              <ResultFormCID />
            ) : (
              <InputFormCID onSubmitForm={this.onSubmitForm} />
            )}
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
export default CheckSalakByCIDPage;
