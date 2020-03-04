<template>
  <div>login--{{isTabbarShow}}</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isTabbarShow'])
  },
  mounted () {
    this.isTabbarShow = false
    console.log(this.isTabbarShow)
  },
  destroyed () {
    console.log(this.isTabbarShow)

    this.isTabbarShow = false
  }

}
</script>
