import React from 'react';
import {  Space, Typography, Image  } from 'antd';
import logo from '../images/animalia-logo.png';
import map from '../images/map.png'
const { Title, Text } = Typography;
const Visit = () => (
  <Space direction="vertical">
  <Title> About us <Image width= {200} src={logo}
  /></Title>
  <Title level={3} >Opening hours 9am-5pm everyday!</Title>
  <Text strong>How to get here!</Text>
  <Text>Various options include train, bus, bike or car.</Text>
  <Text>Located 4 minutes from the Morningtiop Peninsula Fwy, there is plenty of free street parking.</Text>
  <Text>Around an 18 minute walk to the nearest bus which will take you directly to the newly refurbished Frankston Railway Station, this station is the link to take for anyone travelling from afar.</Text>
  
  <Image width= {950} src={map}
  />
  </Space>
  

);
export default Visit;
