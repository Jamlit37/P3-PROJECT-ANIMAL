import React from 'react';
import {  Space, Image  } from 'antd';
import banner from '../images/banner.png';
import koalainfo from '../images/koalainfo.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';


const Info = () => (
  <Space direction="vertical">
  <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} /> <Image id="koalainfo" width={'95vw'} height={'320px'} src={koalainfo} />
  <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>
  

);
export default Info;