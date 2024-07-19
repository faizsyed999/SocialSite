import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom'
import Home from './app/routes/Home'
import HomePage from './app/routes/HomePage'
import Login from './app/routes/Login'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  }, {
    path: "/login",
    element: <Login></Login>
  }, {
    path: "/home",
    element: <Home></Home>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </React.StrictMode>
)
