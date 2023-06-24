import React, { useEffect } from 'react';
import ChartInput from './ChartInput';
import Bar from './BarGraph';
import Pie from './PieChart';

const AnalyticsView = () => {

  const squareStyle = {
    width: '30%',
    height: '30%',
    backgroundColor: '#666666',
    margin: '10px',
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#666666', }}>
      <div style={squareStyle}>
        <ChartInput />
      </div>
      <div style={squareStyle}>
        <Bar />
      </div>
      <div style={squareStyle}>
        <Pie />
      </div>
    </div>
  );
};

export default AnalyticsView;