import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Avatar, Input, Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from "./svdp.png";
import { ROUTE } from '../../constants/route';
import './index.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to={ROUTE.PROFILE}>Profile</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to={ROUTE.LOGIN}>Logout</Link>
    </Menu.Item>
  </Menu>
);

const { Search } = Input;

export const Header: React.FC = () => {
  return (
    <div className="header flex-sb">
      <Link to={ROUTE.HOME}>
        <img className="logo" src={logo} alt="SVDP" />
      </Link>
      <div className="nav">
          <Link className="nav-item" to={ROUTE.RELIEFS}>Reliefs</Link>
          <Link className="nav-item" to={ROUTE.REPORTS}>Reports</Link>
          <Link className="nav-item" to={ROUTE.SETTINGS}>Settings</Link>
      </div>
      <div>
        <div className="flex">
          <Space direction="horizontal" size="large">
            <Search placeholder="input search text" enterButton />
            <Dropdown overlay={menu} trigger={['click']}>
              <Avatar icon={<UserOutlined />} />
            </Dropdown>
          </Space>
        </div>        
      </div>
    </div>
    
  )
};
