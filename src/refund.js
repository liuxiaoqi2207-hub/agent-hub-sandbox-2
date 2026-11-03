// 还能退多少钱(分):已付金额减去已退金额。
export function refundable(paid, refunded) {
  return paid - refunded;
}
