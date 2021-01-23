import React, { useEffect, useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { withRouter } from 'react-router';

const VideoPlayer = (props) => {
  const [vimeoId, setvimeoId] = useState();

  useEffect(() => {
    setvimeoId(props.location.state.vimeoId);
  }, [props]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {vimeoId ? (
          <Vimeo video={vimeoId} width={1500} height={850} id={vimeoId} />
        ) : (
          <span />
        )}
      </div>
    </div>
  );
};

export default withRouter(VideoPlayer);
