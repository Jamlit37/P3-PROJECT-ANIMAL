import React from 'react';
import { Space, Typography, Image  } from 'antd';
import logo from '../images/logo.png';
import koala from '../images/koala.png'
import brushy from '../images/brushy.png'
import wallaby from '../images/wallaby.png'
import sugarglider from '../images/sugarglider.png'
const { Title, Text } = Typography;




const Shop = () => (
  <Space direction="vertical">
  <Title> Welcome to Animalia Zoo <Image width= {200} src={logo}
  /></Title>
  <Title level={3} >Opening hours 9am-5pm everyday!</Title>
  <Text strong> Thanks for visiting</Text>
  <Text strong>Koala Toy</Text>
  <Image height={300} width= {250} src={koala}/>
  <Text>Price: $19.99</Text>
  <br/>
  <Text strong>Possum Toy</Text>
  <Image height={300} width= {250} src={brushy}/>
  <Text>Price: $14.99</Text>
  <br/>
  <Text strong>Wallaby Toy</Text>
  <Image height={300} width= {250} src={wallaby}/>
  <Text>Price: $29.99</Text>
  <br/>
  <Text strong>Sugar Glider Toy</Text>
  <Image height={300} width= {250} src={sugarglider}/>
  <Text>Price: $24.99</Text>
  <br/>
  </Space>
  
  
);
export default Shop;