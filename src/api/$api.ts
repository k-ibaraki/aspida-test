/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './paramstest/_test_param@string'
// prettier-ignore
import { Methods as Methods1 } from './ping'
// prettier-ignore
import { Methods as Methods2 } from './querytest'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://127.0.0.1:3000/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/paramstest'
  const PATH1 = '/ping'
  const PATH2 = '/querytest'
  const GET = 'GET'

  return {
    paramstest: {
      _test_param: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * @returns Default Response
           */
          get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Default Response
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    ping: {
      get: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send(),
      $get: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    querytest: {
      /**
       * @returns Default Response
       */
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * @returns Default Response
       */
      $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
