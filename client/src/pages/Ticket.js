import React from 'react';
import { DatePicker, Space, Typography, Image  } from 'antd';
import logo from '../images/animalia-logo.png';
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

// function BuyTicket() {
//   return <form action="https://www.paypal.com/donate" method="post" target="_top">
//     <input type="hidden" name="business" value="SEEEC4D5UKPNQ" />
//     <input type="hidden" name="no_recurring" value="0" />
//     <input type="hidden" name="currency_code" value="AUD" />
//     <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
//     <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
//   </form>
// }

export default Ticket;