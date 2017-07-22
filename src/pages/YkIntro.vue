<template lang="pug">
  .content
    .comp-summary
      .container
        h2.text-center 企业介绍
        .row(style="margin-top:3%;")
          .col-sm-4.mb-20
            img.img-responsive.img-rounded(v-lazy="'http://osecpxcsy.bkt.clouddn.com/ykhyndmlogo.jpg'",style="max-height:300px")
          .col-sm-8.mb-20.section-scroll-wrapper.intro-font(style="height:330px;")
            .section-scroll(style="overflow-y: hidden")
              div(v-html="aboutYk.compIntro")
    .container
      h3.text-center.ft-primary
        | 创始人介绍
        br
        .title-bottom-line
      .row
        .col-sm-4.mb-20
          img.img-responsive.img-rounded(v-lazy="'http://osecpxcsy.bkt.clouddn.com/ykygg.jpg'")
        .col-sm-8.mb-20.intro-font(v-html="aboutYk.yggIntro")
      hr
      .row
        .col-sm-4.mb-20
          img.img-responsive.img-rounded(v-lazy="'http://osecpxcsy.bkt.clouddn.com/nmxnew.jpg'")
        .col-sm-8.mb-20.intro-font(v-html="aboutYk.dmxIntro")
    .container
      h3.text-center.ft-primary
        | 总裁介绍
        br
        .title-bottom-line
      .row
        .col-sm-4.mb-20
          //- img.img-responsive.img-rounded(v-lazy="'http://osecpxcsy.bkt.clouddn.com/ykyyq.jpg'")
          img.img-responsive.img-rounded(v-lazy="'http://osecpxcsy.bkt.clouddn.com/yyqnew.jpg'")
        .col-sm-8.intro-font(v-html="aboutYk.yyqIntro")
    .container.comp-process
      h3.text-center.ft-primary
        | 发展历程
        br
        .title-bottom-line
      .section-scroll-wrapper(style="height:80vh;")
        .section-scroll.intro-font
          .row.mb-20(style="display:flex;",v-for="way in aboutYk.introWay")
            .col-sm-2
              h3 {{way.years}}
            .col-xs-4.col-sm-2(style="flex:1")
              .img-circle.develop-icon
                img.img-responsive(src="../assets/jiao.png",)
              .develop-line
            .col-xs-8.col-sm-8(v-html="way.content")
    .container.comp-honour
      h3.text-center.ft-primary
        | 荣誉墙
        br
        .title-bottom-line
      .row
        .col-sm-4(style="margin-bottom:5%",v-for="honr in aboutYk.honors")
          img.img-responsive(v-lazy="honr.url",style="border-top-right-radius:4px;border-top-left-radius:4px;height:260px;")
          .text-center(style="border:1px solid #d9982e;border-top:0px;padding:10px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:#d9982e;") {{honr.title}}
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        obj: {}
      }
    },
    computed: {
      ...mapState({
        vtoMark: state => state.vtoMark,
        aboutYk: state => state.aboutYk
      })
    },
    beforeMount () {
    },
    watch: {
      'vtoMark': {
        handler (newVal, oldVal) {
          console.log(newVal)
          this.$scrollTo(newVal)
        }
      }
    }
  }
</script>

<style scoped>
  .intro-font {
    color: #666;
    font-size: 16px;
  }
  .comp-summary {
    background: rgba(255,213,79,.6);
    height: 500px;
    width: 100%;
    color: #fff;
  }

  .comp-summary h2 {
    margin-top: 5%;
  }

  .develop-icon {
    border:3px solid #d9982e;
    width:70px;
    height:70px;
  }
  .develop-line {
    position: absolute;
    width: 8px;
    background: #d9982e;
    left: 48px;
    top: 70px;
    bottom: -20px;
  }
</style>
