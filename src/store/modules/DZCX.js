/**
 * Created by guohanliang on 2017/7/7.
 */
const state = {
  testVuex : '123456'
};
const mutations = {

  ['TESTVUEX'](state, test){
    state.testVuex = test;
  }
};
export default {
  state,
  mutations
}
