import React from 'react';
import { Table, Badge, Menu, Dropdown, Button, Modal, Timeline, Divider } from 'antd';
import { EyeOutlined, DeleteOutlined, EditOutlined, SendOutlined, DownOutlined } from '@ant-design/icons';
import './index.css';

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<EyeOutlined />}>
      View
    </Menu.Item>
    <Menu.Item key="2" icon={<DeleteOutlined />}>
      Delete
    </Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Cash</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Crypto</a>
    </Menu.Item>
  </Menu>
);

const dataSource = [{
  key: '1',
  status: <Badge count="SCHEDULED" style={{ backgroundColor: '#E7BB1F' }} />,
  date: 'May 15, 3:22PM',
  type: 'Cash',
  description: '$25',
  edit: <Dropdown overlay={menu}><EditOutlined /></Dropdown>
}, {
  key: '2',
  status: <Badge count="SCHEDULED" style={{ backgroundColor: '#E7BB1F' }} />,
  date: 'May 15, 3:22PM',
  type: 'Voucher',
  description: 'House in a box voucher',
  edit: <Dropdown overlay={menu}><EditOutlined /></Dropdown>
}, {
  key: '3',
  status: <Badge count="APPROVED" style={{ backgroundColor: '#87d068' }} />,
  date: 'May 15, 3:22PM',
  type: 'Voucher',
  description: 'Clothing voucher',
  edit: <Dropdown overlay={menu}><EditOutlined /></Dropdown>
}, {
  key: '4',
  status: <Badge count="APPROVED" style={{ backgroundColor: '#87d068' }} />,
  date: 'May 15, 3:22PM',
  type: 'Voucher',
  description: 'Hygiene kit voucher',
  edit: <Dropdown overlay={menu}><EditOutlined /></Dropdown>
}];

const columns = [{
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Date',
  dataIndex: 'date',
  key: 'date',
}, {
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'Edit',
  dataIndex: 'edit',
  key: 'edit',
}];

class Disbursements extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(modalVisible: any) {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <div className="site-layout-content">
        <div className="flex-right">
          <Button onClick={() => this.setModalVisible(true)} icon={<SendOutlined />} type="default" className="absolute-btn">Send assets</Button>
        </div>
        <Modal
              title="Send Assets"
              centered
              visible={this.state.modalVisible}
              onOk={() => this.setModalVisible(false)}
              onCancel={() => this.setModalVisible(false)}
              width={1000}
            >
              <Timeline>
                <Timeline.Item>
                  <div className="flex-sb step">
                    <h3>Select Asssets</h3>
                    <div>
                      <h5>Assets</h5>
                      <Dropdown overlay={menu2} trigger={['click']} className="dropdown">
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                          Cash <DownOutlined />
                        </a>
                      </Dropdown>
                      <Divider />
                      <h5>Amount</h5>
                      $25 per beneficiary
                      <Divider />
                    </div>
                    <Button>Edit Assets</Button>
                  </div>
                  <Divider />
                </Timeline.Item>
                <Timeline.Item>
                  <div className="flex-sb step">
                    <h3>Choose Beneficiaries</h3>
                    <div><strong>52 Beneficiaries</strong> are selected</div>
                    <Button>Edit Beneficiaries</Button>
                  </div>
                  <Divider />
                </Timeline.Item>
                <Timeline.Item>
                  <div className="flex-sb step">
                    <h3>Schedule Disbursement</h3>
                    <div><strong>June 15, 12:22PM</strong></div>
                    <Button>Change Date</Button>
                  </div>
                </Timeline.Item>
              </Timeline>
            </Modal>
        <Table dataSource={dataSource} columns={columns} size="small" />       
      </div>
    )
  }
}

export default Disbursements;