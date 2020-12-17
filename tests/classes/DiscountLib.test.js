/* eslint-env jest */

const DiscountLib = require('../../src/ServiceClasses/DiscountService/DiscountLib')

describe('Progressive Discout', () => {
  test('should return the totalPrice if it is < 1000', () => {
    const totalPrice = 356.45
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(totalPrice)
  })
  test('should return the totalPrice with 3 % discount if it is 1000<=total< 5000', () => {
    const totalPrice = 3556.45
    const discountedPrice = 3449.76
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice with 3 % discount if it is total = 1000', () => {
    const totalPrice = 1000
    const discountedPrice = 970
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice with 5 % discount if it is 5000<=total< 7000', () => {
    const totalPrice = 5874.75
    const discountedPrice = 5581.01
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice with 5 % discount if it is total = 5000', () => {
    const totalPrice = 5000
    const discountedPrice = 4750
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })

  test('should return the totalPrice with 5 % discount if it is 7000<=total< 10000', () => {
    const totalPrice = 8562.52
    const discountedPrice = 7963.14
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice with 7 % discount if it is total = 7000', () => {
    const totalPrice = 7000
    const discountedPrice = 6510
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice with 10 % discount if it is 10000<=total< 50000', () => {
    const totalPrice = 26544.52
    const discountedPrice = 23890.07
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice with 10 % discount if it is total = 10000', () => {
    const totalPrice = 10000
    const discountedPrice = 9000
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })

  test('should return the totalPrice with 15 % discount if it is 50000<=total', () => {
    const totalPrice = 1546544212.45
    const discountedPrice = 1314562580.58
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice with 15 % discount if it is total = 50000', () => {
    const totalPrice = 50000
    const discountedPrice = 42500
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should throw an error if the price is negative', () => {
    const totalPrice = -1000
    expect(() => DiscountLib.progressiveDiscount(totalPrice)).toThrowError(
      new Error('Price cannot be negative')
    )
  })
  test('should work with price = 0 and return 0', () => {
    const totalPrice = 0
    const discountedPrice = 0
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(discountedPrice)
  })
})

describe('flat Discount', () => {
  test('should return the price with 30%', () => {
    const totalPrice = 546542.54
    const discountedPrice = 382579.78
    expect(DiscountLib.flatDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should throw an error if the price is negative', () => {
    const totalPrice = -1000
    expect(() => DiscountLib.flatDiscount(totalPrice)).toThrowError(
      new Error('Price cannot be negative')
    )
  })
  test('should work with price = 0 and return 0', () => {
    const totalPrice = 0
    const discountedPrice = 0
    expect(DiscountLib.flatDiscount(totalPrice)).toBe(discountedPrice)
  })
})

describe('fixed Discount', () => {
  test('should reduce the price by 10 if it is >=100 and < 400', () => {
    const totalPrice = 325.15
    const discountedPrice = 315.15
    expect(DiscountLib.fixedDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should reduce the price by 10 if it is = 100', () => {
    const totalPrice = 100
    const discountedPrice = 90
    expect(DiscountLib.fixedDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should reduce the price by 50 if it is >=400 and < 1000', () => {
    const totalPrice = 854.12
    const discountedPrice = 804.12
    expect(DiscountLib.fixedDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should reduce the price by 50 if it is = 400', () => {
    const totalPrice = 400
    const discountedPrice = 350
    expect(DiscountLib.fixedDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should reduce the price by 200 if it is >=1000', () => {
    const totalPrice = 453554.41
    const discountedPrice = 453354.41
    expect(DiscountLib.fixedDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should reduce the price by 200 if it is = 1000', () => {
    const totalPrice = 1000
    const discountedPrice = 800
    expect(DiscountLib.fixedDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should throw an error if the price is negative', () => {
    const totalPrice = -1000
    expect(() => DiscountLib.fixedDiscount(totalPrice)).toThrowError(
      new Error('Price cannot be negative')
    )
  })
  test('should work with price = 0 and return 0', () => {
    const totalPrice = 0
    const discountedPrice = 0
    expect(DiscountLib.fixedDiscount(totalPrice)).toBe(discountedPrice)
  })
  test('should return the totalPrice if it is < 100', () => {
    const totalPrice = 30
    expect(DiscountLib.progressiveDiscount(totalPrice)).toBe(totalPrice)
  })
})
