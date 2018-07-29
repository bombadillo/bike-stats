import config from '../../config/index'
import axios from 'axios'

var retrieveById = function(athleteId) {
  return new Promise((resolve, reject) => {
    var url = `${config.stravaApi.stravaAthleteUrl}/${athleteId}/stats`
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
  retrieveById: retrieveById
}
