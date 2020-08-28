export enum ACTIONS {
  UPDATE_DATA
}

export function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.UPDATE_DATA :
      const newState = updataData(action.summary.current, action.country)
      if (!newState) {
        alert("no data")
        return state
      }
      return newState
    default :
      return state
  }
}

function updataData(summary: any, country: string) {
  const countriesList = summary.countriesList;

  if(!country) {
    return summary.global
  }
  const countryData = countriesList.filter((item: any ) => {
    return item.slug === country
  })[0]

  return countryData
}