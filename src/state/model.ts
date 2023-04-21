export interface FormData {
    name: string
    regnumber: number | null
    date: Date | null
  }

export interface Contact {
    id: string
    formData: FormData
}