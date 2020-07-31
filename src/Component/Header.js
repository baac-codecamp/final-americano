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
      key: "0",
    };
  }

  componentWillMount() {
    this.checkMenubar();
  }

  componentDidMount() {
    this.checkScoll();
  }

  checkScoll = () => {
    document.addEventListener("scroll", () => {
      let scroll = this.props.isHomePage ? 100 : 20;
      const isTop = window.scrollY < scroll;
      isTop !== this.state.isTop && this.setState({ isTop });
    });
  };

  checkMenubar = () => {
    menuList.map((item, k) => {
      item.url === window.location.pathname &&
        this.setState({ key: k.toString() });
    });
  };

  render() {
    const { Header } = Layout;
    let classNav = this.state.isTop ? "" : "ant-layout-header-nav";
    return (
      <Header
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        className={classNav}
      >
        <Link to={menuList[0].url}>
          <img src={logo} className="logo" />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.state.key]}
        >
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
