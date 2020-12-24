import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
  const data = {
    datasets: [
      {
        data: [10, 20],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Red', 'Yellow'],
  };
  return (
    <Bar
      data={data}
      //   data={{
      //     labels: ['Refund', 'Orders', 'paid'],
      //     datasets: [
      //       {
      //         label: 'Orders',
      //         data: [20],
      //         backgroundColor: 'red',
      //         borderWidth: 2,
      //       },
      //       //   Second data

      //       {
      //         label: 'Bought',
      //         data: [90],
      //         backgroundColor: 'green',
      //       },
      //     ],
      //   }}
      //   height={100}
      //   width={200}
      //   options={{
      //     aspectRatio: false,
      //     scales: {
      //       yAxes: [
      //         {
      //           ticks: {
      //             beginAtZero: true,
      //           },
      //         },
      //       ],
      //     },
      //   }}
    />
  );
};

export default Chart;
