import React, { useState, useEffect, useRef } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { Navi, CountryPicker, Cards, Chart } from './components'
import { ApiService, ApiRequest } from './covid19api/covid19api'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.sass'

export default function App() {
  const summary = useRef({})
  const [data, setData] = useState(null)

  useEffect(() => {
    ApiService.getSummary(new ApiRequest(), {}, (err: any, response: any) => {
      if ( response ){
        summary.current = response.toObject()
        summary.current.global = {...summary.current.global, date: summary.current.date}
        setData(summary.current.global)
      }
    })
  }, [])

  function handleCountryChange(e: any) {
    const country = e.target.value
    if (country === '') {
      setData(summary.current.global)
    } else {
      const countryData = summary.current.countriesList.filter((item: any ) => {
        return item.slug === country
      })[0]
      if (countryData) {
        setData(countryData)
      } else {
        alert("No data")
      }
    }
  }
  
  return (
    data === null ? (<LoadingOverlay className={styles.overlay} active={true} spinner />) : 
    (
      <>
        <Navi />
        <div className={styles.container}>
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Cards data={data} />
          <Chart data={data} />
        </div>
      </>
    )
  )
}