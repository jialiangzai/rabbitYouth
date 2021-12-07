<template>
  <div class="xtx-numbox">
    <div class="label">数量</div>
    <div class="numbox">
      <a href="javascript:;" @click="sub">-</a>
      <input type="text" readonly :value="numcount" />
      <a href="javascript:;" @click="add">+</a>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue-demi'
export default {
  name: 'XtxNumbox',
  emits: ['update:modelValue'],
  props: {
    // 默认-----可以同步组件内部数据的变化到父组件
    modelValue: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: 10
    },
    min: {
      type: Number,
      default: 1
    }
  },
  setup (props, { emit }) {
    const numcount = ref(1)
    // 加
    const add = () => {
      if (numcount.value === props.max) {
        return
      }
      numcount.value++
      emit('update:modelValue', numcount.value)
    }
    // 减
    const sub = () => {
      if (numcount.value === props.min) {
        return
      }
      numcount.value--
      emit('update:modelValue', numcount.value)
    }
    watch(() => props.modelValue, (newval) => {
      numcount.value = newval
    }, {
      immediate: true
    })
    return {
      numcount,
      add,
      sub
    }
  }
}
</script>
<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
