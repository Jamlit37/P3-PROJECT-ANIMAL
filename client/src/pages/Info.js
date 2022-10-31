import React from 'react';
import {  Space, Image  } from 'antd';
import banner from '../images/banner.png';
import koalainfo from '../images/koalainfo.png';
import flyinginfo from '../images/flyinginfo.png';
import wallyinfo from '../images/wallyinfo.png';
import possuminfo from '../images/possuminfo.png';
import platyinfo from '../images/platyinfo.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';


const Info = () => (
  <Space direction="vertical">
  <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} /> <Image id="koalainfo" width={'95vw'} height={'320px'} src={koalainfo} />
    <Image id="flyinginfo" width={'95vw'} height={'320px'} src={flyinginfo} />
    <Image id="wallyinfo" width={'95vw'} height={'320px'} src={wallyinfo} />
    <Image id="possuminfo" width={'95vw'} height={'320px'} src={possuminfo} />
    <Image id="platyinfo" width={'95vw'} height={'320px'} src={platyinfo} />
  <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>
  

);
export default Info;