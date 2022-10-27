import React from 'react';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

// import Auth from './utils/auth';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Breadcrumb, Layout, Menu } from 'antd';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
// import Payment from './pages/Payment';
// import Confirmation from './pages/Confirmation';
import Faq from './pages/Faq';
import Info from './pages/Info';
// import Visit  from './pages/Visit';
import About from './pages/About';
import Shop from './pages/Shop';
// import Donate from './pages/Donate';
// import Layout from './components/Layout';
import {HomeOutlined, InfoCircleOutlined, ShopOutlined } from '@ant-design/icons'
// import AppNavbar from './components/Navbar'

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
// const [showModal, setShowModal] = useState(false);

function App() {
  const navigate = useNavigate()
  return (
<ApolloProvider client={client}>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        onClick={({ key })=> {
          navigate(key);
        }}
        items={[
          {label: "Home",key:"/",icon: <HomeOutlined />},
          {label: "About Us",key:"/about",icon: <InfoCircleOutlined />},
          {label: "Shop here",key:"/shop",icon: <ShopOutlined />}


        ]}
        mode="horizontal"
    ></Menu>
    </Header>
    {/* <AppNavbar/> */}
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
            <Route path="/" element={<Home />}/>
            <Route path="/ticket" element={<Ticket />} />
            {/* <Route path="/payment" element={<Payment />}/> */}
            {/* <Route path="/confirmation" element={<Confirmation />}/> */}
            <Route path="/faq" element={<Faq />}/>
            <Route path="/info" element={<Info />}/>
            {/* <Route path="/visit" element={<Visit />}/> */}
            <Route path="/about" element={<About />}/>
            <Route path="/shop" element={<Shop />}/>
            {/* <Route path="/donate" element={<Donate />}/>  */}
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>;
   
    </ApolloProvider>
);
}

export default App;