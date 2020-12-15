const DiscountLib = require('./DiscountLib')

/**
 * Usable Discount Types
 * @readonly
 * @enum {String}
 */
const DISCOUNT_TYPES = {
  NO_DISCOUNT: 'NO_DISCOUNT',
  PROGRESSIVE_DISCOUNT: 'PROGRESSIVE_DISCOUNT',
  FLAT_DISCOUNT: 'FLAT_DISCOUNT',
  FIXED_DISCOUNT: 'FIXED_DISCOUNT'
}

class Discount {
  /**
   *
   * @param {Number} total
   * @param {DISCOUNT_TYPES} discountType
   */
  static getDiscount (total, discountType) {
    switch (discountType) {
      case DISCOUNT_TYPES.NO_DISCOUNT:
        return total
      case DISCOUNT_TYPES.PROGRESSIVE_DISCOUNT:
        return DiscountLib.progressiveDiscount(total)
      case DISCOUNT_TYPES.FLAT_DISCOUNT:
        return DiscountLib.flatDiscount(total)
      case DISCOUNT_TYPES.FIXED_DISCOUNT:
        return DiscountLib.fixedDiscount(total)
      default:
        throw new Error('No valid discount type profided')
    }
  }
}

module.exports = Discount
