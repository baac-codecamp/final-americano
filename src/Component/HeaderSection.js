import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import logo from "../Asset/Image/logo salak 2.png";
import logoSmall from "../Asset/Image/baaclogo.png";
import { menuList } from "../Asset/Data";
import { MenuOutlined } from "@ant-design/icons";

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      key: "0",
    };
  }

  // componentWillMount() {
  //   this.checkMenubar();
  // }

  UNSAFE_componentWillMount(){
    this.checkMenubar();

  }

  componentDidMount() {
    this.checkScoll();
    this.setMenubarBackground();
  }

  checkScoll = () => {
    document.addEventListener("scroll", this.setMenubarBackground);
  };

  setMenubarBackground = () => {
    let scroll = this.props.isHomePage ? 100 : 20;
    const isTop = window.scrollY < scroll;
    isTop !== this.state.isTop && this.setState({ isTop });
  };

  checkMenubar = () => {
    menuList.map((item, k) => {
      window.location.pathname.indexOf(item.url) >= 0 &&
        this.setState({ key: k.toString() });
    });
  };

  render() {
    const { Header } = Layout;
    let classNav = this.state.isTop ? "" : "ant-layout-header-nav";
    const menuItem = menuList.map((item, key) => (
      <Menu.Item key={key}>
        <Link to={item.url}>{item.name}</Link>
      </Menu.Item>
    ));
    const menu = <Menu>{menuItem}</Menu>;
    return (
      <Header
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        className={classNav}
      >
        <Link to={menuList[0].url}>
          <img src={logo} className="logo" />
          <img src={logoSmall} className="logo-small" />
        </Link>
        <Menu
          className="menubar"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.state.key]}
        >
          {menuItem}
        </Menu>
        <div className="menubar-small">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link dropdown"
              onClick={(e) => e.preventDefault()}
            >
              <MenuOutlined />
            </a>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
export default HeaderSection;
