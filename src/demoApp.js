import React from 'react'
import Countries from './components/Countries'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const DemoApp = () => {
  return (
    <main className=' min-h-screen bg-gray-200  flex flex-col justify-between'>
      <NavBar />
      <div className='flex-grow'>
        <Countries />
      </div>
      <Footer />
    </main>
  )
}

export default DemoApp