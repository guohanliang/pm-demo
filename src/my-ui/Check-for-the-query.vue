<template>
  <div class="dzcx">
    <my-rightcenter></my-rightcenter>
    <my-rightbiao></my-rightbiao>
    <adjunct></adjunct>
  </div>
</template>

<script>
    import adjunct from './Adjunct.vue'
    import {mapState} from 'vuex'
    import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                aaa: '00000',
            }
        },
        created (){
                    //组件中定义初始化的值    00000
            // console.log("test vues = " + this.testVuex);

            //把store中的值赋值到组件中
            // this.testVuex = this.$store.state.dzcx.testVuex;

            //123456
            //console.log("test vues = " + testVuex);

            //在mutaition中改变store的值
            // this.$store.commit("TESTVUEX", "888888");

            //是在stroe中经过mutaition改变后的值 888888
            // console.log("test vues = " + this.$store.state.dzcx.testVuex);
        },
        // 辅助函数
        // computed:mapState({
        //     testVuex:state=>state.dzcx.testVuex,
        //     // testVuex(state){
        //     //    return this.$store.state.dzcx.testVuex
        //     // }
        // }),
        computed:{
            testVuex(){
                return this.$store.state.dzcx.count;
            },
            tableData(){
                return this.$store.state.dzcx.newData1.t0;
            }
        },
        // computed:mapGetters([
        //     'smallLength'
        // ]),
        // methods:mapMutations([
        //         'SMALL'
        //     ]),
        // methods:mapActions([
        //         'hello'
        //     ]),

        // methods:{
        //     SMALL(){
        //         this.$store.commit('SMALL','13')
        //     }
        // }
        methods:{
            hello(n){
                this.$store.dispatch('hello',n)
                console.log(this.$store.getters.smallLength)
                console.log(this.$store.state.dzcx.small)
            }
        },
        components:{
            adjunct
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .dzcx{
    width: calc(100vw - 200px);
    height:626px;
    margin-left:200px;
    margin-top:100px;
  }
</style>
