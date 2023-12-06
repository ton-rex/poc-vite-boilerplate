import { useMemo } from 'react'
import axios, { AxiosContext } from '~/app/services/request'

export const AxiosProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const axiosValue = useMemo(() => {
    return axios
  }, [])

  return (
    <AxiosContext.Provider value={axiosValue}>{children}</AxiosContext.Provider>
  )
}
