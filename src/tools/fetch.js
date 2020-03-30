import {Platform} from 'react-native'

const DEFAULT_URL = 'https://flgateway-b-qa.edgelogistics.com'

const getToken =  () =>{
  return  window.localStorage.getItem('token')
}

const defaultHeaders = new Headers()

export const Fetch = async (method, URL, data, extraHeaders) => {

  if (!defaultHeaders.has('Authorization')){
    defaultHeaders.append('Authorization', Platform.OS==='web' ? getToken() ? `Bearer ${getToken()}` : null : null)
  }

  if ((!defaultHeaders.has('content-type'))){
    defaultHeaders.append('content-type','application/json')
  }

  defaultHeaders.append('access-control-allow-origin', '*')
  defaultHeaders.append('Access-Control-Allow-Methods', '*')
  
  if (extraHeaders){
    extraHeaders.forEach((item,)=>{
      defaultHeaders.append(item.key, item.value)
    })
  }

  const requestInit = {
    method: method,
    headers: new Headers(defaultHeaders),
  }

  if (data){
    requestInit.body = JSON.stringify(data)
  }

  return await fetch(
    'https://carrierportal-b-qa.edgelogistics.com/api/www/v1' + URL,
    requestInit
  ).then(res => res ? res.json() : {})
}