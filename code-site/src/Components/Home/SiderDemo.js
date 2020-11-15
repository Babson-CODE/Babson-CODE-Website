import React from "react";
import { Layout, Menu, Breadcrumb, Collapse, Avatar, Badge } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { HashRouter, Route } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <React.Fragment>
        <Layout>
            <Header className="header" >
            <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Data</Menu.Item>
                <Menu.Item key="3" style={{marginRight:'auto'}}>Newsletter/Events</Menu.Item>
                <Menu.Item key="4" style={{float: 'right'}}>
                  <span className="avatar-item">
                    <Badge count={1}>
                      <Avatar icon={<UserOutlined />} />
                    </Badge>
                  </span>
                </Menu.Item>
              </Menu>
            </Header>
          <Layout style={{ minHeight: "100vh"}}>

            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Web Development
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Machine Learning
                </Menu.Item>
                <Menu.Item
                  key="3"
                  icon={<FileOutlined />}
                  title="Machine Learning"
                >
                  Data Science
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Industries">
                  <Menu.Item key="4">Financial Services</Menu.Item>
                  <Menu.Item key="5">Healthcare</Menu.Item>
                  <Menu.Item key="6">Retail</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Reference">
                  <Menu.Item key="7">CS General</Menu.Item>
                  <Menu.Item key="8">By Language</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />} />
              </Menu>
            </Sider>
            <Layout className="site-layout" style={{marginLeft: 200}}>
              <Content
                className="site-layout-background"
                style={{

                  padding: 12,
                  minHeight: '100vh',
                  margin: '24px 16px 0', 
                  overflow: 'initial'
                }}
                >
                  <ResponsiveEmbed style={{ height: "100%", width: "100%" }}>
                    <iframe
                      src="https://codesandbox.io/embed/heuristic-tree-97pfk?fontsize=14&hidenavigation=1&theme=dark"
                      style={{
                        width: "100%",
                        height: "500px",
                        border: 0,
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                      title="heuristic-tree-97pfk"
                      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                  </ResponsiveEmbed>
              
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
          </Layout>
      </React.Fragment>
    );
  }
}

export default SiderDemo;
