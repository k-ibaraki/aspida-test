/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_test_param@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://127.0.0.1:3000/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/paramstest'
  const GET = 'GET'

  return {
    _test_param: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns Default Response
         */
        get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Default Response
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
