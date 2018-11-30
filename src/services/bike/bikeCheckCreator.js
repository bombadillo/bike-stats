import axios from 'axios'

import config from '../../config'

var create = async bikeCheck => {
  try {
    console.log(bikeCheck)
    var result = await axios.post(
      `${config.bikeStatsApi.bikeCheckCreate}`,
      bikeCheck
    )
    return result.data
  } catch (error) {
    console.log('unable to retrieve bike check')
    console.log(error)
    return false
  }
}

export default {
  create: create
}
