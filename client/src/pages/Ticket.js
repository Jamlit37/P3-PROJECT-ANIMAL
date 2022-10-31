import React, { useState } from 'react';
import { DatePicker, Space, Typography, Image } from 'antd';
import moment from 'moment';
import Auth from '../utils/auth';
import banner from '../images/banner.png';
import treekoalabanner from '../images/treekoalabanner.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';

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


const Ticket = () => {
  return (
    <div>
      {Auth.loggedIn() ? (<Space direction="vertical" size={12}>
        <Image width={'95vw'} height={50} src={banner} />
        <Image width={'60vw'} height={75} src={logobanner} style={{ justifyContent: 'center', marginLeft: '33%' }} />
        <Image id="treekoalabanner" width={'95vw'} height={'520px'} src={treekoalabanner} />
        <br />
        <Title level={5}>Please choose a date here</Title>
        <Text>Note: If fully booked, will display as blank date</Text>
        <DatePicker onChange={onChange} onOk={onOk} disabledDate={disabledDate} />
        <Click />
        <Checkout />
        <Image width={'95vw'} height={100} src={bannerflipped} />

      </Space>
      ) : (
        <div> Please Login </div>

      )
      }
    </div>
  )
}


function Click() {
  // State to store count value
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {

    setPrevCount(count);
    if (count === 0) setCount(1);
    setTimeout(() => {
      if (count - prevCount === 1) {
        setCount(prev => prev + 1);
      }
    }, 1000);


  };

  return (
    <div className="clicker">
      <button onClick={incrementCount}>1 x Ticket</button>
      <br />
      <span>You are purchasing: </span>{count}<span> tickets.</span>
    </div>
  );
}

function Checkout() {
  return <form action="https://www.paypal.com/cgi-bin/webscr" method="post"> 
  <input type="hidden" name="business" value="herschelgomez@xyzzyu.com"/>
    <input type="hidden" name="cmd" value="_xclick"/> 
    <input type="hidden" name="item_name" value="Hot Sauce-12oz. Bottle"/> 
    <input type="hidden" name="amount" value="5.95"/> 
    <input type="hidden" name="currency_code" value="USD"/> 
    <input type="image" name="submit" border="0" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" alt="Buy Now"/> 
    <img alt="" border="0" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" /> 
    </form>

}



    export default Ticket;