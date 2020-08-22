import React from "react";
import axios from "axios";
import { Layout, Alert, Modal } from "antd";
import FooterSection from "../Component/FooterSection";
import HeaderSection from "../Component/HeaderSection";
import InputFormCID from "../Component/InputFormCID";
import ResultFormCID from "../Component/ResultFormCID";
import { menuList, errorMsg } from "../Asset/Data";
import { urlCheckSalakByCID } from "../Asset/URL";
const { Content } = Layout;

class CheckSalakByCIDPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      resultData: {},
      message: "",
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onSubmitForm = async (cid, bod) => {
    const user = {
      cid: cid,
      bod: bod,
    };

    await axios
      .post(urlCheckSalakByCID, user)
      .then((res) => {
        const data = res.data;
        if (data.response_status === "success") {
          this.setState({
            resultData: data.response_data,
            isSubmit: true,
            message: "",
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ message: errorMsg.notFoundDataCID });
      });
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

          <Modal
            title="ขอแสดงความยินดี"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <div style={{ textAlign: "center" }}>
              <h1>คุณถูกรางวัลที่ 1</h1>
              <h1 className="alert-reward1">873286</h1>
              <p>งวดวันที่ 16 กรกฏาคม 2563</p>
            </div>
          </Modal>
        </Content>
        <FooterSection />
      </Layout>
    );
  }
}
export default CheckSalakByCIDPage;
