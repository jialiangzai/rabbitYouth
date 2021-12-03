<template>
  <div class="home-banner">
    <Slider :data="BannerLists" autoPlay />
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import { findBanner } from '@/api/home'
import { ref } from 'vue'

export default {
  name: 'HomeBanner',
  components: {
    Slider
  },
  setup () {
    const BannerLists = ref([])
    const getBanner = async () => {
      const { result } = await findBanner()
      console.log(result)
      BannerLists.value = result
    }
    getBanner()
    return {
      getBanner,
      BannerLists
    }
  }
}
</script>

<style scoped lang='less'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>
