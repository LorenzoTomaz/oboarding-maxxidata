import React from 'react';
import { Modal, Button } from 'antd';

const modal = (props) => {
    /* console.log('props.data');
    console.log(props.data); */
    return (
      <>
        <Modal
          title={props.title}
          visible={props.visible}
          onOk={props.handleOk}
          onCancel={props.onCancel}
        >
            <p><strong>id: </strong>{props.data.id}</p>
            <p><strong>description: </strong>{props.data.descricao}</p>
            <p><strong>status: </strong>{props.data.situacao}</p>
        </Modal>
      </>
    );
}
export default modal;