import React from 'react';
import { Table, Badge, Modal, Button, Space, Typography, Checkbox, Upload, message} from 'antd';
import { ImportOutlined, PlusOutlined, EyeOutlined, InboxOutlined } from '@ant-design/icons';
import './index.css';

const { Link } = Typography;
const { Dragger } = Upload;

function onChange(e: { target: { checked: any; }; }) {
  console.log(`checked = ${e.target.checked}`);
}
//TODO This all needs to be refactored and moved to external file, once we have the final End points
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: { file: { name?: any; status?: any; }; fileList: any; }) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: { dataTransfer: { files: any; }; }) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const dataSource = [{
  key: '1',
  status: <Badge count="PENDING" style={{ backgroundColor: '#E7BB1F' }} />,
  name: 'Gabriela Brown',
  ssn: '*** ** 6578',
  type: 'Self registered',
  edit: <Link><EyeOutlined /></Link>
}, {
  key: '2',
  status: <Badge count="PENDING" style={{ backgroundColor: '#E7BB1F' }} />,
  name: 'Sibyl Marvin',
  ssn: '*** ** 6578',
  type: 'Self registered',
  edit: <Link><EyeOutlined /></Link>
}, {
  key: '3',
  status: <Badge count="APPROVED" style={{ backgroundColor: '#87d068' }} />,
  name: 'Jasmine Feest',
  ssn: '*** ** 6578',
  type: 'Self registered',
  edit: <Link><EyeOutlined /></Link>
}, {
  key: '4',
  status: <Badge count="APPROVED" style={{ backgroundColor: '#87d068' }} />,
  name: 'Michael Scott',
  ssn: '*** ** 6578',
  type: 'Self registered',
  edit: <Link><EyeOutlined /></Link>
}];

const columns = [{
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'SSN',
  dataIndex: 'ssn',
  key: 'ssn',
}, {
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'View',
  dataIndex: 'edit',
  key: 'edit',
  }];

class Beneficiaries extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
    modal3Visible: false,
  };

  setModalImportVisible(modal1Visible: any) {
    this.setState({ modal1Visible });
  }

  setModalAddVisible(modal2Visible: any) {
    this.setState({ modal2Visible });
  }

  setModalViewVisible(modal3Visible: any) {
    this.setState({ modal3Visible });
  }

  render() {
    return (
      <div className="site-layout-content">
        <div className="flex-right">
          <Space>
            <Button onClick={() => this.setModalImportVisible(true)} icon={<ImportOutlined />} type="default" className="absolute-btn">Import Beneficiaries</Button>
            <Button onClick={() => this.setModalAddVisible(true)} icon={<PlusOutlined />} type="default" className="absolute-btn">Add Beneficiaries</Button>
            <Modal
              title="Import Beneficiaries"
              centered
              visible={this.state.modal1Visible}
              onOk={() => this.setModalImportVisible(false)}
              onCancel={() => this.setModalImportVisible(false)}
              width={1000}
            >
               <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined style={{ color: '#ccc' }} />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other bandned files
                </p>
              </Dragger>
              <div className="checkbox-container">
                <p>
                  <Checkbox onChange={onChange}>Automatically approve imported beneficiaries</Checkbox>
                </p>
                <p>
                <Checkbox onChange={onChange}>Notify beneficiaries by email about available support</Checkbox>
                </p>
              </div>
            </Modal>
            <Modal
              title="Add Beneficiaries"
              centered
              visible={this.state.modal2Visible}
              onOk={() => this.setModalAddVisible(false)}
              onCancel={() => this.setModalAddVisible(false)}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
            <Modal
              title="Personal Details"
              centered
              visible={this.state.modal3Visible}
              onOk={() => this.setModalViewVisible(false)}
              onCancel={() => this.setModalViewVisible(false)}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </Space>
        </div>
        <Table dataSource={dataSource} columns={columns} size="small" />
      </div>
    )
  }
}

export default Beneficiaries;