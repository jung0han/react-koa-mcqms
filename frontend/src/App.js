import React from 'react';
import './App.less';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import { Helmet } from 'react-helmet-async';
import { Layout } from 'antd';
import HeaderContainer from './containers/common/HeaderContainer';
import SideMenu from './components/common/SideMenu';
import RequestStatus from './components/dqms/RequestStatus';
import PartDetail from './components/dqms/PartDetail';

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Helmet>
      <title>REACTERS</title>
    </Helmet>
    <HeaderContainer />
    <Layout>
      <SideMenu />
      <Layout style={{ padding: '0 24px 0' }}>
        <Route component={RequestStatus} path={['/DQMS']} exact />
        <Route component={PartDetail} path={['/DQMS/EAB23456784']} />
        <Route component={PostListPage} path={['/@:username']} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/@:username/:postId" />
      </Layout>
    </Layout>
  </Layout>
);

export default App;
