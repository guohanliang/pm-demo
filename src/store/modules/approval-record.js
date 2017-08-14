const state={
	chName:"",
	orgChName:"",
	time:"",
	resource:"",
	desc:"1"
}

const mutations={
	['CHNAME'](state,m){
		state.chName=m;
	},
	['ORGCHNAME'](state,n){
		state.orgChName=n;
	},
	['TIME'](state,l){
		state.time=l;
	},
	['RESOURCE'](state,h){
		state.resource=h;
	},
	['DESC'](state,i){
		state.desc=i;
	}
}

export default{
	state,
	mutations
}
