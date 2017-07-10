<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li 怡康产业
      li.active {{pageTitle}}
    .container
      div(v-for="qcontent in qrContents")
        div
          h3.text-center.ft-primary
            | {{qcontent.title}}
            br
            .title-bottom-line

        div(style="padding-bottom:15px;",v-for="project in qcontent.projects")
          div
            s-carousel(:scrollPerPage="true", :perPage="1", :autoplay="true", :autoplayTimeout="5000", paginationActiveColor="#d9982e")
              p-slide(v-for="(banner,idx) in project.banners", :index="idx", :key="banner.id")
                img.img-responsive.img-3d(v-lazy="banner.imgUrl", style="width:100%;")

            //- carousel-3d(:inverse-scaling="1500",:space="800")
              slide(v-for="(banner,idx) in project.banners", :index="idx", :key="banner.id", style="border:1px solid #d9982e")
                img.img-responsive(:src="banner.imgUrl", style="height:350px;width:100%")
          .row.mt-10(style="border:1px solid #d9982e;border-top:0px;")
            .col-sm-10(style="border-right:1px solid #d9982e;")
              h3 {{project.title}}
              hr
              p 地址: {{project.addr}}
              p 联系方式: {{project.contact}}
            .col-sm-2
              img.img-responsive(:src="project.qrUrl")

</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    data () {
      return {
        pageTitle: '',
        qrContents: []
      }
    },
    watch: {
      '$route.query.topPart': {
        handler (newVal, oldVal) {
          var query = this.$route.query
          this.pageTitle = query.topPart
          this.configKeyVal({key: 'topTabIndex', val: query.currentTopIdx})
          this.qrContents = this[query.contentKey]
        }
      }
    },
    beforeMount () {
      var query = this.$route.query
      this.pageTitle = query.topPart
      this.configKeyVal({key: 'topTabIndex', val: query.currentTopIdx})
      this.qrContents = this[query.contentKey]
    },
    components: {
      SCarousel: Carousel,
      PSlide: Slide
    },
    computed: {
      ...mapState({
        zcjyList: state => state.zcjyList,
        qtjyList: state => state.qtjyList
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

</style>
