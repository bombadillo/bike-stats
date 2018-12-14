import config from '../../config/index'
import axios from 'axios'

var retrieve = function(code) {
  return new Promise((resolve, reject) => {
    var url = config.stravaApi.stravaAccessTokenUrl

    var body = {
      client_id: config.stravaApi.clientId,
      client_secret: config.stravaApi.clientSecret,
      code: code
    }

    axios
      .post(url, body)
      .then(res => {
        if (res.data) {
          resolve(res.data)
        } else {
          reject()
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  retrieve: retrieve
}
