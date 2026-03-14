
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Greeting from './components/Greeting'
import ProductApp from './components/ProductApp'
import ProductQuantity from './components/ProductQuantity'
import ToggleSwitch from './components/ToggleSwitch'

import Navbar from './Product_Store_App/Components/Navbar'
import ProductList from './Product_Store_App/Components/ProductList'
import UserList from './components/UserList'
import Form from './components/Form'
import AuthUI from './components/AuthUI'
import Accordion from './components/Accordion'
import StarRating from './components/StarRating'
import Stopwatch from './components/Stopwatch'
import Todo from './components/Todo'
import UserTable from './components/UserTable'
import SearchUsers from './components/SearchUsers'


import UsersPagination from './components/UsersPagination'
import MultiStepForm from './components/MultiStepForm'
import ThemeSwitcher from './components/ThemeSwitcher'
import Home from './components/Home'
import ImageCarousel from './components/ImageCarousel'
import InfiniteScroll from './components/InfiniteScroll'
import LocalStorageDemo from './components/LocalStorageDemo'
import Homes from './components/Homes'
import Weather from './components/Weather'

function App() {
// const[name,setName]=useState("Krisha")

  return (
    <>
   {/* <Navbar/>
   <ProductList/> */}
  {/* <ProductApp/> */}
  {/* <ProductQuantity/> */}
  {/* <ToggleSwitch/> */}
  {/* <input 
  placeholder='Enter a name'
  value={name}
  onChange={(e)=>setName(e.target.value)}
  />
  <Greeting name={name}/> */}
  {/* <UserList/> */}
  {/* <Form/> */}
  {/* <AuthUI/> */}
  {/* <Accordion/> */}
  {/* <StarRating/> */}
  {/* <Stopwatch/> */}
  {/* <Todo/> */}
  {/* <UserTable/> */}
  {/* <SearchUsers/> */}
  {/* <UsersPagination/> */}
  {/* <MultiStepForm/> */}
{/* <ThemeSwitcher>
  <Home/>
</ThemeSwitcher> */}
{/* <ImageCarousel/> */}
{/* <InfiniteScroll/> */}
{/* <LocalStorageDemo/> */}
<BrowserRouter>
<Routes>
  <Route path="/" element={<Homes/>}/>
  <Route path="/weather/:city" element={<Weather/>}/>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
