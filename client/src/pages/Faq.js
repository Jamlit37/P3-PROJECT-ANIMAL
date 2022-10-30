import React from 'react';
import { Space, Typography, Image  } from 'antd';
import { Collapse } from 'antd';
import banner from '../images/banner.png';
import platybanner from '../images/platybanner.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';
const { Panel } = Collapse;
const faq1 = `
  All tickets must be pre booked online as space is limited in the busy periods
`;
const faq2 = `
  There are currently no places to eat at the zoo but local cafes are within 5 minutes drive. Visit Beach Street for the best and closest
`;
const faq3 = `
  On warmer days we recommend hats, sunscreen, water, packed lunch and appropriate clothings and footwear. Colder or wet days would mean an umbrella might come in handy. Always wear correct, closed=toes shoes to avoid any slipping
`;
const { Title, Text } = Typography;
const onChange = (key) => {
  console.log(key);
};


const Faq = () => (
  <Space direction="vertical">
  <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} />
 
  <Title level={3} >Frequently asked questions</Title>
  <Text strong> We are experiencing a high volume of calls and emails at the moment so the phone wait time and email response time may be lengthy so please read our FAQs below.</Text>
  <Collapse onChange={onChange}>
      <Panel header="Do I need to pre book ticket?" key="1">
        <p>{faq1}</p>
      </Panel>
      <Panel header="Are there places to eat at the zoo?" key="2">
        <p>{faq2}</p>
      </Panel>
      <Panel header="What do I need to bring" key="3">
        <p>{faq3}</p>
      </Panel>
    </Collapse>
    <Image id="platybanner" width={'95vw'} height={'500px'} src={platybanner} />
    <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>
  );
export default Faq;