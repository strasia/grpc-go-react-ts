import React, { useReducer, useEffect, useRef } from 'react'
import { Navi, CountryPicker, Cards, Chart } from './components'
import LoadingOverlay from 'react-loading-overlay'
import { ApiService, ApiRequest } from './covid19api/covid19api'

import { ACTIONS, reducer } from './context/reducer'
import { Context } from './context/context'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.sass'


export default function App() {
  const summary = useRef({})
  const [state, dispatch] = useReducer(reducer, null)

  useEffect(() => {
    ApiService.getSummary(new ApiRequest(), {}, (err: any, response: any) => {
      if ( response ){
        summary.current = response.toObject()
        summary.current.global = {...summary.current.global, date: summary.current.date}
        dispatch({type: ACTIONS.UPDATE_DATA, summary: summary})
      }
    })
  }, [])
  
  return (
    state === null ? (<LoadingOverlay className={styles.overlay} active={true} spinner />) : 
    (
      <>
        <Navi />
        <div className={styles.container}>
          <Context.Provider value={{
            ...state,
            setState: (country: string) => dispatch({type: ACTIONS.UPDATE_DATA, summary: summary, country: country}),
          }}>
            <CountryPicker />
            <Cards />
            <Chart />
          </Context.Provider>
        </div>
      </>
    )
  )
}