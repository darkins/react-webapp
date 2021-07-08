import React from 'react';
import { Timeline } from 'antd';


class SendAssets extends React.Component {
  render() {
    return (
      <div className="site-layout-content">
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    )
  }
}

export default SendAssets;