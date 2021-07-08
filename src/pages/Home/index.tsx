import React from 'react';
import { Skeleton } from 'antd';
import './index.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>        
        <div className="site-layout-content">
          <Skeleton paragraph={{ rows: 4 }} />
          <Skeleton paragraph={{ rows: 2 }} />
          <Skeleton paragraph={{ rows: 6 }} />
        </div>
      </div>
    )
  }
}

export default Home;