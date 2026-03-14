import React, { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
  const[products,setProducts]=useState([
 {id:1,name:"Laptop",price:50000},
 {id:2,name:"Phone",price:20000},
 {id:3,name:"Tablet",price:15000}
]) 
const handleDelete=(id)=>{
 const updatedProducts=products.filter(product=>product.id!==id)
 setProducts(updatedProducts)
}
const handleAdd=()=>{
  const newProduct={
    id:products.length+1,
    name:"Camera",
    price:25000
  }
setProducts([
  ...products,
  newProduct

])
}
  return (
   <>
   <button onClick={handleAdd}>Add Product</button>
   {products.map((product)=>(
    <div key={product.id}>
      <ProductCard
      name={product.name}
      price={product.price}
      />
      
 <button onClick={()=>handleDelete(product.id)}>Delete</button>
    </div>
   ))}
   </>
  )
}
