class BaseExpressions {
  constructor(input) {
    this.input = input
    this.h = ''
    this.k = 0.0
  }

  calcValues() {
    var {A, B, C, D, E, F} = this.input

    if (A && B && !C) {
      this.h = 'M'
      this.k = D + (D * E) / 10
    } else if (A && B && C) {
      this.h = 'P'
      this.k = D + (D * (E - F)) / 25.5
    } else if (!A && B && C) {
      this.h = 'T'
      this.k = D - (D * F) / 30
    } else {
      this.h = '[Error]'
      this.k = 0
    }

    return [this.h, this.k]
  }

  get values() {
    return this.calcValues()
  }
}

class BaseExpressionsCustom1 extends BaseExpressions {
  constructor(input) {
    super(input)
  }

  calcValues() {
    var {A, B, C, D, E, F} = this.input
    super.calcValues()

    if (A && B && C) {
      this.h = 'P'
      this.k = 2 * D + (D * E) / 100
    } else {
      this.h = '[Error]'
      this.k = 0
    }

    return [this.h, this.k]
  }
}

class BaseExpressionsCustom2 extends BaseExpressions {
  constructor(input) {
    super(input)
  }

  calcValues() {
    var {A, B, C, D, E, F} = this.input
    super.calcValues()

    if (A && B && !C) {
      this.h = 'T'
    } else if (A && !B && C) {
      this.h = 'M'
      this.k = F + D + (D * E) / 100
    } else {
      this.h = '[Error]'
      this.k = 0
    }

    return [this.h, this.k]
  }
}

module.exports = {
  BaseExpressions,
  BaseExpressionsCustom1,
  BaseExpressionsCustom2,
}
