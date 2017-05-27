export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    back () {
      if (this.$router) {
        this.$router.go(-1)
      }
    },
    currentArray (currentIndex, pageSize, totalArray) {
      let lastIndex = (pageSize + currentIndex) - 1
      console.log(lastIndex)
      let newArray = []
      let i = 0
      if (lastIndex < totalArray.length - 1) {
        for (i = currentIndex; i <= lastIndex; i++) {
          newArray.push(totalArray[i])
        }
      } else {
        for (i = currentIndex; i < totalArray.length; i++) {
          newArray.push(totalArray[i])
        }
      }
      return newArray
    }
  }
}
