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
        <ul id="starlist">
          <li><a href="/">首页</a></li>
          <li>
            <router-link :to="{path:'/info'}">生活</router-link>
          </li>
          <li>
            <router-link :to="{path:'/info'}">留言</router-link>
          </li>
          <li>
            <router-link :to="{path:'/info'}">关于我</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <article>
      <aside class="l_box">
        <div class="about_me">
          <h2>关于我</h2>
          <ul>
            <i><img :src="aboutUrl"></i>
            <p>{{ aboutMe }}</p>
          </ul>
        </div>
        <div class="fenlei">
          <h2>文章分类</h2>
          <ul v-for="item in tags">
            <li><a href="javascript: void(0)" @click="back(item)"> {{ item.name }} ({{item.num}})</a></li>
          </ul>
        </div>
        <div class="tuijian">
          <h2>最新推荐</h2>
          <ul v-for="item in recommends">
            <li><a href="javascript: void(0)" @click="back(item)"> {{ item.title }}</a></li>
          </ul>
        </div>
        <div class="links">
          <h2>个人链接</h2>
          <ul>
            <a href="">个人博客</a>
            <a href="">周永博客</a>
          </ul>
        </div>
        <div class="guanzhu">
          <h2>关注我</h2>
          <ul>
            <img src="../../assets/images/wx.jpg">
          </ul>
        </div>
      </aside>
      <main>
        <div class="infosbox">
          <div class="newsview">
            <h3 class="news_title">{{articleTitle}}</h3>
            <div class="bloginfo">
              <ul>
                <li class="author">作者：<a href="/">{{author}}</a></li>
                <li class="timer">时间：{{articleDate}}</li>
                <li class="view">{{readNum}} 人已阅读</li>
              </ul>
            </div>
            <div class="tags">
              <span v-for="tag in tags">
                <a href="/" target="_blank">{{tag.name}}</a>
              </span>
            </div>
            <div class="news_about">
              <strong></strong>
              <span>{{mind}}</span>
            </div>
            <div class="news_con">
              {{articleContent}}
            </div>
          </div>
          <div class="share">
            <p class="diggit"><a href="JavaScript:void(0);"> 赞一个！ </a>(<b id="diggnum">13</b>)</p>
          </div>
          <div class="nextinfo">
            <p>上一篇：<a href="/news/life/2018-03-13/804.html">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a></p>
            <p>下一篇：<a href="/news/life/">返回列表</a></p>
          </div>

          <div class="news_pl">
            <h2>文章评论</h2>
            <!--
            <div class="gbko">
              <div class="fb">
                <ul>
                  <p class="fbtime"><span>2018-07-24 11:52:38</span>dancesmile</p>
                  <p class="fbinfo">这才是我要的朋友圈</p>
                </ul>
              </div>
              <div class="fb">
                <ul>
                  <p class="fbtime"><span>2018-07-24 08:52:48</span> 卜野</p>
                  <p class="fbinfo"></p>
                  <div class="ecomment"><span class="ecommentauthor">网友 家蚂蚁 的原文：</span>
                    <p class="ecommenttext">坚持哟!看你每天都有写，请继续加油，再接再厉哦</p>
                  </div>
                </ul>
              </div>
            </div>
            -->
          </div>
        </div>
      </main>
    </article>
    <footer>
      <p><a href="/" target="_blank">个人博客</a> <a href="/">ICP备号</a></p>
    </footer>
    <a href="#" class="cd-top">Top</a>
  </div>
</template>

<script>
  export default {
    name: 'myInfo',
    data() {
      return {
        title: '我的博客',
        aboutMe: '新的起点,新的征途',
        aboutUrl: 'https://dpic.tiankong.com/r1/pj/QJ6609096149.jpg?x-oss-process=style/670ws',
        recommends: [{'id': '1001', 'title': '你是什么人便会遇上什么人'}, {'id': '1001', 'title': '个人博客模板'}],
        mind: '人生，不要被安逸所控制，决定成功的，是奋斗。人生，不要被他人所控制，决定命运的，是自己。静悄悄的努力，活成自己想要的模样。',
        tags: [
          {'id': 1001, 'name': 'JavaSE', 'num': '16'},
          {'id': 1002, 'name': 'Spring', 'num': '21'},
          {'id': 1003, 'name': 'JVM', 'num': '34'}
        ],
        articleTitle: '个人博客，属于我的小世界！',
        author: '张三',
        articleDate: '2019-05-27 10:34:56',
        readNum: '300',
        articleContent: '20岁时，我担心别人如何看我；40岁时，我不在乎别人怎么看我；60岁时，我发现他们根本不看我。请记住：有两种事我们应该尽量少干，一是用自己的嘴干扰别人的人生，二是靠别人的脑子思考自己的人生。'
      }
    },
    mounted() {
      this.getGoodsList();
    },
    methods: {
      getGoodsList() {
        console.log("接受的参数:" + this.$route.params.id);
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
  @import "../../assets/css/info.css";
  @import "../../assets/css/m.css";

</style>
