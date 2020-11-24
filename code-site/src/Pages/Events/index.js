import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Media from 'react-bootstrap/ListGroupItem';
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";


const { Meta } = Card;

class EventCard extends React.Component{
    
    render(){
        return(
            <>
            <CardGroup className="justify-content-around">
          <Card
            title="Subscribe to Newsletter"
            style={{ width: 300 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
 
              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            title="CODE Connect"
            style={{ width: 300 }}

            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta

              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            title="Become a Resident"
            style={{ width: 300 }}

            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CardGroup>
            </>

        );
            
    }
}

export default EventCard;