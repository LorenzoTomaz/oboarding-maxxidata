import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };
const { Meta } = Card;
const memberType = (props) => {
    /* console.log('props');
    console.log(props); */
    return (
        <Card title="Member Type"
        style={{ width: 350}}
        actions={[
        <EllipsisOutlined key="ellipsis" onClick={props.showModal}/>
        ]}
    >

        <Card.Grid style={gridStyle}><Card.Grid style={gridStyle}>{props.name}</Card.Grid></Card.Grid>
        </Card>
    );
}

export default memberType;