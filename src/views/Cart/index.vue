<template>
  <div class="xtx-cart-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>购物车</XtxBreadItem>
      </XtxBread>
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <XtxCheckbox :modelValue="isAll" @update:modelValue="changAll"
                  >全选</XtxCheckbox
                >
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="i in effectiveList" :key="i.skuId">
              <td>
                <XtxCheckbox
                  :modelValue="i.selected"
                  @update:modelValue="changSingle(i, $event)"
                />
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"
                    ><img :src="i.picture" alt=""
                  /></RouterLink>
                  <div>
                    <p class="name ellipsis">{{ i.name }}</p>
                    <!-- 选择规格组件 -->
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ i.nowPrice }}</p>
                <p>
                  比加入时降价
                  <span class="red"
                    >&yen;{{ (i.price - i.nowPrice).toFixed(2) }}</span
                  >
                </p>
              </td>
              <td class="tc">
                <XtxNumbox
                  :modelValue="i.count"
                  :isShow="false"
                  @update:modelValue="numChange(i, $event)"
                />
              </td>
              <td class="tc">
                <p class="f16 red">
                  &yen;{{ (i.nowPrice * i.count).toFixed(2) }}
                </p>
              </td>
              <td class="tc">
                <p>
                  <a class="green" href="javascript:;" @click="delCart(i)"
                    >删除</a
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{ effectiveList.length }} 件商品，已选择
          {{ selectedList.length }} 件，商品合计：
          <span class="red">¥{{ allSelectedPrice.toFixed(2) }}</span>
        </div>
        <div class="total">
          <XtxButton type="middle" bg="primary">下单结算</XtxButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, useStore } from 'vuex'
import msg from '@/components/Message/index'
export default {
  name: 'XtxCartPage',
  computed: {
    ...mapGetters('cart', [
      'effectiveList',
      'selectedList',
      'allSelectedPrice',
      'isAll'
    ])
  },
  setup () {
    const store = useStore()
    // 单选
    const changSingle = async (good, sel) => {
      // vuex中actions
      await store.dispatch('cart/SingleCheActions', { good, sel })
    }
    // 全选
    const changAll = async (sel) => {
      // vuex中actions
      try {
        const res = await store.dispatch('cart/AllCheActions', sel)
        msg({ type: 'success', text: res })
      } catch (error) {
        msg({ type: 'success', text: '操作失败' })
      }
    }
    // 删除
    const delCart = async (good) => {
      try {
        const res = await store.dispatch('cart/delCartSingActions', good)
        msg({ type: 'success', text: res })
      } catch (error) {
        msg({ type: 'success', text: '操作失败' })
      }
    }
    // 修改数量
    const numChange = async (good, num) => {
      // vuex中actions
      await store.dispatch('cart/countChangActions', { good, num })
    }
    return { changSingle, changAll, delCart, numChange }
  }
}
</script>
<style scoped lang="less">
.tc {
  text-align: center;
  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}
.red {
  color: @priceColor;
}
.green {
  color: @xtxColor;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .xtx-checkbox {
    color: #999;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.xtx-cart-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>
