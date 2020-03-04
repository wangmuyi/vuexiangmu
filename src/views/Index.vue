<template>
  <div>
    <div class="banner" @click="tobrand" v-if="banners.length">
      <img :src="data.main_image" alt="hhhhh" v-for="data in banners" :key="data.id" />
      <span>{{banners[0].main_title}}</span>
      <p>{{banners[0].sub_title}}</p>
    </div>
    <div class="every">
      <div v-for="(data,index) in every" :key="data.main_title">
          <div>
        <h3>{{data.main_title}}</h3>
        <h6>{{data.sub_title}}</h6></div>
        <div>
        <img :src="data.products[index].picUrl" alt />
        <h4>{{data.products[index].tag}}</h4>
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
  },
  methods: {
    tobrand () {
      this.$router.push('/brand')
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
      color: #ccc;
    position: relative;
  img {
    width: 100%;
  }
  span{
      position: absolute;
      left:50%;
      font-size: 26px;
      font-weight: 800;
      bottom:140px;
      margin-left: -85px;
  }
  p{
      position: absolute;
      left:130px;
      font-size: 18px;
      font-weight: 800;
      bottom: 100px;
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
