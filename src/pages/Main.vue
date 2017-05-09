<template lang="pug">
  #mainContainer
    .feature-text
      h3.text-center 测试
    accordion(type="info")
      panel(header="panel #1")
        strong panel #1
      panel(header="panel #2")
    #d1.dblock
      h3 d1
    .dblock
      h3 d2
    .dblock
      h3 d3
    #d4.dblock(ref="d4")
      h3 d4
    .dblock
      h3 d5
    transition(name="fade",enter-active-class="fadeInUp",leave-active-class="fadeOutDown")
      .bottom-dot(v-if="canShowBottomBtn",v-scroll-to="{ el: '#mainContainer' }")

</template>

<script>
import { accordion, panel } from 'vue-strap'
export default {
  data () {
    return {
      type: 'xxx',
      canShowBottomBtn: false,
      activeIndex: 0,
      index: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    handleScroll () {
      this.canShowBottomBtn = window.scrollY > 60
      console.log(window.scrollY)
      console.log(`d4 offsettop: ${this.$refs.d4.offsetTop}`)
      console.log(this.activeIndex)
      if (window.scrollY > (this.$refs.d4.offsetTop - 20) && window.scrollY < (this.$refs.d4.offsetTop + 20)) {
        this.activeIndex = 4
      } else {
        this.activeIndex = 0
      }
    },
    handerTap (type, e) {
      console.log(type)
      alert(type)
      console.log(e)
    }
  },
  components: {
    accordion,
    panel
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

  .bottom-dot {
    width: 40px;
    height: 40px;
    background: url(../assets/to-top1.png) no-repeat;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 20;
  }
  .feature-text h3 {
    color: #393939;
    font-size: 2.5em;
    background: url(../assets/line.png) no-repeat 50% 100%;
    padding-bottom: 0.5em;
    margin-bottom: 10px;
    font-weight: 500;
  }
</style>
