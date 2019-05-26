<template>
  <div class="app">
    info.vue
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
  @import "../../assets/css/info.css";
  @import "../../assets/css/m.css";

</style>
