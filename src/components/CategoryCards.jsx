import React, { useEffect } from 'react';
import { Card, Image, Typography } from 'antd';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  LikeOutlined,
  DislikeOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

const CategoryCards = ({ title }) => {
  useEffect(() => {
    const listitems = document.getElementsByClassName('menu-item-wrapper');
    for (let i = 0; i < listitems.length; i += 1) {
      listitems[i].removeAttribute('tabIndex');
    }
  }, []);

  const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' },
  ];

  return (
    <div>
      <Title level={2}>{title}</Title>
      <ScrollMenu
        id="ScrollMenu"
        dragging={false}
        wheel={false}
        alignCenter={false}
        arrowLeft={
          <LeftCircleOutlined style={{ fontSize: '40px', cursor: 'pointer' }} />
        }
        arrowRight={
          <RightCircleOutlined
            style={{ fontSize: '40px', cursor: 'pointer' }}
          />
        }
        data={list.map((e) => (
          <Card
            key={e.name}
            hoverable
            style={{ margin: '20px' }}
            cover={
              <Image
                preview={false}
                width={300}
                height={250}
                src="https://picsum.photos/300/250?grayscale"
              />
            }
            actions={[<LikeOutlined />, <DislikeOutlined />, <HeartOutlined />]}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        ))}
      />
    </div>
  );
};

export default CategoryCards;
