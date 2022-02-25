// For Name Service

export type NamePayload = {
  firstName: string
  middleName?: string
  lastName: string
}
export type FormattedPayload = {
  formattedString: string
}

export type FullNameResponse = {
  fullName: string
}

export interface NameService {
  getFormattedString: (payload: NamePayload) => Promise<FormattedPayload>
  getFullName: (payload: NamePayload) => Promise<FullNameResponse>
}

//  For Arithmatic Service

export type CalculationRequest = {
  a: number
  b: number
}

export type CalculationResponse = {
  action: string
  result: number
}

export interface ArithmaticService {
  getSum: (payload: CalculationRequest) => Promise<CalculationResponse>
  getDiff: (payload: CalculationRequest) => Promise<CalculationResponse>
  multiply: (payload: CalculationRequest) => Promise<CalculationResponse>
  divide: (payload: CalculationRequest) => Promise<CalculationResponse>
}
