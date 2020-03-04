<template>
  <div>
    <div class="banner" v-if="banners.length">
      <img :src="data.main_image" alt="hhhhh" v-for="data in banners" :key="data.id" />
      <!-- <span>jjj{{Name}}</span> -->
    </div>
    <div class="every">
      <div v-for="(data,index) in every" :key="data.main_title">
          <div>
        <h3>{{data.main_title}}</h3>
        <h6>{{data.sub_title}}</h6></div>
        <div>
        <img :src="data.products[index].picUrl" alt />
        <h4>{{data.products[index].tag}}</h4></div>
        <div>
        <img :src="data.products[index?--index:++index].picUrl" alt />
        <h4>{{data.products[index?--index:++index].tag}}</h4></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      banners: [],
      every: null
    }
  },
  computed: {
    // Name () {
    //   return this.banners.main_title
    //   return JSON.parse(this.banners).main_title
    // }
  },
  mounted () {
    axios
      .get(
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5'
      )
      .then(res => {
        console.log(res.data.banners)
        this.banners = res.data.banners
      })
    axios
      .get('http://www.mei.com/appapi/ninenew/operational/v1?credential=')
      .then(res => {
        console.log(res.data.show2)
        this.every = res.data.show2
      })
  }
}
</script>
<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}
h3,h4,h6{
    display: inline-block;
}
.every{
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #ccc;
    img{
        width:20%;
    }

}
</style>
