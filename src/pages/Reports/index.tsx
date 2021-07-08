import React from 'react';
import LineChart from './Charts/LineChart';

const Reports: React.FC = () => {

  return (
    <>
      <div className="flex-sb title-bar">
        <h1>Reports</h1>
      </div>
      <div className="site-layout-content grid">
        <div>
          Chart 1
          <LineChart />
        </div>
        <div>
          Chart 2
          <LineChart />
        </div>
              
      </div>
    </>
  )
};

export default Reports;