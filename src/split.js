// 把订单总额(分)平摊给 n 个人,所有人的份额加起来必须等于总额。
export function splitEvenly(total, n) {
  const each = Math.floor(total / n);
  return Array(n).fill(each);
}
