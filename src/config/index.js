const isProd = process.env.NODE_ENV === 'production'

let config = {}

if (isProd) {
  config = {
    env: 'prod',
    stravaApi: {
      stravaAuthUrl: 'https://www.strava.com/oauth/authorize',
      stravaAthleteUrl: 'https://www.strava.com/api/v3',
      stravaAccessTokenUrl: 'https://www.strava.com/oauth/token',
      clientId: 27343,
      clientSecret: '57230d9e96cf5eb1f1cf744b6947919ad51a2e52',
      redirectUri: 'https://chrismumford.xyz/bikestats/strava/authorised',
      responseType: 'code'
    },
    bikeStatsApi: {
      userCreate: 'https://chrismumford.xyz/bike-stats-api/user',
      bikeCheckRetrieve: 'https://chrismumford.xyz/bike-stats-api/bikeCheck',
      bikeCheckCreate: 'https://chrismumford.xyz/bike-stats-api/bikeCheck',
      bikeCheckUpdate: 'https://chrismumford.xyz/bike-stats-api/bikeCheck'
    }
  }
} else {
  config = {
    env: 'dev',
    stravaApi: {
      stravaAuthUrl: 'https://www.strava.com/oauth/authorize',
      stravaAthleteUrl: 'https://www.strava.com/api/v3',
      stravaAccessTokenUrl: 'https://www.strava.com/oauth/token',
      clientId: 15277,
      clientSecret: '6d54f51ce015217c148b0bb91cc0c494760a1036',
      redirectUri: 'http://localhost:8080/strava/authorised',
      responseType: 'code'
    },
    bikeStatsApi: {
      userCreate: 'http://localhost:5003/user',
      bikeCheckRetrieve: 'http://localhost:5003/bikeCheck',
      bikeCheckCreate: 'http://localhost:5003/bikeCheck',
      bikeCheckUpdate: 'http://localhost:5003/bikeCheck'
    }
  }
}

export default config
