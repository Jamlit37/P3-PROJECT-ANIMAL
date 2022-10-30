import React from 'react';
import {  Space, Typography, Image  } from 'antd';
import logo from '../images/animalia-logo.png';
import koala from '../images/koala.png'
import wallaby from '../images/wallaby.png'
import brushy from '../images/brushy.png'
import wombat from '../images/wombat.png'



const { Title, Text } = Typography;
const Info = () => (
  <Space direction="vertical">
  <Title> Meet our animals <Image width= {200} src={logo}
  /></Title>
  <Title level={3} >Opening hours 9am-5pm everyday!</Title>

  <Title level={4}>Koalas</Title><Text strong><Image height={300} width= {250} src={koala}
  />The koala or, inaccurately, koala bear is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats.</Text>
  <br/>
<Title level={4}>Wallabies</Title><Text strong>Wallabies are members of the kangaroo clan found primarily in Australia and on nearby islands. There are many wallaby species, grouped roughly by habitat: shrub wallabies, brush wallabies, and rock wallabies. Hare wallabies are named for their size and their hare-like behavior.</Text>
  <br/>
  <Title level={4}>Brush Tail Possums</Title><Image height={300} width= {250} src={brushy}
  /><Text strong>The common brushtail possum is a nocturnal, semiarboreal marsupial of the family Phalangeridae, native to Australia and naturalised in New Zealand, and the second-largest of the possums. Like most possums, the common brushtail possum is nocturnal.</Text>
   <br/>
  <Title level={4}>Wombats</Title><Image height={300} width= {250} src={wombat}
  /><Text strong>Wombats are short-legged, muscular quadrupedal marsupials that are native to Australia. They are about 1 m in length with small, stubby tails and weigh between 20 and 35 kg. All three of the extant species are members of the family Vombatidae.</Text>
  </Space>
  

);
export default Info;