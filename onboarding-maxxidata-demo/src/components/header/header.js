import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    PlusOutlined,
    UserOutlined,
    TeamOutlined,
    UsergroupDeleteOutlined
  } from '@ant-design/icons';
import DrawerForm from '../members/member/memberDrawer';
import DrawerTypeForm from '../type-members/type-member/typeMemberDrawer';
import { Layout, Menu, Breadcrumb, Col, Row, Avatar } from 'antd';
import './header.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderDemo = (props) => {
    const [collapsedState, setcollapsedState] = useState({
      collapsed: false
    })

    const onCollapse = collapsed => {
        setcollapsedState({collapsed});
    };

    const { collapsed } = collapsedState;
    return (

        <div className="Header">

            <Layout>
                <Row justify="end" theme="dark" style={{background: '#001529', opacity: '0.98'}}>
                    <Col pull={1} theme="dark">
                        <Menu id="xxxx" theme="dark" mode="horizontal">
                            <Menu.Item  key="1545454"><Avatar icon={<UserOutlined />} /></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Layout>

            <Layout style={{ minHeight: '100vh'}}>
                <Sider collapsible width="250" collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark"  mode="inline">
                    <SubMenu key="01545454" icon={<UserOutlined />} title="Members">
                    <Menu.Item key="222165456" icon={<PlusOutlined />} onClick={props.addMember}>Add Member</Menu.Item>
                    </SubMenu>
                    <SubMenu key="31111554" icon={<TeamOutlined />} title="Members Type">
                    <Menu.Item key="58989898" icon={<PlusOutlined />} onClick={props.addTypeMember}>Add Member Type</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                {props.children}
                <DrawerForm title={props.title} visible={props.visible} onClose={props.onClose}></DrawerForm>
                <DrawerTypeForm title={props.title} visible={props.tVisible} onClose={props.tOnClose}></DrawerTypeForm>
            </Layout>
        </div>
    );
}

  export default SiderDemo;

/* class SiderDemo extends React.Component {
  const [collapsedState, setcollapsedState] = useState({
    collapsed: false
  })

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (

        <div>

            <Layout>
                <Menu id="xxxx" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Row justify="end">
                        <Col pull={1}>
                            <Menu.Item key="1"><Avatar icon={<UserOutlined />} /></Menu.Item>
                        </Col>
                    </Row>
                </Menu>
            </Layout>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Members">
                    <Menu.Item key="1" icon={<UserOutlined />}>Members</Menu.Item>
                    <Menu.Item key="2" icon={<PlusOutlined />} onClick={props.addMember}>Add Member</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Members Type">
                    <Menu.Item key="3" icon={<UsergroupDeleteOutlined />}>Members Type</Menu.Item>
                    <Menu.Item key="4" icon={<PlusOutlined />}>Add Member Type</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                {this.props.children}
                <DrawerForm title={props.title} visible={props.visible} onClose={props.onClose}></DrawerForm>
            </Layout>
        </div>
    );
  }
}

export default SiderDemo; */