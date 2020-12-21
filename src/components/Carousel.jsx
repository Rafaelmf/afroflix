import React from 'react';
import { Carousel as AntdCarousel, Image } from 'antd';

const Carousel = () => {
  return (
    <AntdCarousel style={{ marginBottom: '50px' }} autoplay>
      <div>
        <Image
          preview={false}
          width="100%"
          height={400}
          src="https://picsum.photos/1000/300"
        />
      </div>
      <div>
        <Image
          preview={false}
          width="100%"
          height={400}
          src="https://picsum.photos/1000/300"
        />
      </div>
      <div>
        <Image
          preview={false}
          width="100%"
          height={400}
          src="https://picsum.photos/1000/300"
        />
      </div>
      <div>
        <Image
          preview={false}
          width="100%"
          height={400}
          src="https://picsum.photos/1000/300"
        />
      </div>
    </AntdCarousel>
  );
};

export default Carousel;
