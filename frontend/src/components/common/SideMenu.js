import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          DQMS
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Setup">
          <Menu.Item key="2">시험 항목</Menu.Item>
          <Menu.Item key="3">ITEM Mapping</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
