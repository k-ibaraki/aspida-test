
//import useAspidaSWR from '@aspida/swr'
import { useAspidaQuery } from "@aspida/react-query"
import aspida from '@aspida/axios'
import api from './api/$api'
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';

const client = api(aspida())
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  )
}

function Content() {
  
  // const {data : queryData, error : error1} = useAspidaSWR(
  const {data : queryResponse, error : error1} = useAspidaQuery(
    client.querytest,
    'get',
    {
    query : {test_query : 1234},
    //refreshInterval : 0,
    refetchInterval: false,
   },
  )

  //const {data : paramData, error : error2} = useAspidaSWR(
  const {data : paramResponse, error : error2} = useAspidaQuery(
    client.paramstest._test_param("test1234"),
    'get',
    {
      //refreshInterval : 5000,
      refetchInterval: 5000,
     },
  
  )

  if (error1 || error2) return <div>failed to load</div>
  if (!queryResponse || !paramResponse) return <div>loading...</div>

  return (
    <div className="App">
      <div>{queryResponse.body.test_response}</div>
      <div>{paramResponse.body.test_response2}</div>
    </div>
  );
}

export default App;
