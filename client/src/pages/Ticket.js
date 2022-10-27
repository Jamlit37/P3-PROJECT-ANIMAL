import React from 'react';
import { DatePicker, Space, Typography, Image  } from 'antd';
import logo from '../images/logo.png';
import moment from 'moment';

const { Title, Text } = Typography;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};

const disabledDate = (current) => {
  return current && current < moment().endOf('day');
};

const Ticket = () => (
  <Space direction="vertical" size={12}>
  <Title> Welcome to Animalia Zoo <Image width= {200} src={logo}/></Title>
  <Title level={3}>Opening hours 9am-5pm everyday!</Title>
  <br/>
  <Title level={5}>Please choose a date here</Title>
  <Text>Note: If fully booked, will display as blank date</Text>
  <DatePicker onChange={onChange} onOk={onOk} disabledDate={disabledDate}/>
  </Space>
);

export default Ticket;