<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li.active 联系我们
    div(style="width: 100%;height:500px;")
      el-amap(:vid="'amap-vue'",:events="mapEvents",:center="mapCenter",:zoom="13")
        el-amap-marker(:position="markPoint")
        //- el-amap-polygon(:path="polygons",:fillColor="'transparent'")
        el-amap-info-window(:position="mapWindow.position",:content="mapWindow.content", :open="mapWindow.open")
    .text-center
      h3.ft-primary 怡康地产
      p 地址：江苏常州市关河东路66号九洲环宇商务广场23楼
      p 邮编：213001
      p 电话: 0519-88084123
      p 邮箱: xx@yikang.com
</template>

<script>
  export default {
    data () {
      return {
        mapCenter: [117.368705, 32.961554],
        markPoint: [117.363957, 32.962527],
        polygons: [[117.36201, 32.963993], [117.366173, 32.964497], [117.366473, 32.961364], [117.362353, 32.961004], [117.36201, 32.963993]],
        mapWindow: {
          position: [117.364156, 32.963489],
          open: true,
          content: '上河时代<br>(淮上区区政府东南边)'
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
    }
  }
</script>

<style scoped>

</style>
