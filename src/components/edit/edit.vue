<template>
  <div id="edit">
    <div id="nav">
      <input v-model="title"/>
    </div>
    <div class="mavonEditor">
      <mavon-editor v-model="mdText" @change="changeMdEditor"/>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'myEditor',
    data() {
      return {
        title: '简单笔记',
        mdText: '# 我的世界'
      }
    },
    mounted() {
      this.getGoodsList();
    },
    methods: {
      getGoodsList() {
        console.log("接受的参数:" + this.$route.params.id);
      },
      changeMdEditor(value, render) {
        console.log("change value:" + value);
        console.log("change render:" + render);
      }
    }
  }
</script>

<style scoped>
  html {
    height: 100%;
  }

  .mavonEditor {
    width: 100%;
    height: 100%;
  }
</style>
