import React from 'react';
import { Typography, Card, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './index.css';

const { Link } = Typography;

class Assets extends React.Component {
  render() {
    return (
      <div className="site-layout-content">
        <div className="flex-right">
          <Button icon={<EditOutlined />} type="default" className="absolute-btn">Create new asset</Button>
        </div>              
        <div className="grid">
          <Link>
            <Card hoverable className="card active">
              <h5>Cash Payment</h5>
              <p>Created 15 June 2021</p>
            </Card>
          </Link>
          <Link>
            <Card hoverable className="card active">
              <h5>Food Voucher</h5>
              <p>Created 15 June 2021</p>
            </Card>
          </Link>
          <Link>
            <Card hoverable className="card active">
              <h5>House in a box</h5>
              <p>Created 15 June 2021</p>
            </Card>
          </Link>
        </div>
      </div>          
    )
  }
}

export default Assets;