<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <!-- 博客分类 -->
      <div id="checkboxes">
        <span>Vue.js</span>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <span>Node.js</span>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <span>React.js</span>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <span>Angular4</span>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <!-- 作者 -->
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <!-- 提示信息 -->
    <div v-if="submmited">
      <h3>您的博客发布成功!</h3>
    </div>
    <!-- 博客总览 -->
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题: {{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>
      <p>作者: {{blog.author}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    data () {
      return {
        blog:{
          title:"",
          content:"",
          categories:[],
          author:""
        },
        authors:["Hemiah","Henry","Bucky"],
        // 是否提交
        submmited:false
      }
    },
// npm install vue-resource --save
    methods:{
      post:function(){
        this.$http.post("https://......awfuoz.wilddogio.com/posts.json",this.blog).then(function(data){
          console.log(data);
          this.submmited = true;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }

  #add-blog{
    margin: 20px auto;
    max-width: 600px;
  }

  label{
    display: block;
    margin:20px;
  }

  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }

  textarea{
    height: 200px;
  }


  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }

  button{
    display: block;
    margin: 20px auto;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3{
    margin-top: 10px;
  }
</style>
