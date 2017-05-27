<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li.active {{topPart}}
    .container
      .row
        h1.text-center {{title}}
        br
        p(style="color:#666")
          span 发布时间: {{time}}
          span.pull-right 作者：{{author}}
        hr
      .padding(v-html="content")
      .row
        .detail-back(@click="back")
          i.glyphicon.glyphicon-menu-left
          span.pull-right 返回


</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        topPart: '',
        title: '',
        author: '',
        time: '',
        content: ''
      }
    },
    beforeMount () {
      console.log(this.$route)
      let obj = this.$route.query
      this.topPart = obj.currentpart
      this.title = obj.title
      this.time = obj.time
      this.author = obj.author
      this.content = decodeURI(obj.content)
      this.configKeyVal({key: 'topTabIndex', val: obj.currentTopIdx})
    },
    methods: {
      ...mapActions([
        'configKeyVal'
      ])
    }
  }
</script>

<style scoped>
  .detail-back {
    display:inline-block;
    background:#d9982e;
    color:#fff;
    padding:10px;
    min-width: 88px;
    margin-bottom:15px;
  }

  .detail-back:hover {
    cursor: pointer;
    background: #d8885e;
  }
</style>
