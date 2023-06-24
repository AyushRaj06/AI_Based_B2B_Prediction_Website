import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';

const Pie = () => {
  const [openValue, setOpenValue] = useState(0);
  const [closedValue, setClosedValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/your-backend-api-url');

        const { open, closed } = response.data;

        setOpenValue(open);
        setClosedValue(closed);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Highcharts.chart('PieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: 'transparent',
        type: 'pie',
      },
      title: {
        text: 'Open and Closed invoices',
        align: 'center',
        style: { color: 'white' },
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderRadius: 5,
          colors: ['#8fd163', '#d16363'],
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4,
            },
          },
        },
      },
      series: [
        {
          name: 'Share',
          data: [
            { name: 'Open', y: parseFloat(openValue) },
            { name: 'Closed', y: parseFloat(closedValue) },
          ],
        },
      ],
    });
  }, [openValue, closedValue]);

  return (
    <div>
      <div id="PieChart"></div>
    </div>
  );
};

export default Pie;
