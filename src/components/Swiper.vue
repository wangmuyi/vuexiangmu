<template>
  <div>
    <div class="swiper-container" :class="xyclass">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  props: ['xyclass', 'xydata'],
  mounted () {
    new Swiper(
      '.' + (this.xyclass ? this.xyclass : 'swiper-container'),
      this.xydata
    )
  }
}
</script>
