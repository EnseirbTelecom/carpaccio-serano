const prercentageDiscountPrice = (price, percentage) => {
  return Number((price - price * percentage).toFixed(2))
}

/**
 *
 * @param {Number} totalPrice
 */
const progressiveDiscount = totalPrice => {
  if (totalPrice < 0) {
    throw new Error('Price cannot be negative')
  }
  if (totalPrice < 1000) {
    return totalPrice
  } else if (totalPrice < 5000) {
    return prercentageDiscountPrice(totalPrice, 0.03)
  } else if (totalPrice < 7000) {
    return prercentageDiscountPrice(totalPrice, 0.05)
  } else if (totalPrice < 10000) {
    return prercentageDiscountPrice(totalPrice, 0.07)
  } else if (totalPrice < 50000) {
    return prercentageDiscountPrice(totalPrice, 0.1)
  } else {
    return prercentageDiscountPrice(totalPrice, 0.15)
  }
}

/**
 *
 * @param {Number} totalPrice
 */
const flatDiscount = totalPrice => {
  if (totalPrice < 0) {
    throw new Error('Price cannot be negative')
  }
  return prercentageDiscountPrice(totalPrice, 0.3)
}

/**
 *
 * @param {Number} totalPrice
 */
const fixedDiscount = totalPrice => {
  if (totalPrice < 0) {
    throw new Error('Price cannot be negative')
  }
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

module.exports = { progressiveDiscount, flatDiscount, fixedDiscount }
