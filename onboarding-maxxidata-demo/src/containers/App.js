
import React, {Component} from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Divider, Drawer,Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import Headers from '../components/header/header';
import { connect } from 'react-redux';
import Members from '../components/members/members';
import Member from '../components/members/member/member';
import TypeMembers from '../components/type-members/type-members';
import DrawerForm from '../components/members/member/memberDrawer';
import Modal from '../components/modal/modal';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
class App extends Component {
  state = {
    visible: false,
    mVisible: false,
    mTVisible: false,
    tVisible: false,
    typeMembers: [],
    members: [],
    modalData: {}
  };
  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/members')
      .then(res => {
        const members = res.data.items;
        this.props.newMembers(res.data.items)

      }).catch(err => {
        console.log(err);
      })
    axios.get('http://localhost:3000/api/v1/type_members')
      .then(res => {
        const typeMembers = res.data.items;
        this.props.newTypeMembers(res.data.items)
      }).catch(err => {
        console.log(err);
      })
  }

  settingClick = (member) => {
    this.setState({
      mVisible: true,
      modalData: member
    });
  };
  settingTypeClick = (type) => {
    this.setState({
      mTVisible: true,
      modalData: type
    });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showTypeDrawer = () => {
    this.setState({
      tVisible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  tOnClose = () => {
    this.setState({
      tVisible: false,
    });
  };

  showModal = () => {
    this.setState({
      mVisible: true,
    });
  };
  showTypeModal = () => {
    this.setState({
      mTVisible: true,
    });
  };
  handleOk = e => {

    this.setState({
      mVisible: false,
    });
  };
  handleTypeOk = e => {

    this.setState({
      mTVisible: false,
    });
  };
  handleCancel = e => {
    this.setState({
      mVisible: false,
    });
  };
  handleTypeCancel = e => {
    this.setState({
      mTVisible: false,
    });
  };
  render() {
    /* console.log('this.state.members');
    console.log(this.state.members); */
    return (
      <div className="App">
      <Headers addMember={this.showDrawer}  title="Add Member" visible={this.state.visible} onClose={this.onClose} tVisible={this.state.tVisible} tOnClose={this.tOnClose} addTypeMember={this.showTypeDrawer}>
        <Layout>

          <Content style={{ margin: '10px 16px' }}>

            <Divider>Members</Divider>
            <Row gutter={24} justify="center">
              <Members clicked={this.showDrawer} editData={(index) => this.settingClick(index)} modalData={this.state.modalData} data={this.props.members} visible={this.state.mVisible} handleOk={this.handleOk} onCancel={this.handleCancel} title="Members" modal={(index) => this.settingClick(index)}></Members>
            </Row>
            <br></br>
            <br></br>
            <Divider>Type Members</Divider>
            <Row gutter={24} justify="center">
              <TypeMembers clicked={this.showTypeDrawer} editData={(index) => this.settingTypeClick(index)} modalData={this.state.modalData} data={this.props.typeMembers} visible={this.state.mTVisible} handleOk={this.handleTypeOk} onCancel={this.handleTypeCancel} title="Type Members" modal={(index) => this.settingTypeClick(index)}></TypeMembers>
            </Row>
              {/* <DrawerForm title="Edit Member" visible={this.state.visible} onClose={this.onClose} ></DrawerForm> */}
          </Content>
        </Layout>
      </Headers>
    </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    members: state.members,
    typeMembers: state.typeMembers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMembers: (data) => dispatch({type: 'ADD_MEMBERS', data: data}),
    newMembers: (data) => dispatch({type: 'NEW_MEMBERS', data: data}),
    newTypeMembers: (data) => dispatch({type: 'NEW_TYPE_MEMBERS', data: data}),
    addTypeMembers: (data) => dispatch({type: 'ADD_TYPE_MEMBERS', data: data})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
