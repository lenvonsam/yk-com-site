<template lang="pug">
  #mainContainer
    .banner
      navbar(placement="top",:style="{background:canShowBottomBtn == true ? 'rgba(0,0,0,.6)': 'transparent', transition: 'all 1s ease', border: '0px'}")
        a.navbar-brand.ft-white(slot="brand", href="#") Yeacom
        li.right-txt(slot="right",v-for="(rt,i) in rightTitles")
          a.ft-white(href="#",v-scroll-to="{el: rt.vto}", :class="{'active': i == activeIndex}") {{rt.name}}
      .banner-text.text-center.ft-white.animated.rollIn
        h1 xxxx
        h2 xxxx111
    .intro(ref="intro")
      .container
        .col-sm-6.col-md-6
          img(src="../assets/browse.jpg")
          h3 ssx
          p xx
        .col-sm-6.col-md-6
          img(src="../assets/browse.jpg")
          h3 xdf
          p xxff
    .special(ref="special")
      .feature-text.text-center
        h3 优势
        p xxxx
      .detail
        .row.text-center
          .col-sm-6.col-md-6
            i.fa.fa-chain-broken(style="font-size:50px;")
            h3 xx
            p 123
          .col-sm-6.col-md-6
            i.fa.fa-chain-broken(style="font-size:50px;")
            h3 xx
            p 123
    .team(ref="team")
      .feature-text.text-center
        h3 团队
        p xxx
      .gallery
        .row
          .col-sm-4.bg-white
            img.img-responsive(src="../assets/teammodel.jpg")
            .grid-content
              .name
                h4 xxx
                p xx
              .link
                ul
                  li
                    i.fa.fa-qq
                  li
                    i.fa.fa-weixin
              .clearfix
              p xxx
              .hello
                a(@click="seeDetail") 详情
          .col-sm-4
          .col-sm-4
    .service(ref="service")
      .feature-text.text-center
        h3 服务
        p xxx
    .contact(ref="contact")
      .feature-text.text-center
        h3 联系
        p xxx
      .content
        .row
          .col-sm-6(style="margin-bottom:2%")
            h4(style="margin-bottom:3%")
              | 反馈意见
              i.fa.fa-send.pull-right(@click="sendComment")
            .clearfix
            div
              spinner(ref="spinner")
              .form-group
                input.form-control(placeholder="称呼", required)
              .form-group
                input.form-control(placeholder="邮箱", type="email", required)
              .form-group
                textarea.form-control(placeholder="内容", rows="5")
          .col-sm-6(style="margin-bottom:2%")
            h4(style="margin-bottom: 3%") 详细地址
            img.img-responsive.img-rounded(src="../assets/map.png")
            //- div(style="width:100%;height:300px;")
              //- el-amap-search-box(:on-search-result="onSearchResult", :events="events")
              //- el-amap(:vid="'amap-vue'",:events="mapEvents",:center="mapCenter",:zoom="13")
              //-   el-amap-marker(:position="markPoint")
              //-   el-amap-polygon(:path="polygons",:fillColor="'transparent'")
              //-   el-amap-info-window(:position="mapWindow.position",:content="mapWindow.content", :open="mapWindow.open")
    .footer
      .row.text-center.ft-white
        i.fa.fa-copyright
        | &nbsp;&nbsp;2017&nbsp;&nbsp;Yeacom&nbsp;&nbsp;|&nbsp;&nbsp;备案号
    modal(:value="modalShow",:callback="cb")
      .modal-header(slot="modal-header")
        h4.modal-title 测试
      .modal-body(slot="modal-body")
        h3 xxx
    transition(name="fade",enter-active-class="fadeInUp",leave-active-class="fadeOutDown")
      .bottom-dot(v-if="canShowBottomBtn",v-scroll-to="{ el: '#mainContainer' }")
    transition(name="fade",enter-active-class="fadeInDown",leave-active-class="fadeOutUp")
      alert(placement="top", type="success",width="200px", v-if="alertShow")
        strong xxxx
        p xxx

</template>

<script>
import { accordion, panel, navbar, spinner, alert, modal } from 'vue-strap'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      modalShow: false,
      alertShow: false,
      canShowBottomBtn: false,
      activeIndex: 0,
      // 32.962527, 117.363957
      // 117.374214, 32.956014
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
  },
  computed: {
    ...mapState({
      rightTitles: state => state.rightTitles
    })
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    handleScroll () {
      this.canShowBottomBtn = window.scrollY > 60
      if (this.canShowBottomBtn) {
        this.dynamicHighLight(window.scrollY)
      } else {
        this.activeIndex = 0
      }
    },
    dynamicHighLight (scrollY) {
      var refsArr = ['intro', 'special', 'team', 'service', 'contact']
      const me = this
      refsArr.map((v, i) => {
        if (scrollY > (me.$refs[v].offsetTop - 10) && scrollY <= (me.$refs[v].offsetTop + me.$refs[v].offsetHeight)) {
          me.activeIndex = i + 1
        }
      })
    },
    onSearchResult (pois) {
      console.log('onSearchResult')
      console.log(pois)
    },
    mapClick (ev) {
      console.log('mapClick')
      console.log(ev)
    },
    sendComment () {
      this.$refs.spinner.show()
      const me = this
      setTimeout(() => {
        me.alertShow = true
        me.$refs.spinner.hide()
        setTimeout(() => {
          me.alertShow = false
        }, 3000)
      }, 2000)
    },
    seeDetail () {
      this.modalShow = true
    },
    cb (ev) {
      console.log(ev)
    }
  },
  components: {
    accordion,
    panel,
    navbar,
    spinner,
    alert,
    modal
  }
}

</script>

<style scoped>
  .panel-xxx .panel-heading {
    background: rgb(255, 189, 1) !important;
  }

  .dblock {
    height: 300px;
  }

  .btn.active {
    background: yellow;
  }

  .banner {
    background: url(../assets/banner.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    padding-top:50px;
    padding-bottom: 50px;
  }

  .banner .navbar-brand{
    font-size: 24px;
  }

  .intro {
    padding-top: 4%;
  }

  .special .detail, .team .gallery {
    padding-top: 2%;
  }

  .team .gallery {
    padding-bottom: 4%;
  }

  .team .gallery {
    background: #F4F4F4;
  }

  .team .gallery .grid-content {
    background: #fff;
    box-shadow: 0px 2px 0px #D4D5D9;
    padding: 10px 10px;
    position: relative;
  }

  .grid-content .name {
    float:left;
  }

  .grid-content .link {
    float: right;
  }

  .grid-content .link ul li {
    list-style: none;
    margin-top: 2rem;
    margin-right: .5rem;
    display: inline-block;
  }

  .grid-content .hello {
    text-align: center;
    position: absolute;
    bottom:-10px;
    right:0px;
    left:0px;
  }

  .grid-content .hello a {
    padding: 10px 30px;
    background: #0199e6;
    color: #fff;
    font-size: 14px;
    transition: .5s all;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    -o-transition: .5s all;
    -ms-transition: .5s all;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    text-decoration: none;
    letter-spacing: 2px;
  }

  .grid-content .hello a:hover {
    background: #fff;
    color: #0199e6;
    border: 1px solid #0199e6;
  }

  .contact {
    padding-bottom: 2%;
  }

  .banner a:hover, .banner .right-txt a.active {
    color: #0199e6 !important;
  }

  .banner .right-txt {
    letter-spacing: 2px;
    font-size: 16px;
  }


  .feature-text h3 {
    color: #393939;
    font-size: 2.5em;
    background: url(../assets/line.png) no-repeat 50% 100%;
    padding-bottom: 0.5em;
    margin-bottom: 10px;
    font-weight: 500;
  }
  .footer {
    background: #f0ad4e;
    padding: 2em 0;
    text-align: center;
  }
</style>
