import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/route';
import { Upload, message, Drawer, Form, Button, Input, Select, Card } from 'antd';
import { PlusOutlined, FileImageOutlined } from '@ant-design/icons';
import './index.css';

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  showUploadList: false,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info:any) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


class Reliefs extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <div className="flex-sb title-bar">
          <h2>Reliefs</h2><Button icon={<PlusOutlined />} type="default" onClick={this.showDrawer}>Create New Relief</Button>
        </div>
        <div className="site-layout-content">
          <h3>Active</h3>
          <Link to={ROUTE.BRIAN}>
            <Card hoverable className="card active">
              <h2>Hurricane Brian</h2>
              <h3>LA, MS, AL</h3>
              <h4>Created: 15 June 2021</h4>
            </Card>
          </Link>
          <h3>Archive</h3>
          <div className="grid">
              <Card hoverable className="card">
                <h2>Hurricane Berta</h2>
                <h3>LA, MS, AL</h3>
                <h4>Created: 15 June 2021</h4>
              </Card>
              <Card hoverable className="card">
                <h2>Wildfires</h2>
                <h3>CA</h3>
                <h4>Created: 15 June 2021</h4>
              </Card>
            <Card hoverable className="card">
              <h2>Mill river dam</h2>
              <h3>AL</h3>
              <h4>Created: 15 June 2021</h4>
            </Card>
          </div>
        </div>        
        <Drawer
          title="Create new relief"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Create
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter relief title' }]}
            >
              <Input placeholder="Please enter relief title" />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
              <Input.TextArea rows={4} placeholder="please enter url description" />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[
                {
                  required: true,
                  message: 'please enter location',
                },
              ]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select State"
                optionFilterProp="states"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}  
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Select>
            </Form.Item>
            <Form.Item
                name="image"
                label="Image"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <FileImageOutlined />
                </p>
                <p className="ant-upload-hint">Click or drag file to this area to upload</p>
              </Dragger>
            </Form.Item>
            <Form.Item
                name="funds"
                label="Add funds to the relief"
                rules={[
                  {
                    required: false,
                  },
                ]}
            >
              <div className="grid">
                <div className="balance">
                  <h2>USD</h2>
                  <p>Balance: $200,000</p>
                </div>
                <div className="amount">
                  <h4>Add funds</h4>
                  <Input placeholder="Please enter amount" />
                </div>                
              </div>
            </Form.Item>
          </Form>
        </Drawer>
      </>
    )
  }
}

export default Reliefs;