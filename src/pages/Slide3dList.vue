<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li 怡康团队
      li.active {{pageTitle}}
    .container
      div
        s-carousel(v-if="pageTitle == '人才理念及培训项目'",:scrollPerPage="true", :perPage="1", :autoplay="true", :autoplayTimeout="5000", paginationActiveColor="#d9982e")
          p-slide(v-for="(b,idx) in pageObj.banners",:index="idx",:key="b.id")
            img.img-responsive.img-3d(v-lazy="b.imgUrl", style="width:100%;")
        carousel-3d(:inverse-scaling="1500",:space="700",v-else)
          slide(v-for="(b,idx) in pageObj.banners", :index="idx", :key="b.id", style="border:1px solid #d9982e")
            img.img-responsive(v-lazy="b.imgUrl", style="width:100%")
      hr
      div(v-html="pageObj.content", style="width:100%")

</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    data () {
      return {
        pageObj: {},
        pageTitle: ''
      }
    },
    components: {
      SCarousel: Carousel,
      PSlide: Slide
    },
    beforeMount () {
      this.changePageVariable()
    },
    computed: {
      ...mapState({
        rcList: state => state.rcList,
        pxList: state => state.pxList,
        zpList: state => state.zpList
      })
    },
    watch: {
      '$route.query.topPart': {
        handler (newVal, oldVal) {
          this.changePageVariable()
        }
      }
    },
    methods: {
      ...mapActions([
        'configKeyVal'
      ]),
      changePageVariable () {
        var query = this.$route.query
        this.pageTitle = query.topPart
        this.pageObj = this[query.contentKey]
        this.configKeyVal({key: 'topTabIndex', val: query.currentTopIdx})
      }
    }

  }
</script>

<style scoped>

</style>
