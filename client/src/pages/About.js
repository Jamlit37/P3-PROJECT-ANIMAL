import React from 'react';
import {  Space, Typography, Image  } from 'antd';
import logo from '../images/animalia-logo.png';
import sugarglider from '../images/sugarglider.png'
const { Title, Text } = Typography;
const About = () => (
  <Space direction="vertical">
  <Title> About us <Image width= {200} src={logo}
  /></Title>
  <Title level={3} >Opening hours 9am-5pm everyday!</Title>
  <Text strong> Thanks for visiting</Text>
  <Text>A volunteer based Zoo dedicated to fighting extinction of Australian Wildlife.</Text>
  <Text>Our zoos inspire animal lovers of all ages. And by strengthening the connection between people and wildlife, we hope to protect the future of animals and their homes.</Text>
  <Text>We're a not-for-profit organisation, so every dollar counts. Each time you visit one of our zoos, donate, buy a memento from our shops, or share what you've discovered, you're helping us to protect wildlife. So, thank you.</Text>
  <Image width= {500} src={sugarglider}
  />
  </Space>
  

);
export default About;