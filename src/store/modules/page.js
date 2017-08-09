/**
 * Created by guohanliang on 2017/7/7.
 */
const state ={
	count :'1'
}
const mutations ={
	['COUNT'](state,test){
		state.count=test;
	}
}

export default {
	state,
	mutations
}