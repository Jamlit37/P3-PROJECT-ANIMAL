import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import LoginForm from './LoginForm';
import { Button, Modal } from 'antd';
import Auth from '../utils/auth';

const AppNavbarLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
        </>
      ) : (
        <Button type="primary" onClick={showModal}>
          Login
        </Button>
      )
      }
      <div>
        <p>

          <Modal id="login" title="login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Nav.Link eventKey='login'>Sign Up</Nav.Link>
            <Tab.Pane eventKey='login'>
              <LoginForm handleModalClose={() => setIsModalOpen(false)} />
            </Tab.Pane>
          </Modal>
        </p>
      </div>
    </>

  )
};


export default AppNavbarLogin;