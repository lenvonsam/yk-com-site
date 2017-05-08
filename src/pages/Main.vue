<template lang="pug">
  #mainContainer
    #swipeTest(style="height:200px;border:1px solid black;",ref="xxswipe")
    button.btn(v-scroll-to="{el: '#d4'}", :class="{active: activeIndex == 4}", style="position:fixed; top:20;z-index:20") jump2d4
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
    transition(name="bounce",enter-active-class="bounceInLeft",leave-active-class="bounceOutRight")
      .bottom-dot(v-if="canShowBottomBtn",v-scroll-to="{ el: '#mainContainer' }")

</template>

<script>
import { accordion, panel } from 'vue-strap'
import Hammer from 'hammerjs'
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
    console.log(Hammer)
    let sx = new Hammer.Manager(this.$refs.xxswipe)
    sx.add(new Hammer.Swipe())
    sx.on('swipe', (e) => {
      console.log('swipe')
      console.log(e)
    })
    // sx.on('swipeleft', (e) => {
    //   console.log('swipe left')
    //   alert('swipe left')
    //   console.log(e)
    // })
    // sx.on('swiperight', (e) => {
    //   console.log('swipe right')
    //   alert('swipe right')
    //   console.log(e)
    // })
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
    width: 50px;
    height: 50px;
    background: gray;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 20;
  }
</style>
