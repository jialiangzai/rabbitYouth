<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱" ref="target">
    <template #right>
      <XtxMore />
    </template>
    <!-- 主体默认插槽 -->
    <ul ref="pannel" class="goods-list">
      <li v-for="item in listNews" :key="item.id">
        <router-link :to="`/goods/${item.id}`">
          <img v-imglazy="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </router-link>
      </li>
    </ul>
  </HomePanel>
</template>

<script>
import HomePanel from './home-panel.vue'
import { findNew } from '@/api/home'
import { ref } from 'vue'
import { useObserver } from '@/hooks/index'

export default {
  components: {
    HomePanel
  },
  setup () {
    const listNews = ref([])
    const getNews = async () => {
      const { result } = await findNew()
      // console.log(result, 123)
      listNews.value = result
    }
    // onMounted(() => {
    //   getNews()
    // })
    const { target } = useObserver(getNews)

    return {
      listNews,
      getNews,
      target
    }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    // 激活效果
    transition: all 0.5s;
    &:hover {
      transform: translate3d(0, -6px, 0);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
    // end
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
