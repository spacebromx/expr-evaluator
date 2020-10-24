const {
  BaseExpressions,
  BaseExpressionsCustom1,
  BaseExpressionsCustom2,
} = require('../Expressions')

describe('Expressions', () => {
  describe('Base', () => {
    it('should return the correct values for the base case', () => {
      let input = {
        A: true,
        B: true,
        C: false,
        D: 1.5,
        E: 2,
        F: 5,
      }

      let instance = new BaseExpressions(input)
      expect(instance.values).toEqual({H: 'M', K: 1.8})

      input.C = true
      instance = new BaseExpressions(input)
      expect(instance.values).toEqual({H: 'P', K: 1.3235294117647058})

      input.A = false

      instance = new BaseExpressions(input)
      expect(instance.values).toEqual({H: 'T', K: 1.25})
    })

    it('should return an error for any other combination', () => {
      const error = {H: '[Error]', K: 0}
      let input = {
        A: false,
        B: false,
        C: false,
        D: 1.5,
        E: 2,
        F: 5,
      }

      let instance = new BaseExpressions(input)
      expect(instance.values).toEqual(error)

      input.A = true
      input.C = true

      instance = new BaseExpressions(input)
      expect(instance.values).toEqual(error)

      input.A = false

      instance = new BaseExpressions(input)
      expect(instance.values).toEqual(error)
    })
  })

  describe('Custom 1', () => {
    it('should return the correct values for the custom1 case', () => {
      let input = {
        A: true,
        B: true,
        C: true,
        D: 1.5,
        E: 2,
        F: 5,
      }
      let instance = new BaseExpressionsCustom1(input)
      expect(instance.values).toEqual({H: 'P', K: 3.03})
    })

    it('should return an error for any other combination', () => {
      const error = {H: '[Error]', K: 0}

      let input = {
        A: false,
        B: false,
        C: true,
        D: 1.5,
        E: 2,
        F: 5,
      }

      let instance = new BaseExpressionsCustom1(input)
      expect(instance.values).toEqual(error)

      input.C = false
      instance = new BaseExpressionsCustom1(input)
      expect(instance.values).toEqual(error)
    })
  })

  describe('Custom 2', () => {
    it('should return the correct values for the custom2 case', () => {
      let input = {
        A: true,
        B: true,
        C: false,
        D: 1.5,
        E: 2,
        F: 5,
      }

      let instance = new BaseExpressionsCustom2(input)
      expect(instance.values).toEqual({H: 'T', K: 1.8})

      input.B = false
      input.C = true

      instance = new BaseExpressionsCustom2(input)
      expect(instance.values).toEqual({H: 'M', K: 6.53})
    })

    it('should return an error for any other combination', () => {
      const error = {H: '[Error]', K: 0}

      let input = {
        A: false,
        B: true,
        C: false,
        D: 1.5,
        E: 2,
        F: 5,
      }

      let instance = new BaseExpressionsCustom2(input)
      expect(instance.values).toEqual(error)

      input.B = false
      instance = new BaseExpressionsCustom2(input)
      expect(instance.values).toEqual(error)
    })
  })
})
