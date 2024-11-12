import { useState } from 'react'
import './App.css';
import 'antd'; 
import { Flex, Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import NavBar from './Components/NavBar/navbar';
import Body from './Components/AppBody//mainBody/body';

const App = () => {
  
  return (
    <Layout className='app'>
      <Header className='Header' >
        <NavBar/>
      </Header>
      <Content className='Content' >
        <Body/>
      </Content>
      <Footer className='Footer'> @2024 by FastBizs </Footer>
    </Layout>
      
  );
}

export default App;
