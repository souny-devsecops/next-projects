export interface RootResponse {
  status: boolean
  message: string
  data: Data[]
}

export interface Data {
  createdAt: string
  name: string
  avatar: string
  id: string
}


