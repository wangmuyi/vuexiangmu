<template>
  <div>
    <div class="top">
      <button @click="xyclick">登录</button>
      <input type="text" />
      <span>点我</span>
      <tabbar></tabbar>
    </div>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'

export default {
  components: {
    tabbar
  },
  methods: {
    xyclick () {
      this.$router.push('/login')
      console.log(1)
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  input {
    margin-left: 100px;
  }
  span {
    float: right;
  }
}
</style>
