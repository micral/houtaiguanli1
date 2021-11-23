import * as local from './storage'
import { TIME_STAMP ,TIMEOUT} from '../common/common'
export const setTimeStamp=()=>{
  // 保存时间
  local.setItem(TIME_STAMP,Date.now())
}
const getTimeStamp=()=>{
  return local.getItem(TIME_STAMP)
}
// token是否超时
export const isCheckTimeout=()=>{
  // 现在的时间-保存的时间>2小时
  const currentTime=Date.now()
  const time_stamp=getTimeStamp()
  return currentTime-time_stamp < TIMEOUT
}