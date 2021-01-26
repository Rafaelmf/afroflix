import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import { Route, Switch, withRouter } from 'react-router';
import UserList from '../components/admin-components/UserList';
import MovieList from '../components/admin-components/MoviesList';

const AdminView = (props) => {
  const { history } = props;
  const [title, settitle] = useState('');
  const [subTitle, setsubTitle] = useState('');

  useEffect(() => {
    switch (history.location.pathname) {
      case '/members/users':
        settitle('Membros');
        setsubTitle('Lista de Assinantes');
        break;
      case '/members/notification':
        settitle('Membros');
        setsubTitle('Notificações');
        break;
      case '/stats/general':
        settitle('Estatísticas');
        setsubTitle('Gerais');
        break;
      case '/stats/film':
        settitle('Estatísticas');
        setsubTitle('Filmes');
        break;
      case '/movie/list':
        settitle('Filmes');
        setsubTitle('Lista de Filmes');
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
      />
      <Switch>
        <Route exact path="/members/users" component={UserList} />
        <Route exact path="/movie/list" component={MovieList} />
      </Switch>
    </div>
  );
};

export default withRouter(AdminView);
