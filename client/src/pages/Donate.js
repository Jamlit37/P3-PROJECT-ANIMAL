import React from 'react';
import { Space, Typography, Image } from 'antd';
import banner from '../images/banner.png';
import wombatbanner from '../images/wombatbanner.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';

const {  Text } = Typography;

const Donate = () => {
  return <Space direction="vertical">
    <Image width={'95vw'} height={50} src={banner} />
    <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '22%' }} />
    <Text strong style={{marginLeft: '28%'}} > Love what we do? Then please consider making a donation and helping us to continue our work.
    </Text>
    <Text strong style={{marginLeft: '28%'}} >Donations can be made via  PayPal to Animalia Wildlife Shelter. We all thank you for your help!</Text>
  
    <Donation />
    <Image id="wombatbanner" width={'95vw'} height={'800px'} src={wombatbanner} />
  <Image width={'95vw'} height={100} src={bannerflipped} />
  </Space>
};

function Donation() {
  return <form  style={{marginLeft: '45%'}} action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="business" value="SEEEC4D5UKPNQ" />
    <input type="hidden" name="no_recurring" value="0" />
    <input type="hidden" name="currency_code" value="AUD" />
    <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" width="100" height="80" />
    <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
  </form>
}

export default Donate;