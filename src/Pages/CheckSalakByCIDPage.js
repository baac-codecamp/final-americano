import React from "react";
import axios from "axios";
import { Layout } from "antd";
import FooterSection from "../Component/FooterSection";
import Header from "../Component/Header";
import InputFormCID from "../Component/InputFormCID";
import ResultFormCID from "../Component/ResultFormCID";
import { menuList } from "../Asset/Data";
import { urlCheckSalakByCID } from "../Asset/URL";

class CheckSalakByCIDPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      resultData: {},
    };
  }

  onSubmitForm = async (cid, bod) => {
    const user = {
      cid: cid,
      bod: bod,
    };

    console.log(user);
    this.setState({ isSubmit: true });


    // let data = await axios
    //   .post(urlCheckSalakByCID, user)
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({ isSubmit: true });
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
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
