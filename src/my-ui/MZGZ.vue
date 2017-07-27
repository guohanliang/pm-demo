<template>
  <div class="mzgz">
    123
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  mounted(){
//    axios.get('https://api.douban.com/v2/book/1220562', {
//      firstName: 'Fred',
//      lastName: 'Flintstone'
//    })
//      .then(function (response) {
//        console.log(response);
//      })
//      .catch(function (response) {
//        console.log(response);
//      });


//    axios({
//      method:"POST",
//      url:'./static/list.json',
//      data:{
//        firstName:"Fred",
//        lastName:"Flintstone"
//      }
//    });

    axios.defaults.baseURL = 'https://api.example.com';
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    axios.post('https://api.douban.com/v2/book/1220562',{},config)
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/sass';
  .mzgz{
    width:80%;
    height:626px;
    background: $highlight-color;
    margin-left:20%;
    margin-top:100px;
  }
</style>
