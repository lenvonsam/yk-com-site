<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li 怡康产业
      li.active {{pageTitle}}
    .row.mb-15(style="border:1px solid #d9982e;border-radius:6px;",v-for="item in kfjyList")
      .col-sm-2(style="border-right:1px solid #d9982e;")
        img.img-responsive.img-rounded(v-lazy="item.url", style="width:154px;height:154px;margin-top:5px;margin-bottom:5px;")
      .col-sm-10
        .row
          .col-sm-6
            h3
              | {{item.name}}
          .col-sm-6
            img.responsive.img-rounded(v-lazy="item.logourl", style="height:80px;width:80px;",v-if="item.logourl != ''")
        hr
        p 公司地址: {{item.addr}}
        p 联系电话: {{item.contact}}
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        pageTitle: ''
      }
    },
    beforeMount () {
      var query = this.$route.query
      this.pageTitle = query.topPart
      this.configKeyVal({key: 'topTabIndex', val: query.currentTopIdx})
    },
    computed: {
      ...mapState({
        kfjyList: state => state.kfjyList
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
