import config from '../../config/index'
import axios from 'axios'

var retrieve = function(authCode, tokenExpired, refreshToken) {
  return new Promise((resolve, reject) => {
    var url = config.stravaApi.stravaAccessTokenUrl

    var body = {
      client_id: config.stravaApi.clientId,
      client_secret: config.stravaApi.clientSecret
    }

    if (tokenExpired) {
      body['refresh_token'] = refreshToken
      body['grant_type'] = 'refresh_token'
    } else {
      body.code = authCode
      body['grant_type'] = 'authorization_code'
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
