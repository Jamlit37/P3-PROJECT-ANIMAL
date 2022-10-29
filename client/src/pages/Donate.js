import React from 'react';
import { Space, Typography, Image } from 'antd';
import logo from '../images/animalia-logo.png';
import feeding from '../images/feeding.png';
import feeding2 from '../images/feeding2.png';
import feeding3 from '../images/feeding3.png';
const { Title, Text } = Typography;

const Donate = () => {
  return <Space direction="vertical">
    <Title> Welcome to Animalia Zoo <Image width={200} src={logo}
    /></Title>
    <Title level={3} >Opening hours 9am-5pm everyday!</Title>
    <Text strong> Love what we do? Then please consider making a donation and helping us to continue our work donations can be made via  PayPal to Animalia Wildlife Shelter</Text>
    <Image preview='false' width={200} src={feeding}/><Image width={200} src={feeding2}/><Image width={200} src={feeding3}/>
    <Donation />
  </Space>
};

function Donation() {
  return <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="business" value="SEEEC4D5UKPNQ" />
    <input type="hidden" name="no_recurring" value="0" />
    <input type="hidden" name="currency_code" value="AUD" />
    <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
  </form>
}

export default Donate;