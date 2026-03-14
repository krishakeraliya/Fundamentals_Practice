import React from 'react'

export default function ProductCard({name,price}) {
  return (
    <>
    <h3>{name}</h3>
    <p>Price:{price}</p>
    </>
  )
}
