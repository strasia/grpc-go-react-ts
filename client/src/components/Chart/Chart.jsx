import React, { useContext } from 'react'
import { Context } from '../../context/context'
import { Bar } from 'react-chartjs-2'

import styles from './Chart.module.sass'

export default function Chart() {
  const { totalconfirmed, totalrecovered, totaldeaths } = useContext(Context)

  return (
    <div className={styles.container}>
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [totalconfirmed, totalrecovered, totaldeaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      />
    </div>
  );
};