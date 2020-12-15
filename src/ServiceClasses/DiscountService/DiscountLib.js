/**
 *
 * @param {Number} totalPrice
 */
export const progressiveDiscount = totalPrice => {
  if (totalPrice < 1000) {
    return totalPrice
  } else if (totalPrice < 5000) {
    return totalPrice - totalPrice * 0.03
  } else if (totalPrice < 7000) {
    return totalPrice - totalPrice * 0.05
  } else if (totalPrice < 10000) {
    return totalPrice - totalPrice * 0.07
  } else if (totalPrice < 50000) {
    return totalPrice - totalPrice * 0.1
  } else {
    return totalPrice - totalPrice * 0.15
  }
}

/**
 *
 * @param {Number} totalPrice
 */
export const flatDiscount = totalPrice => {
  return totalPrice - totalPrice * 0.3
}

/**
 *
 * @param {Number} totalPrice
 */
export const fixedDiscount = totalPrice => {
  if (totalPrice >= 100 && totalPrice < 400) {
    return totalPrice - 10
  } else if (totalPrice >= 400 && totalPrice < 1000) {
    return totalPrice - 50
  } else if (totalPrice >= 1000) {
    return totalPrice - 200
  } else {
    return totalPrice
  }
}
