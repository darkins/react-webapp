import React from 'react';
import { Typography, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css';
import logo from "./svdp.png";

const { Link } = Typography;

class Profile extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'svdp.png',
      status: 'done',
      src: {logo},
    }],
  };

  render() {
    const { fileList } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload Logo</div>
      </div>
    );
    return (
      <>
        <div className="flex-sb title-bar">
            <h2>Profile</h2>
        </div>
        <div className="site-layout-content">          
          <div className="flex-sb">
            <div className="clearfix">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
            </div>
          </div>
          <h3>The Society of St. Vincent de Paul</h3>
          <p>
            The National Council of the United States, Society of St. Vincent de Paul, Inc. is a non-profit organization under section 501(c)(3) of the United States Internal Revenue Code. Donations to the National Council are deductible.
          </p>
          <p>
          The Council’s tax identification number is: <strong>13-5562362</strong>.
          </p>
          <p>
            <Link href="https://ssvpusa.org/" target="_blank">
              Link to Website
            </Link>
          </p>
        </div>
      </>
    )
  }
}

export default Profile;