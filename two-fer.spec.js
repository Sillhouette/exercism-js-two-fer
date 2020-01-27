import { twoFer } from './two-fer'

describe('twoFer()', () => {
  test('twoFer() returns "One for you, one for me"', () => {
    expect(twoFer()).toEqual("One for you, one for me.")
  })

  test('twoFer("Austin") returns "One for Austin, one for me"', () => {
    expect(twoFer("Austin")).toEqual("One for Austin, one for me.")
  })

})
