import React from 'react';
import { Button, Space, Image } from 'antd';
import hourbanner from '../images/openinghourb.png';
import footerbanner from '../images/footerb.png';
import banner from '../images/banner.png';
import banner3 from '../images/banner3.png';

import bannerflipped from '../images/bannerflipped.png';
import logobanner from '../images/logobanner.png';
import { QuestionCircleOutlined, DollarOutlined, QqOutlined, CalendarOutlined  } from '@ant-design/icons';
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

    <Buttons />
    <br/>

    <Image id="kangabanner" width={'95vw'} height={'800px'} src={footerbanner} />
    <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>


);

function Buttons() {
  return <><Button className='trio' style={{  width: '33%', padding: '50px 20px' }} shape="round" href="/info" icon={<QqOutlined />}> Animals </Button>
    <Button className='trio' shape="round" style={{  width: '33%', padding: '50px 20px', paddingTop: '100px'}} href="/faq" icon={<QuestionCircleOutlined />}> FAQ </Button>
    <Button className='trio'  shape="round" style={{  width: '34%', padding: '50px 20px' }}  href="/donate" icon={<DollarOutlined />}> Donate </Button>
    <br/>
    <br/>
    <Button block style={{ padding: '50px 20px' }} shape="round" href="/ticket" icon={<CalendarOutlined />}> Tickets </Button>
  </>
}
export default Home;