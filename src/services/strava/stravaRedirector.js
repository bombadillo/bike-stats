import config from '../../config/index'

var redirect = function() {
  var redirectUrl = `https://www.strava.com/oauth/authorize?client_id=${
    config.stravaApi.clientId
  }&redirect_uri=${config.stravaApi.redirectUri}&response_type=${
    config.stravaApi.responseType
  }`
  window.location.href = redirectUrl
}

export default {
  redirect: redirect
}
