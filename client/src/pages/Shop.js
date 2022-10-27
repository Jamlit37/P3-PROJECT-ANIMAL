import React from 'react';
import { Space, Typography, Image  } from 'antd';
import logo from '../images/logo.png';
import koalatoy from '../images/koala-toy.png'
import possumtoy from '../images/possum-toy.png'
import wallabytoy from '../images/wallaby-toy.png'
import glidertoy from '../images/sugarglider-toy.png'
const { Title, Text } = Typography;




const Shop = () => (
  <Space direction="vertical">
  <Title> Welcome to Animalia Zoo <Image width= {200} src={logo}
  /></Title>
  <Title level={3} >Opening hours 9am-5pm everyday!</Title>
  <Text strong> Thanks for visiting</Text>
  <Text strong>Koala Toy</Text>
  <Image height={300} width= {250} src={koalatoy}/>
  <Text>Price: $19.99</Text>
  <br/>
  <Text strong>Possum Toy</Text>
  <Image height={300} width= {250} src={possumtoy}/>
  <Text>Price: $14.99</Text>
  <br/>
  <Text strong>Wallaby Toy</Text>
  <Image height={300} width= {250} src={wallabytoy}/>
  <Text>Price: $29.99</Text>
  <br/>
  <Text strong>Sugar Glider Toy</Text>
  <Image height={300} width= {250} src={glidertoy}/>
  <Text>Price: $24.99</Text>
  <br/>
  </Space>
  
  
);
export default Shop;