<template lang="pug">
  .content
    .comp-summary
      .container
        h2.text-center 企业介绍
        .row(style="margin-top:3%;")
          .col-sm-4.mb-20
            img.img-responsive.img-rounded(src="../assets/intro1.png",style="max-height:300px")
          .col-sm-8.mb-20(style="color:#666;max-height:300px;font-size:16px;")
            | 江苏省怡康控股集团有限公司，前身是2000年6月成立的“常州市怡康房地产开发有限公司”，目前公司注册资金3.5亿元，控股人：俞渊琼，持股比例98.0%，法定代表人：俞渊琼。
            | 注册地：江苏省常州市天宁区，是一家以房地产开发为主业、兼顾商业地产经营管理、住宅小区物业管理、幼教事业等综合性集团公司。
            | 集团下有企业：①常州俞记和嘉置业发展有限公司、②常州怡康五金机电市场有限公司③、常州市怡康商业管理有限公司、④常州市怡康幼儿园、⑤常州市金砖假日酒店有限公司、⑥蚌埠市怡康房地产开发有限责任公司、⑦蚌埠市怡嘉置业发展有限公司、⑧五河县怡康房地产开发有限公司、⑨蚌埠市怡康物业有限公司、⑩蚌埠市瑞宏物资有限公司。公司拥有产业有：怡康金砖酒店、怡康机电市场、怡康幼儿园、怡康花园菜场等。
    .container
      h3.text-center.ft-primary
        | 创始人介绍
        br
        .title-bottom-line
      .row
        .col-sm-4.mb-20
          img.img-responsive.img-rounded(src="../assets/intro1.png")
        .col-sm-8.mb-20 俞国刚 介绍
      hr
      .row
        .col-sm-4.mb-20
          img.img-responsive.img-rounded(src="../assets/intro1.png")
        .col-sm-8.mb-20 邓美贤 介绍
    .container
      h3.text-center.ft-primary
        | 总裁介绍
        br
        .title-bottom-line
      .row
        .col-sm-4.mb-20
          img.img-responsive.img-rounded(src="../assets/intro1.png")
        .col-sm-8 俞渊琼 介绍
    .container.comp-process
      h3.text-center.ft-primary
        | 发展历程
        a(name="xxx")
        br
        .title-bottom-line
      .row.mb-20(style="display:flex;")
        .col-sm-2
          h3 1998-2001
        .col-xs-4.col-sm-2(style="flex:1")
          .img-circle.develop-icon
            img.img-responsive(src="../assets/jiao.png",)
          .develop-line
        .col-xs-8.col-sm-8 xxx
      .row.mb-20(style="display:flex;")
        .col-sm-2
          h3 2002
        .col-xs-4.col-sm-2(style="flex:1")
          .img-circle.develop-icon
            img.img-responsive(src="../assets/jiao.png",)
          .develop-line
        .col-xs-8.col-sm-8(style="padding-top:20px;padding-bottom:10px;font-size: 16px;") 获“常州市房地产诚信企业”、“先进私营企业” 荣誉称号获“常州市房地产诚信企业”、“先进私营企业” 荣誉称号获“常州市房地产诚信企业”、“先进私营企业” 荣誉称号获“常州市房地产诚信企业”、“先进私营企业” 荣誉称号获“常州市房地产诚信企业”、“先进私营企业” 荣誉称号获“常州市房地产诚信企业”、“先进私营企业” 荣誉称号
      .row.mb-20(style="display:flex")
        .col-sm-2
          h3 2002
        .col-xs-4.col-sm-2(style="flex:1")
          .img-circle.develop-icon
            img.img-responsive(src="../assets/jiao.png",)
          .develop-line
        .col-xs-8.col-sm-8(style="padding-top:20px;padding-bottom:10px;font-size: 16px;") xxx
    .container.comp-honour
      h3.text-center.ft-primary
        | 荣誉墙
        br
        .title-bottom-line
      .row
        .col-sm-4(style="margin-bottom:5%")
          img.img-responsive(src="../assets/honour1.png",style="border-top-right-radius:4px;border-top-left-radius:4px;")
          div(style="border:1px solid #d9982e;border-top:0px;padding:10px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:#d9982e;") 荣誉墙
        .col-sm-4(style="margin-bottom:5%")
          img.img-responsive(src="../assets/honour1.png",style="border-top-right-radius:4px;border-top-left-radius:4px;")
          div(style="border:1px solid #d9982e;border-top:0px;padding:10px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:#d9982e;") 荣誉墙
        .col-sm-4(style="margin-bottom:5%")
          img.img-responsive(src="../assets/honour1.png",style="border-top-right-radius:4px;border-top-left-radius:4px;")
          div(style="border:1px solid #d9982e;border-top:0px;padding:10px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:#d9982e;") 荣誉墙
        .col-sm-4(style="margin-bottom:5%")
          img.img-responsive(src="../assets/honour1.png",style="border-top-right-radius:4px;border-top-left-radius:4px;")
          div(style="border:1px solid #d9982e;border-top:0px;padding:10px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:#d9982e;") 荣誉墙

</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        vtoMark: state => state.vtoMark
      })
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
  .comp-summary {
    background: rgba(255,213,79,.6);
    height: 500px;
    width: 100%;
    color: #fff;
  }

  .comp-summary h2 {
    margin-top: 5%;
  }

  .title-bottom-line {
    background:#d9982e;
    width:30px;
    height:2px;
    display:inline-block;
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
