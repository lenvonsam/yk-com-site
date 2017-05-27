<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li.active 新闻中心

    .row
      .col-sm-4(v-for="nw in currentNews")
        .news-wrap
          .news-img(:style="{backgroundImage: 'url('+nw.newPic+')'}",@click="jumpToDetail(nw)")
            .mask
            .detail
              a 详细阅读
          .news-content
            h3 {{nw.title}}
            p
              | 发布者：杨明悟
              span.ml-10 |
              span.ml-10(style="color:#666") 2017-02-03
    .row.text-center(v-if="newsWall.length>pageSize")
      pagination.yea-paginate(for="newsListPg", :records="newsWall.length", :count-text="''", :per-page="pageSize")
</template>

<script>
  import { mapState } from 'vuex'
  import { PaginationEvent } from 'vue-pagination-2'
  export default {
    data () {
      return {
        currentPage: 0,
        currentNews: []
      }
    },
    beforeMount () {
      this.currentNews = this.currentArray(this.currentPage, this.pageSize, this.newsWall)
    },
    components: {
    },
    mounted () {
      const me = this
      PaginationEvent.$on('vue-pagination::newsListPg', page => {
        me.currentPage = page - 1
        me.currentNews = me.currentArray(me.currentPage * me.pageSize, me.pageSize, me.newsWall)
      })
    },
    computed: {
      ...mapState({
        newsWall: state => state.newsWall,
        pageSize: state => state.pageSize
      })
    },
    methods: {
      jumpToDetail (item) {
        let query = {
          currentTopIdx: 2,
          title: item.title,
          author: item.author || 'xxx',
          content: encodeURI(item.content || '<p>测试</p>'),
          time: item.time,
          currentpart: '新闻中心'
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
