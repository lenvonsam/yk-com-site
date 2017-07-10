<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li.active 联系我们
    div(style="width: 100%;height:500px;")
      //- el-amap-search-box(:on-search-result="searchResult")
      el-amap(:vid="'amap-vue'",:events="mapEvents",:center="mapCenter",:zoom="13")
        el-amap-marker(:position="markPoint")
        //- el-amap-polygon(:path="polygons",:fillColor="'transparent'")
        el-amap-info-window(:position="mapWindow.position",:content="mapWindow.content", :open="mapWindow.open")
    .text-center
      h3.ft-primary 江苏怡康控股集团有限公司
      p 地址：常州市关河中路68号怡康机电广场1号楼21F
      p 邮编：213004
      p 电话: 0519-88881108
      //- p 邮箱: xx@yikang.com
</template>

<script>
  export default {
    data () {
      return {
        mapCenter: [119.96537, 31.790437],
        markPoint: [119.96537, 31.790437],
        // polygons: [[117.36201, 32.963993], [117.366173, 32.964497], [117.366473, 32.961364], [117.362353, 32.961004], [117.36201, 32.963993]],
        mapWindow: {
          position: [119.96540, 31.790440],
          open: true,
          content: '江苏怡康控股集团有限公司<br>(常州天宁区关河中路68号)'
        },
        events: {
          init (o) {
            console.log('init')
            console.log(o)
          }
        },
        mapEvents: {
          'click': this.mapClick
        }
      }
    },
    methods: {
      searchResult (e) {
        console.log('searchResult')
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
