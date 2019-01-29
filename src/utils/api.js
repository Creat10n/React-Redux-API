const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const _APIKEY = '49ddcce470c6a5f023b5c00012f07725'

const prepRouteParams = queryStringData => {
  return Object.keys(queryStringData)
    .map(function(key) {
      return `${key}=${encodeURIComponent(queryStringData[key])}`
    })
    .join('&')
}

export const prepUrl = (type, queryStringData) => {
  return `${_baseURL + type}?${prepRouteParams(queryStringData)}`
}

export const getQueryStringData = city => {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}
