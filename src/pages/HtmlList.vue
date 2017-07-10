<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li.active {{pageTitle}}

    .row
      .col-sm-4(v-for="p in pages")
        .news-wrap
          .news-img(:style="{backgroundImage: 'url('+p.url+')'}",@click="jumpToDetail(p)")
            .mask
            .detail
              a 详细阅读
          .news-content
            h3 {{p.title}}
            p
              | 发布者：{{p.author}}
              span.ml-10 |
              span.ml-10(style="color:#666") {{p.time}}
    .row.text-center(v-if="listArray.length>pageSize")
      pagination.yea-paginate(for="htmlListPg", :records="listArray.length", :count-text="''", :per-page="pageSize")
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { PaginationEvent } from 'vue-pagination-2'
  export default {
    data () {
      return {
        currentPage: 0,
        pages: [],
        pageTitle: '',
        topIdx: 0
      }
    },
    beforeMount () {
      var query = this.$route.query
      this.pageTitle = query.topTitle
      this.topIdx = query.currentTopIdx
      this.configKeyVal({key: 'topTabIndex', val: query.currentTopIdx})
      this.configPathVal({path: this.$route.path})
      this.pages = this.currentArray(this.currentPage, this.pageSize, this.listArray)
    },
    watch: {
      '$route.path': {
        handler (newVal, oldVal) {
          var query = this.$route.query
          this.pageTitle = query.topTitle
          this.topIdx = query.currentTopIdx
          this.configKeyVal({key: 'topTabIndex', val: query.currentTopIdx})
          this.configPathVal({path: this.$route.path})
          this.pages = this.currentArray(this.currentPage, this.pageSize, this.listArray)
        }
      }
    },
    components: {
    },
    mounted () {
      const me = this
      PaginationEvent.$on('vue-pagination::htmlListPg', page => {
        me.currentPage = page - 1
        me.pages = me.currentArray(me.currentPage * me.pageSize, me.pageSize, me.listArray)
      })
    },
    computed: {
      ...mapState({
        listArray: state => state.listArray,
        pageSize: state => state.pageSize
      })
    },
    methods: {
      ...mapActions([
        'configPathVal',
        'configKeyVal'
      ]),
      jumpToDetail (item) {
        let query = {
          currentTopIdx: this.topIdx,
          title: item.title,
          author: item.author || '山姆极客',
          time: item.time,
          topPart: this.pageTitle,
          detailid: item.detailid,
          backToRoot: false
        }
        this.jump({
          path: '/htmlDetail',
          query
        })
      }
    }
  }
</script>

<style scoped>
  .news-wrap {
    padding-bottom: 20px;
  }
  .news-img {
    width:100%;
    height: 260px;
    position: relative;
    background-position: center;
    background-size: cover;
  }

  .news-img .mask {
    position: absolute;
    top:0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #d9982e;
    opacity: 0;
    transition: all 0.2s 0.3s;
  }

  .news-img .detail {
    position: absolute;
    width: 100px;
    top:45%;
    left: 38%;
    font-size: 20px;
    opacity: 0;
    box-shadow:0 0 1px rgba(0, 0, 0, 0.3);
  }

  .news-img .detail a {
    text-decoration: none;
    color: #fff;
    letter-spacing: 3px;
  }

  .news-img:hover .detail {
    opacity: 1;
  }

  .news-img:hover .mask {
    opacity: 0.4;
    cursor: pointer;
  }

</style>
