import React from 'react';
import { Space, Image  } from 'antd';
import shopkoala from '../images/shopkoala.PNG'
import shopplaty from '../images/shopplaty.PNG'
import shopwombat from '../images/shopwombat.PNG'
import shopkanga from '../images/shopkanga.PNG'
import banner from '../images/banner.png';
import bannerflipped from '../images/bannerflipped.png'
import logobanner from '../images/logobanner.png';




const Shop = () => (
  <Space direction="vertical">
    <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} />
 <Image src={shopkoala} />
 <Image src={shopplaty} />
 <Image src={shopwombat} />
 <Image src={shopkanga} />
 <Image width={'95vw'} height={50} src={bannerflipped} />
  </Space>
  
  
);
export default Shop;