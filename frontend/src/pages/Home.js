import { Layout } from 'antd';
import './Home.scss';
import SideMenu from '../components/common/SideMenu';
import RequestStatus from '../components/dqms/RequestStatus';
import PartDetail from '../components/dqms/PartDetail';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <SideMenu />
      <Layout style={{ padding: '0 24px 0' }}>
        <Route component={RequestStatus} path={['/DQMS']} exact />
        <Route component={PartDetail} path={['/DQMS/EAB23456784']} />
      </Layout>
    </Layout>
  );
};

export default Home;
