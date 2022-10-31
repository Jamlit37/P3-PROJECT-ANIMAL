import React from 'react';
import {  Space, Image } from 'antd';
import hourbanner from '../images/openinghourb.png';
import footerbanner from '../images/footerb.png';
import banner from '../images/banner.png';
import banner3 from '../images/banner3.png';

import bannerflipped from '../images/bannerflipped.png';
import logobanner from '../images/logobanner.png';

import { Typography } from 'antd';

const { Title } = Typography;


const Home = () => (
  <Space direction="vertical">
    <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} />
    <Image id="koalabanner" width={'95vw'} height={'800px'} src={hourbanner} />
    <br/>
<Title level={4} style={{ marginLeft: '200px', marginRight: '200px' }}>Here at Animalia Zoo we make it our mission to help rehabilitate sick and injured wildlife in the hopes of releasing them back into the wild. To help further fund our mission we have opened up to the public! Come down to get up close and personal with our beautiful creatures whilst learning all there is to know about their diet and behaviours. It is not only our mission to sustain and recultivate Native Australian Wildlife but teach the wider Melbourne Community about our unique ecosystem. Hope we see you soon!</Title>
<br/>

<Image id="banner3" width={'95vw'} height={'250px'} src={banner3} />
<br/>

    <br/>

    <Image id="kangabanner" width={'95vw'} height={'800px'} src={footerbanner} />
    <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>


);


export default Home;