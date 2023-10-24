import React from 'react'
import Navbar from '../Partials/Navbar'
import Footer from '../Partials/Footer'

function Layout({children}: {children:React.ReactNode}) {
  return (
    <>
    <Navbar/>
       <main className="w-full px-[1rem] sm:px-[10rem] overflow-auto text-xl">
        {children}
       </main>
    <Footer/>
    </>
  )
}

export default Layout