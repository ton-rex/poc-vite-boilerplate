import Axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios'
import { createContext, useContext } from 'react'
import { useMutation, useQuery } from 'react-query'

console.log(
  'baseURL:',
  import.meta.env.VITE_BASE_URL,
  import.meta.env.VITE_API_VERSION,
)

const axios = Axios.create({
  baseURL:
    import.meta.env.VITE_BASE_URL + '/' + import.meta.env.VITE_API_VERSION + '',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.interceptors.request.use((config) => {
  // Read token for anywhere, in this case directly from localStorage
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// response interceptor
// type response
axios.interceptors.response.use(
  (response) => {
    console.log('response:', response)

    if (response.status === 200) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return response.data
    }

    // notify error
    if (response.status === 401) {
      window.location.href = '/entrar'
    }

    return Promise.reject(new Error(response.statusText || 'Error'))
  },
  (error: AxiosError) => {
    // for debug
    console.log('err:', error, error.response)

    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401: {
          window.location.href = '/entrar'
          break
        }
        case 403: {
          window.location.href = '/entrar'
          break
        }
        case 404: {
          // notify 404 error
          break
        }
        case 406: {
          // notify 406 error
          break
        }
        default:
        // notify error
      }
    }

    return Promise.reject(error)
  },
)

export const AxiosContext = createContext<AxiosInstance>(
  new Proxy(axios, {
    apply: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    },
    get: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    },
  }),
)

export const useAxios = () => {
  return useContext(AxiosContext)
}

type listParameters = {
  limit?: number
  offset?: number
  filter?: Array<string>
  order?: string
}

const useGetList = <T>(key: string, url: string) => {
  const axios = useAxios()

  const service = async () => {
    const parameters: listParameters = {}

    console.log('params:', parameters)

    const data: T = await axios.get(`${url}`, {
      params: parameters,
      paramsSerializer: (parameters) => {
        return JSON.stringify(parameters)
      },
    })

    return data
  }
  return useQuery(key, () => service())
}

const useGetOne = <T>(
  key: string,
  url: string,
  parameters: AxiosRequestConfig<any> | undefined = {},
) => {
  const axios = useAxios()

  const service = async () => {
    const data: T = await axios.get(`${url}`, parameters)

    return data
  }

  return useQuery(key, () => service())
}

const useCreate = <T, U>(url: string) => {
  const axios = useAxios()
  // const queryClient = useQueryClient()

  return useMutation(async (parameters: T) => {
    const data: U = await axios.post(`${url}`, parameters)
    return data
  })
}

const useUpdate = <T>(url: string) => {
  const axios = useAxios()
  // const queryClient = useQueryClient()

  return useMutation(async (item: T) => {
    const data: T = await axios.patch(`${url}`, item)
    return data
  })
}

const useDelete = <T>(url: string) => {
  const axios = useAxios()
  // const queryClient = useQueryClient()

  return useMutation(async (id: number) => {
    const data: T = await axios.delete(`${url}?id=${id}`)
    return data
  })
}

const useBatch = (url: string) => {
  const axios = useAxios()
  // const queryClient = useQueryClient()

  return useMutation(async (ids: Array<number>) => {
    const data = await axios.post(`${url}`, { idList: ids })
    return data
  })
}

export { useBatch, useCreate, useDelete, useGetList, useGetOne, useUpdate }

export default axios
