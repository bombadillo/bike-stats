import config from '../../config/index'

var redirect = function() {
  var redirectUrl = `${config.stravaApi.stravaAuthUrl}?client_id=${
    config.stravaApi.clientId
  }&redirect_uri=${config.stravaApi.redirectUri}&response_type=${
    config.stravaApi.responseType
  }&scope=activity:read_all,profile:read_all`
  window.location.href = redirectUrl
}

export default {
  redirect: redirect
}
