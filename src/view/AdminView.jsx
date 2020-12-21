import React, { useState, useEffect } from 'react';
import { PageHeader, Button } from 'antd';
import { Route, Switch, withRouter } from 'react-router';
import UserList from '../components/admin-components/UserList';

const AdminView = (props) => {
  const { history } = props;
  const [title, settitle] = useState('');
  const [subTitle, setsubTitle] = useState('');

  useEffect(() => {
    switch (history.location.pathname) {
      case '/members/users':
        settitle('Membros');
        setsubTitle('/ Lista de Assinantes');
        break;
      case '/members/notification':
        settitle('Membros');
        setsubTitle('/ Notificações');
        break;
      case '/stats/general':
        settitle('Estatísticas');
        setsubTitle('/ Gerais');
        break;
      case '/stats/film':
        settitle('Estatísticas');
        setsubTitle('/ Filmes');
        break;
      default:
        break;
    }
  }, [history.location.pathname]);

  return (
    <div>
      <PageHeader
        ghost={false}
        className="admin-page-header"
        onBack={() => history.push('/home')}
        title={title}
        subTitle={subTitle}
        extra={[
          <Button key="2">Action</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      />
      <Switch>
        <Route path="/members/users" component={UserList} />
      </Switch>
    </div>
  );
};

export default withRouter(AdminView);
