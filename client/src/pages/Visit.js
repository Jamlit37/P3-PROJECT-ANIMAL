import React from 'react';
import {  Space, Typography, Image  } from 'antd';
import map from '../images/map.png'
import banner from '../images/banner.png';
import crocbanner from '../images/crocbanner.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';

const { Text } = Typography;
const Visit = () => (
  <Space direction="vertical">
  <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} />
    <Image id="crocbanner" width={'95vw'} height={'500px'} src={crocbanner} />
  <Text strong>How to get here!</Text>
  <Text>Various options include train, bus, bike or car.</Text>
  <Text>Located 4 minutes from the Morningtiop Peninsula Fwy, there is plenty of free street parking.</Text>
  <Text>Around an 18 minute walk to the nearest bus which will take you directly to the newly refurbished Frankston Railway Station, this station is the link to take for anyone travelling from afar.</Text>
  
  <Image width= {950} src={map}
  />
   <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>
  

);
export default Visit;
