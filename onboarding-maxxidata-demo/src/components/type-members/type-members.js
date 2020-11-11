import React from 'react';
import TypeMember from './type-member/type-member';
import Modal from '../modal/typeModal';
import { Layout, Menu, Breadcrumb, Drawer,Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';


const typeMembers = (props) => {
    /* console.log('props.data');
    console.log(props.data); */
    return (

        props.data.map( type => {
            /* console.log('type');
            console.log(type); */
            let r = Math.random().toString(36).substring(10);
            return (
              <Col key={`${type.id}_${r}`} className="gutter-row" span={24} offset={12} justify="center">
                <TypeMember clicked={props.clicked} editData={() => props.editData(type)} name={type.descricao} showModal={() => props.modal(type)}></TypeMember>
                <Modal visible={props.visible} handleOk={props.handleOk} onCancel={props.onCancel} data={props.modalData} title={props.title}></Modal>
                <br></br>
              </Col>
        )})
    )
}

export default typeMembers;