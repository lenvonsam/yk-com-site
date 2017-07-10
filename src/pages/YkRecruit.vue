<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li 怡康团队
      li.active 人才招聘
    .container
      .zp-title 招聘简章
      .zp-content &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;蚌埠市怡嘉置业发展有限公司隶属于江苏怡康控股集团有限公司，主营业务为房地产开发与经营。公司自2000年成立以来，始终坚持“演绎住宅进化，示范未来生活”的开发理念，潜心探索新型的住宅模式，精心营造舒适的住宅环境，建立了一整套科学有效的管理体系，积累了丰富的房地产开发经验。
      .zp-title 招聘职位
      .zp-content
        table.table.table-hover.mt-10
          thead
            tr
              th 职位
              th 公司
              th 地点
              th 薪资
              th 发布时间
          tbody
            tr(v-for="zpzw in zpzwList")
              td {{zpzw.name}}
              td {{zpzw.comp}}
              td {{zpzw.location}}
              td {{zpzw.price}}
              td {{zpzw.time}}
      .zp-title 招聘要求
      .zp-content
        ul
          li.zp-need(v-for="zpyq in zpyqList")
            span.zp-circle
            | {{zpyq.title}}
            br
            | {{zpyq.content}}


</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    beforeMount () {
      this.configKeyVal({key: 'topTabIndex', val: 4})
    },
    computed: {
      ...mapState({
        zpzwList: state => state.zpzwList,
        zpyqList: state => state.zpyqList
      })
    },
    methods: {
      ...mapActions([
        'configKeyVal'
      ])
    }
  }
</script>

<style scoped>
  .zp-title {
    position: relative;
    font-size: 20px;
    padding-left: 25px;
  }

  .zp-title::after {
    position: absolute;
    top: 3px;
    left: 0;
    border:12px solid transparent;
    border-left-color: #d9982e;
    content: '';
  }

  .zp-content {
    padding: 10px 25px;
    font-size: 16px;
    margin-bottom: 15px;
  }

  .zp-content ul {
    -webkit-padding-start: 0px;
  }

  .zp-content li.zp-need {
    list-style: none;
    margin-bottom: 5px;
  }

  .zp-content li.zp-need .zp-circle {
    width:12px;
    height:12px;
    background:#d9982e;
    display:inline-block;
    border-radius:50%;
    margin-right:10px;
  }

</style>
