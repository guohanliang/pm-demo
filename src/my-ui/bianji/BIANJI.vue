<template>
  <div class="bianjilan">
    <my-ueditor @ready="editorReady" class="bianji_kuang"></my-ueditor>
  </div>
</template>

<script>
  import VueUEditor from '../ueditor/UEDITOR.vue';
  export default {
    props:['mmm'],
    data(){
        return {
            dd:""
        }
    },
    components: { VueUEditor },
    methods: {
      editorReady (editorInstance) {
        editorInstance.setContent('Hello world!<br>你可以在这里初' +
          '始化编辑器的初始内容。');
        editorInstance.addListener('contentChange', () => {
          console.log('编辑器内容发生了变化：', editorInstance.getContent());
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
