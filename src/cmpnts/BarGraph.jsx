import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';

const Bar = () => {
  const [xAxisName, setXAxisName] = useState('');
  const [yAxisValue, setYAxisValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/your-backend-api-url');

        const { xAxis, yAxis } = response.data;

        setXAxisName(xAxis);
        setYAxisValue(yAxis);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    const custom = '#fc7500';

    Highcharts.chart('BarGraph', {
      chart: {
        type: 'column',
        square: true,
        backgroundColor: 'transparent',
      },
      title: {
        align: 'center',
        text: 'Total Amount Per Distribution Channel',
        style: {
          color: 'white',
        },
      },

      legend: {
        enabled: false,
      },

      xAxis: {
        categories: [xAxisName],
        visible: true,
        labels: {
          style: {
            color: 'white',
          },
        },
      },
      yAxis: {
        title: {
        },
        labels: {
          style: {
            color: 'white',
          },
        },
      },
      series: [
        {
          name: 'Value',
          data: [parseFloat(yAxisValue)],
          dataLabels: {
            enabled: true,
            color: 'white',
          },
          color: custom,
        },
      ],
    });
  }, [xAxisName, yAxisValue]);

  return <div id="BarGraph"></div>;
};

export default Bar;
