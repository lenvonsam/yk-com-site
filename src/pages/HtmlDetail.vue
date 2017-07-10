<template lang="pug">
  .content.container(v-if="isShow")
    ol.breadcrumb
      li 首页
      li.active {{detailObj.topPart}}
    .container
      .row
        h1.text-center {{detailObj.title}}
        br
        p(style="color:#666")
          span 发布时间: {{detailObj.time}}
          span.pull-right 作者：{{detailObj.author}}
        hr
      .padding(v-html="newsContent")
      .row
        .detail-back(@click="jump({path:'/'})",v-if="detailObj.backToRoot")
          i.glyphicon.glyphicon-menu-left
          span.pull-right 返回首页
        .detail-back(@click="back",v-else)
          i.glyphicon.glyphicon-menu-left
          span.pull-right 返回
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {
        detailObj: {},
        isShow: false
      }
    },
    beforeMount () {
      console.log(this.$route)
      this.detailObj = {}
      this.isShow = false
      this.detailObj = this.$route.query
      // this.detailObj.content = decodeURI(this.detailObj.content)
      this.configKeyVal({key: 'topTabIndex', val: this.detailObj.currentTopIdx})
      this.configNewsContent({detailid: this.detailObj.detailid})
      this.isShow = true
    },
    watch: {
      '$route.query': {
        handler: function (newVal, oldVal) {
          console.log('watch new detailObj')
          this.detailObj = newVal
          // this.detailObj.content = decodeURI(this.detailObj.content)
          this.configKeyVal({key: 'topTabIndex', val: this.detailObj.currentTopIdx})
        },
        deep: true
      }
    },
    computed: {
      ...mapState({
        newsContent: state => state.newsContent
      })
    },
    methods: {
      ...mapActions([
        'configKeyVal',
        'configNewsContent'
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
