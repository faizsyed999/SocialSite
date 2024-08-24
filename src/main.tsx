import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './app/routes/Home'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
   </React.StrictMode>
)
