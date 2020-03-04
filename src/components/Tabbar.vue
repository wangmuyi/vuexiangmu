<template>

    <nav>
      <swiper :key="datalist.length" :xydata="{
      slidesPerView: 6,
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    }" xyclass="nav">
        <!-- <div class="swiper-slide" v-for="data in datalist" :key="data.categoryId">
          {{data.name}}
        </div> -->
        <router-link tag="div" :to="data.name" class="swiper-slide" v-for="data in datalist" :key="data.categoryId"  activeClass="xy">
            {{data.name}}
        </router-link>
      </swiper>
    </nav>
</template>
<script>
import axios from 'axios'
import swiper from '@/components/Swiper'
export default {
  data () {
    return {
      datalist: []
    }
  },
  components: {
    swiper
  },
  mounted () {
    axios.get('http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1583290492247&summary=70bd0117983575178579157a8321db2b').then(res => {
      console.log(res.data.lists)
      this.datalist = [{ name: '推荐' }, ...res.data.lists, { name: '即将上映' }]
      console.log(this.datalist)
    })
  }
}
</script>
<style lang="scss" scoped>
nav{
    // background-color:yellow;
    height: 30px;
     .swiper-slide{
         line-height: 30px;
        // color: #fff;
    }
}
   .xy{
       color: red;
   }
</style>
