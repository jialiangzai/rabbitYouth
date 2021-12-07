
// 表单校验
// 一般应用的表单校验可能多个地方都需要使用，所以我们有必要把所有的规则集中管理起来
export default {
  // value用户选中/输入的表单数据
  // 校验account
  account (value) {
    if (!value) return '请输入用户名'
    return true
  },
  password (value) {
    if (!value) return '请输入密码'
    if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
    return true
  },
  isAgree (value) {
    if (!value) return '请勾选同意用户协议'
    return true
  }
}
