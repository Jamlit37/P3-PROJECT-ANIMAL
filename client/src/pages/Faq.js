import React from 'react';
import { Space, Typography, Image  } from 'antd';
import logo from '../images/logo.png';
import { Collapse } from 'antd';
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
  <Title> Welcome to Animalia Zoo <Image width= {200} src={logo}
  /></Title>
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
  </Space>
  );
export default Faq;