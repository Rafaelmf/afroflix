import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button, Tabs } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const { TabPane } = Tabs;

const UserList = () => {
  const [userListActive, setUserListActive] = useState([]);
  const [userListInactive, setUserListInactive] = useState([]);
  const [userListBlocked, setUserListBlocked] = useState([]);

  const handleDeactivate = (email) => {
    axios
      .get(`http://localhost:8080/user-update?email=${email}&status=inactive`)
      .then(() => {
        const idx = userListActive.findIndex((user) => user.email === email);
        setUserListInactive([
          ...userListInactive,
          { ...userListActive[idx], status: 'inactive' },
        ]);

        const copy = [...userListActive];
        copy.splice(idx, 1);
        setUserListActive(copy);
      });
  };

  const handleActivate = (email) => {
    axios
      .get(`http://localhost:8080/user-update?email=${email}&status=active`)
      .then(() => {
        const idx = userListInactive.findIndex((user) => user.email === email);
        setUserListActive([
          ...userListActive,
          { ...userListInactive[idx], status: 'active' },
        ]);

        const copy = [...userListInactive];
        copy.splice(idx, 1);
        setUserListInactive(copy);
      });
  };

  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (tag) => {
        switch (tag) {
          case 'active':
            return (
              <Tag icon={<CheckCircleOutlined />} color="green">
                {tag.toUpperCase()}
              </Tag>
            );
          case 'inactive':
          case 'blocked':
            return (
              <Tag icon={<CloseCircleOutlined />} color="red">
                {tag.toUpperCase()}
              </Tag>
            );
          default:
            return <Tag>{tag}</Tag>;
        }
      },
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Data de Cadastro',
      dataIndex: 'registryDate',
      key: 'registryDate',
    },
    {
      title: 'Data de Cancelamento',
      dataIndex: 'unsubscribeDate',
      key: 'unsubscribeDate',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Telefone',
      dataIndex: 'telephone',
      key: 'telephone',
    },
    {
      title: 'Tipo de Pagamento',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      render: (payment) => {
        switch (payment) {
          case 'card':
            return <span>Cartão</span>;
          case 'billet':
            return <span>Boleto</span>;
          case 'cash':
            return <span>Dinheiro</span>;
          default:
            return <span>-</span>;
        }
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (profile) => (
        <Space>
          <Button
            onClick={() => {
              if (profile.status === 'active') {
                handleDeactivate(profile.email);
              } else {
                handleActivate(profile.email);
              }
            }}
            danger={profile.status === 'active'}
          >
            {profile.status === 'active' ? 'Desativar' : 'Ativar'}
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    axios.get('http://localhost:8080/user-list?status=active').then((res) => {
      setUserListActive(res.data);
    });
    axios.get('http://localhost:8080/user-list?status=inactive').then((res) => {
      setUserListInactive(res.data);
    });
    axios.get('http://localhost:8080/user-list?status=blocked').then((res) => {
      setUserListBlocked(res.data);
    });
  }, []);

  return (
    <div style={{ background: 'white', padding: '18px' }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Ativos" key="1">
          <Table columns={columns} dataSource={userListActive} />
        </TabPane>
        <TabPane tab="Inativos" key="2">
          <Table columns={columns} dataSource={userListInactive} />
        </TabPane>
        <TabPane tab="Bloqueados" key="3">
          <Table columns={columns} dataSource={userListBlocked} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UserList;
