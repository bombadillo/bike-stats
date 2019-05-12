import metreToFeetConvertor from './metreToFeetConvertor'
import metreToMileConvertor from './metreToMileConvertor'
import secondToTimeConvertor from './secondToTimeConvertor'

export default {
  metreToFeet: metreToFeetConvertor.convert,
  metreToMile: metreToMileConvertor.convert,
  metreToMileValue: metreToMileConvertor.convertValue,
  secondToTime: secondToTimeConvertor.convert,
  convertMetresPerSecond: metreToMileConvertor.convertMetresPerSecond
}
