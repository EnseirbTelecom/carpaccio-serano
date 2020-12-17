/* eslint-env jest */

const TVA = require('../../src/ServiceClasses/TVAService/TVA')

test('getTVA(100, DE) should be 20.', () => {
  expect(TVA.getTVA(100, 'DE')).toBe(20)
})

test('getTVA(100, UK) should be 21.', () => {
  expect(TVA.getTVA(100, 'UK')).toBe(21)
})

test('getTVA(100, FR) should be 20.', () => {
  expect(TVA.getTVA(100, 'FR')).toBe(20)
})

test('getTVA(100, IT) should be 25.', () => {
  expect(TVA.getTVA(100, 'IT')).toBe(25)
})

test('getTVA(100, ES) should be 19.', () => {
  expect(TVA.getTVA(100, 'ES')).toBe(19)
})

test('getTVA(100, PL) should be 21.', () => {
  expect(TVA.getTVA(100, 'PL')).toBe(21)
})

test('getTVA(100, RO) should be 20.', () => {
  expect(TVA.getTVA(100, 'RO')).toBe(20)
})

test('getTVA(100, NL) should be 20.', () => {
  expect(TVA.getTVA(100, 'NL')).toBe(20)
})

test('getTVA(100, BE) should be 24.', () => {
  expect(TVA.getTVA(100, 'BE')).toBe(24)
})

test('getTVA(100, EL) should be 20.', () => {
  expect(TVA.getTVA(100, 'EL')).toBe(20)
})

test('getTVA(100, CZ) should be 19.', () => {
  expect(TVA.getTVA(100, 'CZ')).toBe(19)
})

test('getTVA(100, PT) should be 23.', () => {
  expect(TVA.getTVA(100, 'PT')).toBe(23)
})

test('getTVA(100, HU) should be 27.', () => {
  expect(TVA.getTVA(100, 'HU')).toBe(27)
})

test('getTVA(100, SE) should be 23.', () => {
  expect(TVA.getTVA(100, 'SE')).toBe(23)
})

test('getTVA(100, AT) should be 22.', () => {
  expect(TVA.getTVA(100, 'AT')).toBe(22)
})

test('getTVA(100, BG) should be 21.', () => {
  expect(TVA.getTVA(100, 'BG')).toBe(21)
})

test('getTVA(100, DK) should be 21.', () => {
  expect(TVA.getTVA(100, 'DK')).toBe(21)
})

test('getTVA(100, FI) should be 17.', () => {
  expect(TVA.getTVA(100, 'FI')).toBe(17)
})

test('getTVA(100, SK) should be 18.', () => {
  expect(TVA.getTVA(100, 'SK')).toBe(18)
})

test('getTVA(100, IE) should be 21.', () => {
  expect(TVA.getTVA(100, 'IE')).toBe(21)
})

test('getTVA(100, HR) should be 23.', () => {
  expect(TVA.getTVA(100, 'HR')).toBe(23)
})

test('getTVA(100, LT) should be 23.', () => {
  expect(TVA.getTVA(100, 'LT')).toBe(23)
})

test('getTVA(100, SI) should be 24.', () => {
  expect(TVA.getTVA(100, 'SI')).toBe(24)
})

test('getTVA(100, LV) should be 20.', () => {
  expect(TVA.getTVA(100, 'LV')).toBe(20)
})

test('getTVA(100, EE) should be 22.', () => {
  expect(TVA.getTVA(100, 'EE')).toBe(22)
})

test('getTVA(100, CY) should be 21.', () => {
  expect(TVA.getTVA(100, 'CY')).toBe(21)
})

test('getTVA(100, LU) should be 25.', () => {
  expect(TVA.getTVA(100, 'LU')).toBe(25)
})

test('getTVA(100, MT) should be 20.', () => {
  expect(TVA.getTVA(100, 'MT')).toBe(20)
})

test('isCountryCorrect(ZZ) should return false.', () => {
  expect(TVA.isCountryCorrect('ZZ')).toBe(false)
})

test('isCountryCorrect(FR) should return true.', () => {
  expect(TVA.isCountryCorrect('FR')).toBe(true)
})

test('getTVA(100, ZZ) should throw error No valid country provided for TVA.', () => {
  expect(() => TVA.getTVA(100, 'ZZ')).toThrowError(
    new Error('No valid country provided for TVA')
  )
})
