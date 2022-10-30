import React from 'react';
import {  Space, Typography, Image  } from 'antd';
import banner from '../images/banner.png';
import possumbanner from '../images/possumbanner.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';

const { Text } = Typography;

const About = () => (
  <Space direction="vertical">
   <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} />
    <Image id="possumbanner" width={'95vw'} height={'500px'} src={possumbanner} />

  <Text strong> Thanks for visiting</Text>
  <Text>A volunteer based Zoo dedicated to fighting extinction of Australian Wildlife.</Text>
  <Text>Our zoos inspire animal lovers of all ages. And by strengthening the connection between people and wildlife, we hope to protect the future of animals and their homes.</Text>
  <Text>We're a not-for-profit organisation, so every dollar counts. Each time you visit one of our zoos, donate, buy a memento from our shops, or share what you've discovered, you're helping us to protect wildlife. So, thank you.</Text>
  <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>
  

);
export default About;