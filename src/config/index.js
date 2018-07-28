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
      clientId: 15277,
      redirectUri: 'http://localhost:8080/strava/authorised',
      responseType: 'code'
    }
  }
}

export default config
