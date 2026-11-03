// 购物车金额计算。金额单位都是分。
export function subtotal(items) {
  return items.reduce((sum, { price, qty }) => sum + price * qty, 0);
}
