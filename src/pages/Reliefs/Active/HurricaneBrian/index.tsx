import React from 'react';
import { Tabs } from 'antd';
import Summary from './Summary';
import Beneficiaries from './Beneficiaries';
import Assets from './Assets';
import Disbursements from './Disbursements';
import './index.css';

const TabPane = Tabs.TabPane;

class HurricaneBrian extends React.Component {
  render() {
    return (
      <>
        <h1>Hurricane Brian</h1>   
        <Tabs defaultActiveKey="1">          
          <TabPane tab="Summary" key="1">
            <Summary />
          </TabPane>
          <TabPane tab="Beneficiaries" key="2">
            <Beneficiaries />
          </TabPane>
          <TabPane tab="Assets" key="3">
            <Assets />
          </TabPane>
          <TabPane tab="Disbursements" key="4">
            <Disbursements />
          </TabPane>
        </Tabs>
      </>
    )
  }
}

export default HurricaneBrian;