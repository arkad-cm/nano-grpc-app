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
