import Vue from 'vue'
import {initGlobalState} from 'qiankun'
import initialState from './globalState'
let obsInitialState = Vue.observable(initialState); //initialState变成可响应式对象
const actions = initGlobalState(obsInitialState)
actions.onGlobalStateChange((newState, prev) => {
    console.log(`%c 主应用发生变化:${JSON.stringify(newState)},${JSON.stringify(prev)}`,'color:yellow');// state: 变更后的状态; prev 变更前的状态
    for (let key in newState) {
      initialState[key] = newState[key]
      sessionStorage.setItem(key,newState[key])  //存入sessionStorage
    }
});
actions.getGlobalState = (key) => {
    // 有key，表示取globalState下的某个子级对象
    // 无key，表示取全部
    return key ? initialState[key] : initialState
}

export default actions