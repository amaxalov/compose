const compose = function (...rest: Array<any>) {
  const func = rest
  return function (params: Array<any>) {
    return params.map((i: any) => func.reduce((accumulator, currentValue) => currentValue(accumulator), i))
  }
}

const decorator = function (a: Array<any>, ...rest: Array<any>): any {
  return compose(a)(rest)
}

export default decorator
