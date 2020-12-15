const DiscountLib = require('./DiscountLib')

class Discount {
  static getDiscount (total, discountType) {
    switch (discountType) {
      case 'NO_DISCOUNT':
        return total
      case 'PROGRESSIVE_DISCOUNT':
        return DiscountLib.progressiveDiscount(total)
      case 'FLAT_DISCOUNT':
        return DiscountLib.flatDiscount(total)
      case 'FIXED_DISCOUNT':
        return DiscountLib.fixedDiscount(total)
    }
  }
}

module.exports = Discount
