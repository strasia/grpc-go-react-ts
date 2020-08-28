import React, {useContext, useState, useEffect, useRef } from 'react'
import { Context } from '../../context/context'
import { ApiService, ApiRequest } from '../../covid19api/covid19api'

import styles from './CountryPicker.module.sass'


export default function CountryPicker() {
  const { setState } = useContext(Context)

  const [countries, setCountries] = useState([])
  const countryRef = useRef()

  useEffect(() => {
    ApiService.getCountries(new ApiRequest(), {}, (err: any, response: any) => {
      setCountries(response.toObject().itemList)
    })
  }, [])

  return (
    <div className={styles.formControl}>
      <select className="form-control" ref={countryRef} name="country" id="country" onChange={(e) => setState(e.currentTarget.value)}>
        <option key="0" value="">Global</option>
        {
          countries.map((item: any, key: any) => {
            return <option key={key+1} value={item.slug}>{item.country}</option>
          })
        }
      </select>
    </div>
  )
}