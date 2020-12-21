import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';

const UserList = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'INACTIVE') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space>
          <Button icon={<EditOutlined />}>Editar</Button>
          <Button danger icon={<CloseCircleOutlined />}>
            Cancelar
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      email: 'Johnrown@gmail.com',
      tags: ['nice', 'ACTIVE'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      email: 'Johnrown@gmail.com',
      tags: ['INACTIVE'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      email: 'Johnrown@gmail.com',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Toe Joe',
      age: 48,
      email: 'Johnrown@gmail.com',
      tags: ['INACTIVE'],
    },
    {
      key: '5',
      name: 'Asper Trick',
      age: 11,
      email: 'AsperTrick@gmail.com',
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      name: 'Thomas Alert',
      age: 26,
      email: 'ThomasAlert@gmail.com',
      tags: ['INACTIVE'],
    },
    {
      key: '7',
      name: 'Joe Black',
      age: 32,
      email: 'JoeBlack@gmail.com',
      tags: ['cool', 'teacher'],
    },
    {
      key: '8',
      name: 'John Brown',
      age: 32,
      email: 'Johnrown@gmail.com',
      tags: ['nice', 'ACTIVE'],
    },
    {
      key: '9',
      name: 'Joe Black',
      age: 32,
      email: 'JoeBlack@gmail.com',
      tags: ['cool', 'teacher'],
    },
    {
      key: '10',
      name: 'John Brown',
      age: 32,
      email: 'Johnrown@gmail.com',
      tags: ['nice', 'ACTIVE'],
    },
    {
      key: '11',
      name: 'Joe Black',
      age: 32,
      email: 'JoeBlack@gmail.com',
      tags: ['cool', 'teacher'],
    },
    {
      key: '12',
      name: 'John Brown',
      age: 32,
      email: 'Johnrown@gmail.com',
      tags: ['nice', 'ACTIVE'],
    },
    {
      key: '13',
      name: 'Joe Black',
      age: 32,
      email: 'JoeBlack@gmail.com',
      tags: ['cool', 'teacher'],
    },
    {
      key: '14',
      name: 'John Brown',
      age: 32,
      email: 'Johnrown@gmail.com',
      tags: ['nice', 'ACTIVE'],
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UserList;
