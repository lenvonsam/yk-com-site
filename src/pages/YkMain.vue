<template lang="pug">
  .content
    .section.comp-intro
      strong [关于怡康]
      p.animated.fadeInUp
        | 江苏怡康控股集团创建于1994年，一直以投资地产开发为主业，历经二十余载成长与积累，怡康集团已形成以地产开发、资产经营为主的多元化发展格局。怡康集团自1999年起创立“演绎住宅进化、示范未来生活”为开发理念，在常州及蚌埠地区着力开发建成了多个优秀住宅项目。
        span.comp-intor-more-label.label.label-warning(@click="jump({path: '/intro'})") 更多...
    .section.industry-intro
      strong [怡康产业]
      .part.text-center(style="margin-top: 5%;")
        .row
          .col-sm-4
            .industry-card.card-yellow(@click="jump({path: '/qrcodeList', query: {topPart: '开发经营', currentTopIdx: 3}})")
              i.fa.fa-rocket
              h3 开发经营
          .col-sm-4
            .industry-card.card-green(@click="jump({path: '/imgQrcodeList', query: {topPart: '资产经营', contentKey: 'zcjyList', currentTopIdx: 3}})")
              i.fa.fa-line-chart
              h3 资产经营
          .col-sm-4
            .industry-card.card-red(@click="jump({path: '/imgQrcodeList', query: {topPart: '其他经营', contentKey: 'qtjyList', currentTopIdx: 3}})")
              i.fa.fa-ils
              h3 其他经营
    .section.team-intro
      strong [怡康团队]
      .part
        .row
          .col-sm-4
            img.img-responsive.intro-img(v-lazy="'http://yeacom.thinkingsam.cn/teammodel.jpg'",style="width:100%;")
            .grid-content(style="margin-bottom: 20px;")
              h4 人才理念及培训项目
              div.text-right
                span.label.label-warning.comp-intor-more-label(@click="jump({path: '/slide3dList', query: {currentTopIdx: 4,topPart: '人才理念及培训项目', contentKey: 'rcList'}})") 详情
          .col-sm-4
            img.intro-img(v-lazy="'http://yeacom.thinkingsam.cn/pxmain.jpg'",style="width:100%;")
            .grid-content(style="margin-bottom: 20px;")
              h4 培训与成长
              div.text-right
                span.label.label-warning.comp-intor-more-label(@click="jump({path: '/slide3dList', query: {currentTopIdx: 4, topTitle: '培训与成长', contentKey: 'pxList'}})") 详情
          .col-sm-4
            img.img-responsive.intro-img(v-lazy="'http://yeacom.thinkingsam.cn/zpmain.jpg'",style="width:100%;")
            .grid-content(style="margin-bottom: 20px;")
              h4 人才招聘
              div.text-right
                span.label.label-warning.comp-intor-more-label(@click="jump({path: '/ykRecruit', query: {currentTopIdx: 4}})") 详情
    .section.culture-intro
      strong [怡康文化]
      .part
        .line
          span 怡康愿景：
          .ft-20.ft-blod.padding 持续发展，不断创新
        .line
          span 怡康使命：
          .ft-20.ft-blod.padding 为客户服务，为社会造福
        .line
          span 核心价值观：
          .ft-20.ft-blod.padding 忠厚世家、诚信经营、勤奋耕耘、追求卓越
        .line
          span 价值取向：
          .ft-20.ft-blod.padding
            | 当信誉和利益产生矛盾时，要选择信誉
            br
            | 当事业与利益产生矛盾时，要选择事业
            br
            | 没有追求就没有进步，没有社会效益、经济效益就难以长久
        .line
          span 团队文化：
          .ft-20.ft-blod.padding 和谐真诚、作风严谨、不断进取、团队制胜
</template>

<script>
  export default {
    beforeMount () {
    },
    mounted () {
      console.log('main mounted')
      if (this.$route.query.vto) {
        this.$scrollTo(this.$route.query.vto)
      } else {
        this.$scrollTo('.comp-intro')
      }
    },
    watch: {
      '$route.query': {
        handler: function (newVal, oldVal) {
          console.log('watch ykmain $route.query')
          console.log(newVal)
          if (newVal.vto) {
            this.$scrollTo(newVal.vto)
          } else {
            this.$scrollTo('.comp-intro')
          }
        },
        deep: true
      }
    }

  }
</script>

<style scoped>
  .section {
    height:100vh;
    width: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
  }
  .comp-intro {
    /*background: url(../assets/bg1.jpg);*/
    background: url('http://yeacom.thinkingsam.cn/ykhp3.jpg')  center center no-repeat;
  }
  .industry-intro {
    background: url('http://yeacom.thinkingsam.cn/bg2.jpg') center center;
  }
  .team-intro {
    background: url('http://yeacom.thinkingsam.cn/bg3.jpg') center center;
  }
  .culture-intro {
    background: url('http://yeacom.thinkingsam.cn/bg4.jpg') center center;
  }
  .section strong {
    position: absolute;
    top: 20%;
    left: 20%;
    font-size: 30px;
    font-weight: 500;
    color:#efefef;

  }

  .comp-intor-more-label:hover {
    cursor: pointer;
  }

  .section p,
  .section .part {
    position: absolute;
    top: 30%;
    left: 20%;
    font-size: 16px;
    width: 60%;
    color:#666;
  }
  .culture-intro .part {
    background: rgba(255,229,127,.8);
    padding: 20px 10%;
    border-radius: 6px;
    color:#666f;
  }

  .culture-intro .part .line {
    padding: 10px 0px;
  }

  .section .industry-card {
    border-radius: 6px;
    padding: 30px 0px;
    color: #fff;
    margin-bottom: 20px;
  }

  .section .industry-card:hover {
    cursor: pointer;
  }

  .card-yellow {
    background: rgba(255, 196, 44,.9);
  }

  .card-green {
    background: rgba(100,211,187, .9);
  }

  .card-red {
    background: rgba(255, 88 ,62, .9);
  }

  .section .industry-card i.fa {
    font-size: 50px;
  }

  .team-intro .part .grid-content {
    background: #fff;
    /*box-shadow: 0px 2px 0px #D4D5D9;*/
    padding: 10px 10px;
    position: relative;
  }



</style>
