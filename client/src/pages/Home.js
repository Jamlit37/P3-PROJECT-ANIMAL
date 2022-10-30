import React from 'react';
import { Button, Space, Image } from 'antd';
import hourbanner from '../images/openinghourb.png';
import footerbanner from '../images/footerb.png';
import banner from '../images/banner.png';
import bannerflipped from '../images/bannerflipped.png';
import logobanner from '../images/logobanner.png';
import { QuestionCircleOutlined, DollarOutlined, QqOutlined, CalendarOutlined  } from '@ant-design/icons';

const Home = () => (
  <Space direction="vertical">
    <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} />
    <Image id="koalabanner" width={'95vw'} height={'800px'} src={hourbanner} />
    <Buttons />
    <Image id="kangabanner" width={'95vw'} height={'800px'} src={footerbanner} />
    <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>


);

function Buttons() {
  return <><Button className='trio' style={{  width: '33%', padding: '50px 20px' }} shape="round" href="/info" icon={<QqOutlined />}> Animals </Button>
    <Button className='trio' shape="round" style={{  width: '33%', padding: '50px 20px', paddingTop: '100px'}} href="/faq" icon={<QuestionCircleOutlined />}> FAQ </Button>
    <Button className='trio'  shape="round" style={{  width: '34%', padding: '50px 20px' }}  href="/donate" icon={<DollarOutlined />}> Donate </Button>
    <Button block style={{ padding: '50px 20px' }} shape="round" href="/ticket" icon={<CalendarOutlined />}> Tickets </Button>
  </>
}
export default Home;