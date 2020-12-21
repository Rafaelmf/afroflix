import React from 'react';

import { Layout, Menu, Image } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import Logo from '../img/Netflix-Logo.png';
import HomeContent from './HomeContent';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const DashBoardLayout = () => {
  return (
    <Layout className="app-layout-container">
      <Header style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
        <Image preview={false} width={150} height={60} src={Logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Melkhur</Menu.Item>
          <Menu.Item key="3">BlackBoox</Menu.Item>
          <Menu.Item key="4">Sobre</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={300}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Membros">
              <Menu.Item key="9">Lista de Assinantes</Menu.Item>
              <Menu.Item key="10">Notificações</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Estatisticas">
              <Menu.Item key="1">Gerais</Menu.Item>
              <Menu.Item key="2">Filmes</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Campanhas"
            >
              <Menu.Item key="5">Gerenciar Cobranças</Menu.Item>
              <Menu.Item key="6">Lançamento de Títulos</Menu.Item>
              <Menu.Item key="7">Criar campanha</Menu.Item>
              <Menu.Item key="8">Google Calendar</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <HomeContent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
