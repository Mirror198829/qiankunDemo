
import micrComp from './micrComp'
//import error from './error'
export default (Vue)=>{
    //Vue.component("nlTitle",window.__POWERED_BY_QIANKUN__ ? window.commonComponent.nlTitle : error);
    Vue.component("micrComp",micrComp);
}
