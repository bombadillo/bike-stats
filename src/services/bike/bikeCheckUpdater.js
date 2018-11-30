import axios from 'axios'

import config from '../../config'

var update = async bikeCheckUpdate => {
  try {
    bikeCheckUpdate.lastChecked = new Date()
    var result = await axios.put(
      `${config.bikeStatsApi.bikeCheckUpdate}`,
      bikeCheckUpdate
    )
    return result.data
  } catch (error) {
    console.log('unable to retrieve bike check')
    console.log(error)
    return false
  }
}

export default {
  update: update
}
