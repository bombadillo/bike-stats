const isProd = process.env.NODE_ENV === 'production'

let config = {}

if (isProd) {
  config = {
    env: 'prod'
  }
} else {
  config = {
    env: 'dev',
    stravaApi: {
      stravaAuthUrl: 'https://www.strava.com/oauth/authorize',
      stravaAccessTokenUrl: 'https://www.strava.com/oauth/token',
      clientId: 15277,
      clientSecret: '6d54f51ce015217c148b0bb91cc0c494760a1036',
      redirectUri: 'http://localhost:8080/strava/authorised',
      responseType: 'code'
    }
  }
}

export default config
