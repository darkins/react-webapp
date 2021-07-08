import React from 'react';
import { Typography, Divider, Upload } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import './index.css';

const { Link } = Typography;

const Dragger = Upload.Dragger;


class Summary extends React.Component {
  render() {
    return (     
        <div className="site-layout-content">
              <div className="grid">
                <div className="left">
                  <div className="container">
                    <div className="flex-sb">
                      <h4>Title</h4>
                      <Link className="bold">Edit</Link> 
                    </div>
                    <Divider />
                    <h1>Hurricane Brian</h1>
                  </div>
                  <div className="container">
                    <div className="flex-sb">
                      <h4>Description</h4>
                      <Link className="bold">Edit</Link> 
                    </div>
                    <Divider />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="container">
                    <div className="flex-sb">
                      <h4>Country</h4>
                      <Link className="bold">Edit</Link> 
                    </div>
                    <Divider />
                    <h3>LA, MS, AL</h3>
                  </div>
                  <div className="container">
                    <div className="flex-sb">
                      <h4>Image</h4>
                    </div>
                    <Divider />
                    <Dragger {...this.props}>
                      <p className="ant-upload-drag-icon">
                        <FileImageOutlined className="icon-color" />
                      </p>
                      <p className="ant-upload-hint">Click or drag file to this area to upload</p>
                    </Dragger>
                  </div>
                </div>
                <div className="right">
                  <div className="flex-sb">
                    <h4>Available funds</h4>
                    <Link className="bold">+ Add more funds</Link> 
                  </div>
                  <Divider />                
                  <h1 className="amount">USD $10,000</h1>
                </div>
              </div>
            </div>
    )
  }
}

export default Summary;