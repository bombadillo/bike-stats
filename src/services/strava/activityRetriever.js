import config from '../../config/index'
import axios from 'axios'

var retrieveLatest = function(count, page = 1) {
  return new Promise((resolve, reject) => {
    var queryString = `?page=${page}&per_page=${count}`
    var url = `${
      config.stravaApi.stravaAthleteUrl
    }/athlete/activities${queryString}`
    var accessToken = localStorage.getItem('stravaAccessToken')

    if (!accessToken) {
      return
    }

    var requestConfig = {
      headers: { Authorization: `Bearer ${accessToken}` }
    }

    axios
      .get(url, requestConfig)
      .then(res => {
        if (res.data) {
          resolve(res.data)
        } else {
          reject()
        }
      })
      .catch(error => {
        reject()
      })
  })
}

export default {
  retrieveLatest: retrieveLatest
}
