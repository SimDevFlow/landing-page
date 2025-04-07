import React from 'react'
import arrow from './assets/arrow2.png'
import girl1 from './assets/girl1.svg'

function App() {
  return (
    <>
      <header className='flex items-center px-12 py-4 justify-between'>
        <div className='flex text-xl'>
          <h3 className='font-bold mr-4'>Logo</h3>
          <ul className='flex gap-4'>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
        <button className='bg-blue-400 py-2 px-4 rounded-full font-semibold'>Something somewere</button>
      </header>
      <section className='px-12 grid grid-cols-2 gap-4 items-center '>
        <div>
          <h1 className='text-5xl font-bold mb-4'>
            Global <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-200'>opportunity</span><br /> made possible
          </h1>
          <p className='mb-8 max-w-[400px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          <div className='flex'>
            <button className='py-2 px-4 flex items-center bg-blue-400 rounded-full mr-2'>
              <img src={arrow} width="20px" className='mt-1' />
              <p>Book a demo</p>
            </button>
            <button className='py-2 px-4 bg-transparent border-[1.5px] border-gray-400 rounded-full'>Watch our platform</button>
          </div>
        </div>
        <div className='h-[350px]'>
          <div className="w-full h-full bg-[url('./assets/girl1.svg')] bg-cover bg-center"></div>
        </div>
      </section>
    </>
  )
}

export default App