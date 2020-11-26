import React from 'react';
import './App.less';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import Home from './pages/Home';
import { Helmet } from 'react-helmet-async';
import { Layout } from 'antd';
import HeaderContainer from './containers/common/HeaderContainer';

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Helmet>
      <title>REACTERS</title>
    </Helmet>
    <HeaderContainer />
    <Route component={Home} path={['/']} exact />
    <Route component={PostListPage} path={['/@:username']} exact />
    <Route component={LoginPage} path="/login" />
    <Route component={RegisterPage} path="/register" />
    <Route component={WritePage} path="/write" />
    <Route component={PostPage} path="/@:username/:postId" />
  </Layout>
);

export default App;
