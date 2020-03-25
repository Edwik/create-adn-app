const getUSCitiesTowns = require('./../../assets/USCitiesTowns.json')

export const getStateByCode = (stateCode) => getUSCitiesTowns.find(state => state.code === stateCode) || getUSCitiesTowns.find(state => state.code.startsWith(stateCode))

export const parseLocationText = (cityName, stateCode) => {
  const state = stateCode ? getStateByCode(stateCode) : '';
  return cityName ? `${cityName}${stateCode ? ', ' + stateCode : ''}` : state ? `${state.name} (${stateCode})` : '';

}
