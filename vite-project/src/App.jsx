import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/Layout/CountryDetails'
//this can be done
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root/>}>
//     <Route path="/about" element={<About/>}><
//   )
// )
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Home/>}/> //insie one compoennet another component home is passed using curly braces
//     </Route>
//   )
// )
//instead of this we can do 
const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/country",
        element:<Country/>
      },
      {
        path:"/country/:id",
        element:<CountryDetails/>
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router}/> //router provider manages all links with the props router={router} 
}

export default App
