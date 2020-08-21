import React from "react";
import { Layout } from "antd";
import FooterSection from "../Component/FooterSection";
import HeaderSection from "../Component/HeaderSection";
import InputFormSelf from "../Component/InputFormSelf";
import ResultFormSelf from "../Component/ResultFormSelf";
import { menuList } from "../Asset/Data";
const { Content } = Layout;

class CheckSalakBySelfPage extends React.Component {
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

  resetIsSubmit = () => {
    this.setState({ isSubmit: false });
  };

  render() {
    return (
      <Layout>
        <HeaderSection isHomePage={false} />
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
            <InputFormSelf onSubmitForm={this.onSubmitForm} resetFlag={this.resetIsSubmit} />
            {this.state.isSubmit && (
              <ResultFormSelf roundDate={this.state.roundDate} />
            )}
          </div>
        </Content>
        <FooterSection />
      </Layout>
    );
  }
}
export default CheckSalakBySelfPage;
