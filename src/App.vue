<template>
  <div>
    <top></top>
    <transition name="app" mode="out-in">
      <router-view></router-view>
    </transition>
    <bottom-side></bottom-side>
  </div>
</template>
<script>
import bottomSide from '@/components/BottomSide'
import top from '@/components/Top'
// import tabbar from "@/components/Tabbar";
export default {
  components: {
    // tabbar,
    bottomSide,
    top
  },
  mounted () {}
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul,
ol,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.app-enter-active {
  animation: aaa 0.5s;
}
.app-leave-active {
  animation: aaa 0.5s reverse;
}
@keyframes aaa {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
