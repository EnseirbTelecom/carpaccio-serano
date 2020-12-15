/* eslint-env jest */

const Discount = require('../../src/ServiceClasses/DiscountService/Discount')

const totalPrice = 5254.54

describe('Discount class', () => {
  test('should have a static method getDicount that return the total price with the tag NO_DISCOUNT', () => {
    const tag = 'NO_DISCOUNT'
    expect(Discount.getDiscount(totalPrice, tag)).toBe(totalPrice)
  })
  test('should have a static method getDicount that return the total price progressively discounted with the tag PROGRESSIVE_DISCOUNT', () => {
    const tag = 'PROGRESSIVE_DISCOUNT'
    expect(Discount.getDiscount(totalPrice, tag)).toBe(4991.81)
  })
  test('should have a static method getDicount that return the total price flattely discounted with the tag FLAT_DISCOUNT', () => {
    const tag = 'FLAT_DISCOUNT'
    expect(Discount.getDiscount(totalPrice, tag)).toBe(3678.18)
  })
  test('should have a static method getDicount that return the total price fixely discounted with the tag FIXED_DISCOUNT', () => {
    const tag = 'FIXED_DISCOUNT'
    expect(Discount.getDiscount(totalPrice, tag)).toBe(5054.54)
  })
})
