import React from 'react';
import { Button, Space, Typography, Image  } from 'antd';
import logo from '../images/logo.png';
const { Title, Text } = Typography;




const Home = () => (
  <Space direction="vertical">
  <Title> Welcome to Animalia Zoo <Image width= {200} src={logo}
  /></Title>
  <Title level={3} >Opening hours 9am-5pm everyday!</Title>
  <Text strong> Thanks for visiting</Text>
  <Text>To book a ticket please click here: <Button href="/ticket"> Book now! </Button></Text>
  <Text>To see our wonderful animals click here: <Button href="/info"> Animal information! </Button></Text>
  <Text>Any questions can be answered here: <Button href="/faq"> FAQ </Button></Text>
  </Space>
  
  
);
export default Home;