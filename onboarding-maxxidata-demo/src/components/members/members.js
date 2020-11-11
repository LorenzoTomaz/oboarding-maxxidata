import React from 'react';
import Member from './member/member';
import Modal from '../modal/modal';
import { Layout, Menu, Breadcrumb, Drawer,Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';


const members = (props) => {
    /* console.log('props.data');
    console.log(props.data); */
    return (

        props.data.map( member => {
            /* console.log('member');
            console.log(member); */
            return (
              <Col key={member.id} className="gutter-row" span={24} offset={12}  justify="center">
                <Member  clicked={props.clicked} editData={() => props.editData(member)} name={member.nome} showModal={() => props.modal(member)}></Member>
                <Modal visible={props.visible} handleOk={props.handleOk} onCancel={props.onCancel} data={props.modalData} title={props.title}></Modal>
                <br></br>
              </Col>
        )})
    )
}

export default members;