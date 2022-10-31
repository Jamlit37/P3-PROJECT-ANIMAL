import React, { useState, useEffect } from 'react';
import { DatePicker, Space, Typography, Image, Button } from 'antd';
import moment from 'moment';
import Auth from '../utils/auth';
import banner from '../images/banner.png';
import treekoalabanner from '../images/treekoalabanner.png';
import logobanner from '../images/logobanner.png';
import bannerflipped from '../images/bannerflipped.png';
import { ADD_TICKET } from '../utils/mutations'
import { getAddTicketIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client'

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
  const [addTicketIds] = useState(getAddTicketIds());
  const [addTicket] = useMutation(ADD_TICKET)
  useEffect(() => {
    return () => addTicketIds(addTicketIds);
  });
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
        <Button
          className='btn-block btn-info'
          onClick={() => addTicket}>hello
        </Button>
        <Image width={'95vw'} height={100} src={bannerflipped} />
       
      </Space>
      ) : (
        <div> Please Login </div>

      )
      }
    </div>
  )
}



export default Ticket;