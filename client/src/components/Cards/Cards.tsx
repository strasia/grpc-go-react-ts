import React, { useContext } from 'react'
import { Context } from '../../context/context'
import { Grid } from '@material-ui/core'
import CardComponent from './Card/Card'
import styles from './Cards.module.sass'

export default function Info()  {
  const { totalconfirmed, totalrecovered, totaldeaths, date } = useContext(Context)
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={totalconfirmed}
          lastUpdate={date}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={totalrecovered}
          lastUpdate={date}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={totaldeaths}
          lastUpdate={date}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  )
}