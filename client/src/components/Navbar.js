import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import { Button, Modal } from 'antd';
import Auth from '../utils/auth';

const AppNavbar = () => {
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
        </>
      ) : (
        <Button type="primary" onClick={showModal}>
          Signup
        </Button>
      )
      }
    <div>
      <p>
        <Modal id="signup" title="signup" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
          <Tab.Pane eventKey='signup'>
            <SignUpForm handleModalClose={() => setIsModalOpen(false)} />
          </Tab.Pane>
        </Modal>
      </p>
    </div>
    </>
  )
};


export default AppNavbar;
