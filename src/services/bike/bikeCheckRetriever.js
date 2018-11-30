import axios from 'axios'

import config from '../../config'

var retrieveByBikeId = async bikeId => {
  try {
    var result = await axios.get(
      `${config.bikeStatsApi.bikeCheckRetrieve}/${bikeId}`
    )
    return result.data
  } catch (error) {
    console.log('unable to retrieve bike check')
    console.log(error)
    return false
  }
}

export default {
  retrieveByBikeId: retrieveByBikeId
}
