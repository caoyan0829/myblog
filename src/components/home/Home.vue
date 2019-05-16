<template>
  <div class="app">
    <header class="header-navigation" id="header">
      <nav>
        <div class="logo"><a href="/">{{title}}</a></div>
        <div class="search">
          <form action="" method="post" name="searchform" id="searchform">
            <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);"
                   onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}"
                   onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
            <input name="show" value="title" type="hidden">
            <input name="tempid" value="1" type="hidden">
            <input name="tbname" value="news" type="hidden">
            <input name="Submit" class="input_submit" value="搜索" type="submit">
          </form>
        </div>
        <h2 id="mnavh"><span class="navicon"></span></h2>
        <ul id="starlist">
          <li><a href="index.html">首页</a></li>
          <li><a href="gbook.html">留言</a></li>
          <li><a href="about.html">关于我</a></li>
        </ul>
      </nav>
    </header>
    <article>
      <aside class="l_box">
        <div class="about_me">
          <h2>关于我</h2>
          <ul>
            <i><img src="https://dpic.tiankong.com/r1/pj/QJ6609096149.jpg?x-oss-process=style/670ws"></i>
            <p>{{ aboutMe }}</p>
          </ul>
        </div>
        <div class="fenlei">
          <h2>文章分类</h2>
          <ul v-for="item in classify">
            <li><a href="javascript: void(0)" @click="back(item)"> {{ item.name }} ({{item.num}})</a></li>
          </ul>
        </div>
        <div class="tuijian">
          <h2>站长推荐</h2>
          <ul v-for="item in recommends">
            <li><a href="javascript: void(0)" @click="back(item)"> {{ item.title }}</a></li>
          </ul>
        </div>
        <div class="links">
          <h2>友情链接</h2>
          <ul>
            <a href="">个人博客</a> <a href="">周永博客</a>
          </ul>
        </div>
        <div class="guanzhu">
          <h2>关注我 么么哒</h2>
          <ul>
            <img src="../../assets/images/wx.jpg">
          </ul>
        </div>
      </aside>
      <main class="r_box" v-for="item in articles">
        <li><i v-if="item.imgUrl != ''"><a href="javascript: void(0)" @click="back(item)"><img
          :src="item.imgUrl"></a></i>
          <h3><a href="infopic.html">{{item.title}}</a></h3>
          <p>{{item.shortText}}</p>
        </li>
      </main>
    </article>
    <footer>
      <p>Design by <a href="" target="_blank">周永个人博客</a> <a
        href="infopic.html">蜀ICP备11002373号-1</a></p>
    </footer>
    <a href="#" class="cd-top">Top</a>
  </div>
</template>

<script>
  export default {
    name: 'myHome',
    data() {
      return {
        title: '我的博客',
        aboutMe: '新的起点,新的征途',
        classify: [{'name': '学无止境', 'num': '32'}, {'name': '日记', 'num': '11'}],
        recommends: [{'id': '1001', 'title': '你是什么人便会遇上什么人'}, {'id': '1001', 'title': '个人博客模板'}],
        articles: [{
          'id': '1001',
          'title': '你是什么人便会遇上什么人',
          'shortText': '有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。',
          'imgUrl': ''
        }, {
          'id': '1012',
          'title': '爱情没有永远，地老天荒也走不完',
          'shortText': '也许，爱情没有永远，地老天荒也走不完，生命终结的末端，苦短情长。站在岁月的边端，那些美丽的定格，心伤的绝恋，都被四季的掩埋，一去不返。徒剩下这荒芜的花好月圆，一路相随，流离天涯背负了谁的思念？',
          'imgUrl': 'https://dpic.tiankong.com/tj/e7/QJ6154513335.jpg?x-oss-process=style/shows'
        }, {
          'id': '1013',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }]
      }
    },
    mounted() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList() {
        this.$http.get('http://localhost:8080/static/ceshi.json').then((res) => {
          //用axios的方法引入地址
          this.res = res;
          //赋值
          console.log(res);
        })
      },
      back(obj) {
        console.log('back method:' + obj);
      }

    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";

</style>
