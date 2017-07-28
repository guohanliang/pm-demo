/**
 * Created by guohanliang on 2017/7/7.
 */
 import {TESTVUEX,SMALL} from './mutation-types'
const state = {
  testVuex : '123456',
  small:1,
  count:33333,
  newData1:{"t0":0}
};
const getters = {
	smallLength:state =>state.small.length
}
const actions = {
	hello({commit},n){
		commit('SMALL',n)
	}
};

const mutations = {
  [TESTVUEX](state){
    state.testVuex ++;
    console.log(state.testVuex)
  },
  [SMALL](state,n){
  	state.small=n;
  	console.log(state.small)
  }
};
export default {
  state,
  mutations,
  actions,
  getters
}
