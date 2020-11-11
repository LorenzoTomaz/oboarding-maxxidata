import React from 'react';
import { Modal, Button } from 'antd';

const modal = (props) => {
    return (
      <>
        <Modal
          title={props.title}
          visible={props.visible}
          onOk={props.handleOk}
          onCancel={props.onCancel}
        >
            <p><strong>id: </strong>{props.data.id}</p>
            <p><strong>name: </strong>{props.data.nome}</p>
            <p><strong>email: </strong>{props.data.email}</p>
            <p><strong>status: </strong>{props.data.situacao}</p>
            <p><strong>address: </strong>{props.data.endereco}</p>
        </Modal>
      </>
    );
}
export default modal;