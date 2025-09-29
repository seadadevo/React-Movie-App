import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDom from "react-dom/client"

const queryClient = new QueryClient()

ReactDom.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>

)
