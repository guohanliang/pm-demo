<template>
  <div class="bianjilan">
    <my-ueditor @ready="editorReady" class="bianji_kuang"></my-ueditor>
  </div>
</template>

<script>
  import VueUEditor from '../ueditor/UEDITOR.vue';
  export default {
    created(){
      //console.log(this.mmm)
    },
    props:['mmm'],
    data(){
        return {
            dd:"",

            cc:"",

            content:""
        }
    },
    components: { VueUEditor },
    methods: {
      editorReady (editorInstance) {
        editorInstance.setContent('Hello world!你可以在这里初' +
          '始化编辑器的初始内容。');
        editorInstance.addListener('contentChange', () => {
          this.cc = editorInstance.getContent()
//          console.log(this.cc);
          localStorage.setItem("content",this.cc)
//          console.log(localStorage.getItem("content"))
          this.content=editorInstance.getContent();
        });
      }
    },
    created(){
        this.dd=this.mmm;
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
