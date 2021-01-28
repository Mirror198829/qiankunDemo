import {initGlobalState} from 'qiankun'
import initialState from './globalState'
const actions = initGlobalState(initialState)
actions.getGlobalState = (key) => {
    // 有key，表示取globalState下的某个子级对象
    // 无key，表示取全部
    return key ? initialState[key] : initialState
}
export default actions