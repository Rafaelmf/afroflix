import React, { useEffect, useState } from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';

import { Layout, Menu, Image } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import Logo from '../img/BlackFlix-Logo.png';
import HomeView from '../view/HomeView';
import AdminView from '../view/AdminView';
import MelkhurView from '../view/MelkhurView';
import VideoPlayer from '../view/VideoPlayer';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const DashBoardLayout = (props) => {
  const { history } = props;

  const [selectedMenuKeys, setSelectedMenuKeys] = useState(['1']);
  useEffect(() => {
    switch (history.location.pathname) {
      case '/home':
        setSelectedMenuKeys(['1']);
        break;
      case '/melkhur':
        setSelectedMenuKeys(['2']);
        break;
      default:
        break;
    }
  }, [history.location.pathname]);

  return (
    <Layout className="app-layout-container">
      <Header style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
        <Image
          style={{ cursor: 'pointer' }}
          preview={false}
          width={160}
          height={65}
          src={Logo}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={selectedMenuKeys}
          selectedKeys={selectedMenuKeys}
        >
          <Menu.Item key="1">
            <Link to="/home">Página Inicial</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/melkhur">Melkhur</Link>
          </Menu.Item>
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
              <Menu.Item key="1">
                <Link to="/members/users">Lista de Assinantes</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/members/notification">Notificações</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Estatisticas">
              <Menu.Item key="3">
                <Link to="/stats/general">Geral</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/stats/film">Filmes</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Campanhas"
            >
              <Menu.Item key="/5">Gerenciar Cobranças</Menu.Item>
              <Menu.Item key="/6">Lançamento de Títulos</Menu.Item>
              <Menu.Item key="/7">Criar campanha</Menu.Item>
              <Menu.Item key="/8">Google Calendar</Menu.Item>
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
            <Switch>
              <Route exact path="/home" component={HomeView} />
              <Route exact path="/melkhur" component={MelkhurView} />
              <Route exact path="/video" component={VideoPlayer} />
              <Route component={AdminView} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(DashBoardLayout);
