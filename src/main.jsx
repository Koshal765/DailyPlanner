import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import AddBlog from './AddBlog.jsx'
import DisplayShielf from "./DisplayShielf.jsx"


const AppRouter = createBrowserRouter([
  {path:"/",
    element: <App/>,
    children:[{
      index:true,
      element:<AddBlog/>
    },
  {path:"displayShelf/:id",
    element:<DisplayShielf/>
  }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router ={AppRouter}/>
  </StrictMode>,
)
