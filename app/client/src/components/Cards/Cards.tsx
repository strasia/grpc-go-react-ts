import React from 'react'
import { Grid } from '@material-ui/core'
import CardComponent from './Card/Card'
import styles from './Cards.module.sass'

export default function Info({ data: { totalconfirmed, totalrecovered, totaldeaths, date }}: {data:{totalconfirmed:number, totalrecovered:number, totaldeaths:number, date:string}})  {
  if (!totalconfirmed) {
    return null
  }
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