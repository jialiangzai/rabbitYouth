<template>
  <div class="account-box">
    <Form class="form" :validation-schema="rule" v-slot="{ errors }" ref="fme">
      <!-- 错误信息对象 -->
      <!-- <p>{{ errors }}</p> -->
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <!--显示对应的错误信息  -->
          <Field
            type="text"
            placeholder="请输入用户名或手机号"
            v-model="fm.account"
            name="account"
            :class="{ error: errors.account }"
          />
        </div>
        <!-- 表单验证错误信息提示 -->
        <div v-if="errors.account" class="error">
          <i class="iconfont icon-warning" />{{ errors.account }}
        </div>
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-lock"></i>
          <Field
            type="password"
            placeholder="请输入密码"
            v-model="fm.password"
            name="password"
            :class="{ error: errors.password }"
          />
        </div>
        <!-- 表单验证错误信息提示 -->
        <div v-if="errors.password" class="error">
          <i class="iconfont icon-warning" />{{ errors.password }}
        </div>
      </div>
      <div class="form-item">
        <div class="agree">
          <!-- <XtxCheckbox /> -->
          <Field as="XtxCheckbox" name="isAgree" v-model="fm.isAgree">
            <!-- 支持插槽 -->
            <span>我已同意</span>
          </Field>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
        <!-- 表单验证错误信息提示 -->
        <div v-if="errors.isAgree" class="error">
          <i class="iconfont icon-warning" />{{ errors.isAgree }}
        </div>
      </div>
      <a href="javascript:;" class="btn" @click="submit">登录</a>
    </Form>
    <div class="action">
      <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      />
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate'
import { reactive, ref } from 'vue-demi'
import rules from '@/utils/vee-validate-schema'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
// msg提示框
import msg from '@/components/Message/index.js'
export default {
  name: 'XtxLoginForm',
  components: {
    Form,
    Field
  },
  setup () {
    // store实例
    const store = useStore()
    // router实例
    const router = useRouter()
    // route参数
    const route = useRoute()
    // 表单数据
    const fm = reactive({
      account: null, // 账号
      password: null, // 密码
      // 注意实现双向绑定无法同步到父组件
      isAgree: false
    })
    // 校验规则
    const rule = {
      account: rules.account, // 账号
      password: rules.password, // 密码
      isAgree: rules.isAgree
    }
    // 整体校验
    const fme = ref(null)
    // 点击登录按钮
    // 校验----掉接口获取数据(vuex管理用户数据)-----跳转
    const submit = async () => {
      const { valid } = await fme.value.validate()
      // errors: { account: '请输入用户名', password: '请输入密码', isAgree: '请勾选同意用户协议' }
      // results: { account: {… }, password: {… }, isAgree: {… } }
      // valid: false
      // console.log(valid)
      if (valid) {
        // console.log('loading')
        // 掉接口
        try {
          await store.dispatch('user/getUse', fm)
          // 考虑401情况带参数登录后继续浏览
          // 更新购物车
          await store.dispatch('cart/mergeCart')
          // 跳转
          router.replace(route.query.redirectUrl || '/')
          // 提示
          msg({ type: 'success', text: '登录成功', time: 2000 })
        } catch (error) {
          // 登录失败
          console.dir(error)
          msg({ type: 'error', text: error.response.data.message, time: 2000 })
        }
      }
    }
    return { fm, rule, fme, submit, msg }
  }
}
</script>
<style lang="less" scoped>
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 20px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
