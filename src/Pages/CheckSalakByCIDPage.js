import React from "react";
import axios from "axios";
import { Layout, Alert } from "antd";
import FooterSection from "../Component/FooterSection";
import HeaderSection from "../Component/HeaderSection";
import InputFormCID from "../Component/InputFormCID";
import ResultFormCID from "../Component/ResultFormCID";
import { menuList, errorMsg } from "../Asset/Data";
import { urlCheckSalakByCID } from "../Asset/URL";

class CheckSalakByCIDPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      resultData: {},
      message: "",
    };
  }

  onSubmitForm = async (cid, bod) => {
    const user = {
      cid: cid,
      bod: bod,
    };

    await axios
      .post(urlCheckSalakByCID, user)
      .then((res) => {
        const data = res.data;
        if (data.response_status == "success") {
          this.setState({
            resultData: data.response_data,
            isSubmit: true,
            message: "",
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ message: errorMsg.notFoundData });
      });
  };

  render() {
    const { Content } = Layout;
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
          <div className="title-page">{menuList[1].name}</div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {this.state.message !== "" && (
              <Alert message={this.state.message} type="error" banner />
            )}
            {this.state.isSubmit ? (
              <ResultFormCID result={this.state.resultData} />
            ) : (
              <InputFormCID onSubmitForm={this.onSubmitForm} />
            )}
          </div>
        </Content>
        <FooterSection />
      </Layout>
    );
  }
}
export default CheckSalakByCIDPage;
