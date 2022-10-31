import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Breadcrumb, Layout, Menu } from 'antd';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import Faq from './pages/Faq';
import Info from './pages/Info';
import Visit from './pages/Visit';
import About from './pages/About';
import Shop from './pages/Shop';
import Donate from './pages/Donate';
import OrderHistory from './pages/OrderHistory';

import { HomeOutlined, InfoCircleOutlined, ShopOutlined, CarOutlined } from '@ant-design/icons'
import AppNavbar from './components/Navbar'
import AppNavbarLogin from './components/NavbarLogin'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const { Header, Content, Footer } = Layout;


function App() {
  const navigate = useNavigate()
  return (
    <ApolloProvider client={client}>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu style={{ justifyContent: 'center' }}

            onClick={({ key }) => {
              navigate(key);
            }}

            items={[
              { label: "Home", key: "/", icon: <HomeOutlined /> },
              { label: "About Us", key: "/about", icon: <InfoCircleOutlined /> },
              { label: "Shop here", key: "/shop", icon: <ShopOutlined /> },
              { label: "Visit", key: "/visit", icon: <CarOutlined /> }, { label: "Ticket", key: "/ticket", icon: <CarOutlined /> },
              { label: "info", key: "/info", icon: <CarOutlined /> },
              { label: "Faq", key: "/faq", icon: <CarOutlined /> },
              { label: "donate", key: "/donate", icon: <CarOutlined /> }
            ]}
            mode="horizontal"
          >  </Menu>
        </Header>
        
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          </Breadcrumb>

          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/info" element={<Info />} />
              <Route path="/visit" element={<Visit />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/donate" element={<Donate />} />
              <Route
                path="/orderHistory"
                element={<OrderHistory />}
              />
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Routes>
          </>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          <AppNavbar />
          <AppNavbarLogin />
        </Footer>
      </Layout>;

    </ApolloProvider>
  );
}

export default App;