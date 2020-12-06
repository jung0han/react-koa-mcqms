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
import RequestStatus from './pages/dqms/RequestStatus';
import PartDetail from './pages/dqms/PartDetail';
import InspectionPlan from './pages/dqms/InspectionPlan';
import DimensionPlan from './pages/dqms/DimensionPlan';

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
        <Route component={InspectionPlan} path={['/DQMS/EAB23456784']} exact />
        <Route
          component={DimensionPlan}
          path={['/DQMS/EAB23456784/dimension']}
          exact
        />
        <Route component={PartDetail} path={['/DQMS/EAB23456784/inspection']} />
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
