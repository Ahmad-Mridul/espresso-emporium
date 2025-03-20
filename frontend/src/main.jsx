import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import CoffeeDetails from './Components/CoffeeDetails.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/add-coffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/coffees/:id",
        element:<CoffeeDetails></CoffeeDetails>,
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path:"/updateCoffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      }
    ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
