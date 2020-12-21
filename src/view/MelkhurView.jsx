import React from 'react';
import { List, Avatar } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 8; i += 1) {
  listData.push({
    href: 'https://ant.design',
    title: `Ant design part ${i}`,
    avatar: 'https://picsum.photos/100/100',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan nibh vitae consectetur vestibulum. Proin blandit tortor sit amet consequat hendrerit. Donec rutrum ullamcorper est a mattis. Integer id velit dolor. Nulla at lorem nunc. Morbi et iaculis orci. Aenean scelerisque sit amet justo et facilisis. Donec congue porta egestas. Suspendisse lacinia efficitur consectetur. Aliquam egestas ex eu massa fringilla sagittis. Proin tempor aliquet tempor. Donec velit nulla, fermentum quis rutrum non, finibus et ligula. Suspendisse potenti. Nullam eget elementum leo, non tincidunt mi. In consequat volutpat sem et pharetra.',
  });
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const MelkhurView = () => {
  return (
    <>
      <List
        style={{ backgroundColor: 'white' }}
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img width={272} alt="logo" src="https://picsum.photos/300/250" />
            }
          >
            <List.Item.Meta
              avatar={<Avatar size={70} src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};

export default MelkhurView;
