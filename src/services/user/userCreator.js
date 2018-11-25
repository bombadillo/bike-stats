import axios from 'axios'

import config from '../../config'

var create = async user => {
  try {
    user.accessToken = localStorage.getItem('stravaAccessToken')
    user.stravaId = user.id
    delete user.id

    var result = await axios.post(config.bikeStatsApi.userCreate, user)
    if (result.status === 201) {
      console.log('created user', user)
    } else {
      console.log('user already exists', user)
    }
    return user
  } catch (error) {
    console.log('unable to create user')
    console.log(error)
    return false
  }
}

export default {
  create: create
}
