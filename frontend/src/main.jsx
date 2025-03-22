import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import CoffeeDetails from './Components/CoffeeDetails.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
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
        loader:({params})=>fetch(`https://espresso-emporium-server-opal.vercel.app/coffees/${params.id}`)
      },
      {
        path:"/updateCoffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`https://espresso-emporium-server-opal.vercel.app/coffees/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
