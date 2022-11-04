export type ItemType = {
  address: string
  benefits: string[]
  createdAt: Date
  description: string
  email: string
  employment_type: string[]
  id: string
  location: {
    lat: number
    long: number
  }
  name: string
  phone: string
  pictures: string[]
  salary: string
  title: string
  updatedAt: Date
  rating: number
  diffDate: number
}

export type ParamsType = {
  latitude: number
  longitude: number
}

export type PageDataType = {
  currentPage: number
  pageCount: number
}

export type ContextType = {
  data: ItemType[]
  error: string
  setError: (error: string) => void
  setIsLoading: (isLoading: boolean) => void
}
