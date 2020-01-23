export interface Param {
  name: string
  type: string
  isGeneric: boolean
}

export interface Location {
  path: string
  lines: {
    from: number
    to: number
  }
}

export interface FunctionRecord {
  name?: string
  docs?: string
  text?: string
  params: Param[]
  returnType: string
  location: Location
  module: string
}

export interface Module {
  name: string
  fns: FunctionRecord[]
}

export const stringifySignature = (fn: FunctionRecord) => {
  const args = fn.params
    .map((p, i) => `${p.name ? p.name : 't' + i}: ${p.type}`)
    .join(', ')

  return `(${args}) => ${fn.returnType}`
}

export interface FormattedFunctionRecord extends FunctionRecord {
  formattedSignature: string
}
