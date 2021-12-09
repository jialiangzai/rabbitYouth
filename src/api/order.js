import request from '@/utils/request'
/**
 * 获取订单列表
 * @param {String} page - 页码
 * @param {String} pageSize - 每页条数
 * @param {String} orderState - 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消，未传该参数或0为全部
 * @returns
 */
export const findOrderList = ({ page = 1, pageSize = 10, orderState = 0 }) => {
  return request('/member/order', 'get', { page, pageSize, orderState })
}
/**
 * 获取结算信息
 */
export const findCheckoutInfo = () => {
  return request('/member/order/pre', 'get')
}
/**
 * 提交订单
 * @param {Object} order - 订单信息对象
 *  deliveryTimeType: 1, 配送时间类型，1为不限，2为工作日，3为双休或假日
 *  payType: 1, 支付方式，1为在线支付，2为货到付款
 *  buyerMessage: '', 买家留言
 *  addressId: null, // 地址id
 *  goods: [] // { skuId, count } 由所有商品的skuId 和 count字段组成的数组
 */
export const createOrder = (order) => {
  return request('/member/order', 'post', order)
}
/**
 * 获取订单详情
 * @param {String} id - 订单ID
 */
export const findOrder = (id) => {
  return request('/member/order/' + id, 'get')
}
