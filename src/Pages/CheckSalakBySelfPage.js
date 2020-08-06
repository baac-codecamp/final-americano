import React from "react";
import { Layout } from "antd";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import InputFormSelf from "../Component/InputFormSelf";
import ResultFormSelf from "../Component/ResultFormSelf";
import { menuList } from "../Asset/Data";

class CheckSalakByCIDPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      roundDate: "",
    };
  }

  onSubmitForm = (date) => {
    this.setState({ isSubmit: true, roundDate: date });
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
          <div className="title-page">{menuList[2].name}</div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <InputFormSelf onSubmitForm={this.onSubmitForm} />
            {this.state.isSubmit && (
              <ResultFormSelf roundDate={this.state.roundDate} />
            )}
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
export default CheckSalakByCIDPage;
