import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../Asset/Image/logo salak 2.png";
import { menuList } from "../Asset/Wording";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      let scroll = this.props.isHomePage ? 400 : 20;
      const isTop = window.scrollY < scroll;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    const { Header } = Layout;
    let classNav = this.state.isTop ? "" : "ant-layout-header-nav";
    return (
      <Header
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        className={classNav}
      >
        <img src={logo} className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
          {menuList.map((item, key) => (
            <Menu.Item key={key}>
              <Link to={item.url}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    );
  }
}
export default Header;
