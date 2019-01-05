<template lang="pug">
  #app(:class="{'pb-80': fixBottom}")
    navbar(placement="top",style="background:#fff;")
      img.img-responsive(v-lazy="'http://yeacom.thinkingsam.cn/yklogo.png'",style="width:120px;height:46px;margin-top:2px;",slot="brand")
      li.right-txt(slot="right",v-for="(rt,i) in rightTitles", :class="{'dp': rt.type == 'dropdown'}")
        a(:class="{'active': i == topTabIndex}", v-if="rt.type== 'text'",@click="jump(rt.url)") {{rt.name}}
        dropdown(:text="rt.name",:class="{'active': i == topTabIndex}",v-else)
          li(v-for="subt in rt.subTitles",@click="subSwitchTopTab(rt, subt)")
            a {{subt.name}}
    router-view
    .footer(:class="{'fix-bottom': fixBottom}")
      .row.text-center.ft-white
        i.fa.fa-copyright
        | 2019&nbsp;&nbsp;怡康地产&版权所有[
        a(href="http://www.miitbeian.gov.cn/", target="_blank") 皖ICP备16014253号
        | ]&nbsp;&nbsp;|&nbsp;&nbsp;技术支持&nbsp;&nbsp;
        a(href="http://www.thinkingsam.cn") 山姆极客
    transition(name="fade",enter-active-class="fadeInUp",leave-active-class="fadeOutDown")
      .bottom-dot(v-if="canShowBottomBtn",v-scroll-to="{ el: '#app' }")
</template>

<script>
  import { navbar, dropdown } from 'vue-strap'
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        canShowBottomBtn: false
      }
    },
    components: {
      navbar,
      dropdown
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.handleScroll)
      })
    },
    computed: {
      ...mapState({
        rightTitles: state => state.rightTitles,
        topTabIndex: state => state.topTabIndex,
        fixBottom: state => state.fixBottom
      })
    },
    methods: {
      ...mapActions([
        'configKeyVal'
      ]),
      handleScroll () {
        this.canShowBottomBtn = window.scrollY > 60
      },
      switchTopTab (rt, i) {
        // this.activeIndex = i
        if (rt.type === 'text') {
          this.jump(rt.url)
        }
      },
      subSwitchTopTab (rt, sub) {
        console.log(sub.type)
        if (sub.type === 'anchor') {
          this.configKeyVal({key: 'vtoMark', val: sub.vto})
          this.jump(rt.url)
        } else if (sub.type === 'link') {
          console.log(sub.url)
          this.jump(sub.url)
        }
      }
    }
  }
</script>

<style>
  .right-txt a.active,
  .right-txt a:hover
  {
    color: #d9982e !important;
  }

  .right-txt .dropdown a {
    color: #777;
    text-decoration: none;
  }

  .bottom-dot {
    width: 40px;
    height: 40px;
    background: url(./assets/to-top1.png) no-repeat;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 20;
  }

  .bottom-dot:hover {
    cursor: pointer;
  }

  .dp .dropdown.active a.dropdown-toggle {
    color: #d9982e;
  }

  .footer {
    background: #f0ad4e;
    padding: 2em 0;
    text-align: center;
  }

  .footer.fix-bottom {
    position: absolute !important;
    bottom: 0px !important;
    left: 0px;
    right: 0px;
  }
  .footer a {
    color: #fff;
    text-decoration: none;
  }
</style>
