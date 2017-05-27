<template lang="pug">
  .content.container
    ol.breadcrumb
      li 首页
      li.active 新闻中心

    .row
      .col-sm-4(v-for="nw in newsWall")
        .news-wrap
          .news-img(:style="{backgroundImage: 'url('+nw.newPic+')'}")
            .mask
            .detail
              a 详细阅读
          .news-content
            h3 {{nw.title}}
            p
              | 发布者：杨明悟
              span(style="margin-left:10px") |
              span(style="margin-left:10px;") 2017-02-03

    //- .row.text-center
      p 加载更多...
    .row.text-center
      pagination.yea-paginate(for="xxl", :records="100", :count-text="''", :per-page="5")
    //- ul.pager
      li.previous
        a xxx
      li.next
        a xxx
</template>

<script>
  import { mapState } from 'vuex'
  import { PaginationEvent } from 'vue-pagination-2'
  export default {
    data () {
      return {
        busy: false
      }
    },
    components: {
    },
    mounted () {
      PaginationEvent.$on('vue-pagination::xxl', page => {
        console.log(page)
      })
    },
    computed: {
      ...mapState({
        newsWall: state => state.newsWall
      })
    },
    methods: {
      loadMore () {
        console.log('loadMore')
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
