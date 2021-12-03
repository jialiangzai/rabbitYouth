<template>
  <div class="home-category">
    <ul class="menu">
      <!-- 一级 -->
      <li v-for="item in list" :key="item.id" @mouseenter="cateId = item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <!-- 二级 -->
        <template v-if="item.children">
          <RouterLink v-for="sub in item.children" :key="sub.id" to="/">
            {{ sub.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul v-if="getGoods">
        <li v-for="i in getGoods" :key="i.id">
          <RouterLink to="/">
            <img :src="i.picture" :alt="i.name" />
            <div class="info">
              <p class="name ellipsis-2">{{ i.name }}</p>
              <p class="desc ellipsis">{{ i.desc }}</p>
              <p class="price"><i>¥</i>{{ i.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HomeCategory',
  setup () {
    const store = useStore()
    // 总数据存在，根据分类菜单id找对应的对象.goods
    const cateId = ref(null)
    // 处理二级只需前两个数据
    const list = computed(() => {
      return store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          // 新数组映射前两个
          // 基于一个数组 针对于数据的每一项都做处理 然后返回一个全新的数组 map
          children: item.children.slice(0, 2)
        }
      })
    })
    // console.log(list, 111)
    const getGoods = computed(() => {
      // 异步请求所以存在id对应的goods为undefined情况
      return store.state.category.list.find(item => item.id === cateId.value)?.goods
    })
    return { list, getGoods, cateId }
  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  // 弹层默认不显示
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            overflow: hidden;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  // 显示弹层
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
