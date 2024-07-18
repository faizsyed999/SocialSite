import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom'
import HomePage from './app/routes/home/EntryPage'

const browserRouter  = createBrowserRouter([{
  path: "/",
  element : <HomePage></HomePage>,
}]);
const  element = <h1>yolo</h1>;


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </React.StrictMode>
)
