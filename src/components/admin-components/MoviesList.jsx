import React, { useEffect, useState } from 'react';
import { Table, Select, Button, message, Tooltip } from 'antd';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

import { SaveOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const UserList = () => {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [enabledButton, setEnabledButton] = useState();
  const [genresToUpdate, setGenresToUpdate] = useState();

  const handleSaveGenreList = (id) => {
    axios
      .post(`http://localhost:8080/movie/add-genres?id=${id}`, {
        genreList: genresToUpdate[id],
      })
      .then(() => {
        setEnabledButton({ ...enabledButton, [id]: false });
        message.success('Lista de categorias salvas com sucesso!');
      });
  };

  const columns = [
    {
      title: 'Titulo',
      dataIndex: 'title',
      key: 'title ',
      width: '17%',
    },
    {
      title: 'Vimeo ID',
      dataIndex: 'vimeoId',
      key: 'vimeoId',
      align: 'center',
    },
    {
      title: 'Sinopse',
      width: '40%',
      dataIndex: 'overview',
      key: 'overview',
      render: (overview) => (
        <div style={overview ? { overflowY: 'auto', height: '170px' } : {}}>
          {overview}
        </div>
      ),
    },
    {
      title: 'Popularidade',
      dataIndex: 'popularity',
      key: 'popularity',
      align: 'center',
    },
    {
      title: 'Idioma Original',
      dataIndex: 'originalLanguage',
      key: 'originalLanguage',
      align: 'center',
      render: (lng) => (
        <Tooltip title={lng}>
          <div style={{ fontSize: '20px' }}>
            {lng === 'en' ? getUnicodeFlagIcon('US') : getUnicodeFlagIcon(lng)}
          </div>
        </Tooltip>
      ),
    },
    {
      title: 'Data de Lançamento',
      dataIndex: 'releaseDate',
      key: 'releaseDate',
      align: 'center',
    },
    {
      title: 'Nota (Avg.)',
      dataIndex: 'voteAverage',
      key: 'voteAverage',
      align: 'center',
    },
    {
      title: 'Gêneros',
      dataIndex: 'genreList',
      width: '30%',
      key: 'genreList',
      align: 'center',
      render: (movieGenre, record) => {
        return (
          <div style={{ display: 'flex' }}>
            <Select
              onChange={(event) => {
                setGenresToUpdate({ ...genresToUpdate, [record.id]: event });
                setEnabledButton({ ...enabledButton, [record.id]: true });
              }}
              defaultValue={movieGenre || []}
              style={{ width: '100%' }}
              mode="multiple"
            >
              {genreList
                ? genreList.map((genre) => <Option key={genre}>{genre}</Option>)
                : null}
            </Select>
            <Button
              disabled={
                enabledButton && enabledButton[record.id]
                  ? !enabledButton[record.id]
                  : true
              }
              style={{ marginLeft: '5px' }}
              type="primary"
              icon={<SaveOutlined />}
              onClick={() => handleSaveGenreList(record.id)}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios.get('http://localhost:8080/movie').then((res) => {
      setMovieList(res.data);
    });

    axios.get('http://localhost:8080/movie/genre-list').then((res) => {
      setGenreList(res.data);
    });
  }, []);

  return (
    <div style={{ background: 'white', padding: '18px' }}>
      <Table columns={columns} dataSource={movieList} />
    </div>
  );
};

export default UserList;
