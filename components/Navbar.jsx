import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display: "flex", gap:"60rem", justifyContent:"center", backgroundColor:"purple",padding:"1rem"}}>
        <h1 style={{color:"yellow"}}>Logo</h1>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"4rem", fontSize:"22px"}}>
            <Link href="/"><p>Home</p></Link>
            <Link href="/products"><p>Products</p></Link>
            <p>Theme</p>
            <button style={{fontSize:"20px", backgroundColor:"green"}}>Login</button>
        </div>
    </div>
  )
}

export default Navbar