import React, { useEffect } from 'react'
import { motion, useAnimate, useInView } from 'motion/react'

import arrow from './assets/arrow2.png'
import girl1 from './assets/girl1.svg'

import img1 from './assets/1.svg'
import img2 from './assets/2.svg'
import img3 from './assets/3.svg'
import img4 from './assets/4.svg'
import img5 from './assets/5.svg'
import img6 from './assets/6.svg'
import { stagger } from 'motion'

function App() {
  const [scope, animate] = useAnimate()
  // useEffect(() => {

  //   animate([
  //     [".other", { y: -400 }, { duration: .5, ease: "easeOut" }],
  //     [".imp", { y: -400 }, { duration: 3, ease: "easeOut" }],
  //     [".iml", { y: -396 }, { duration: 3, ease: "easeOut", at: "<" }]
  //   ])
  // }, [animate])

  const handlePlayAnim = () => {
    animate([
      [".imp", { y: -400, opacity: .8 }, { duration: 1, ease: "easeOut" }],
      [".imp1", { y: -400, opacity: .8 }, { duration: 1, ease: "easeOut", at: "<" }],
      [".other", { y: -800, opacity: .8 }, {duration:1, delay:stagger(0.1), at:"-1" }],
      [".img2",{opacity:1}, {duration:.6, ease:"easeOut", at:"-1"}],
      [".other", { y: 400, opacity: 1 }, { duration: 0.000001, at:0.5 }],
      [".imp", { y: 0, opacity: 1 }, { duration: 0.000001 }],
      [".iml", { y: 0, opacity: 1 }, { duration: 0.000001 }],
      [".imp1", { y: 400, opacity: 1 }, { duration: 0.000001, }],
      [".img2",{opacity:0}, {duration:.6, ease:"easeOut", at:"-1"}],
    ])
    
    // animate(".other", { y: -400, opacity: 0 }, {duration:.8, delay: stagger(0.1) })
  }
  return (
    <div ref={scope} className='w-screen overflow-hidden'>
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
      <section className='px-12 grid grid-cols-2 gap-4 items-center mb-8'>
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
            <button onClick={handlePlayAnim} className='py-2 px-4 bg-transparent border-[1.5px] border-gray-400 rounded-full'>Watch our platform</button>
          </div>
        </div>
        <div className='h-[400px] grid grid-cols-12 relative overflow-hidden'>
          <motion.div className="w-full h-full bg-[url('./assets/girl1.svg')] bg-cover bg-center absolute"></motion.div>
          <motion.div initial={{opacity:0}} className="img2 w-full h-full bg-[url('./assets/girl2.svg')] bg-cover bg-center absolute"></motion.div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#83d6e8] '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#ecc2c8]  '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#83d6e8] '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#ecc2c8]  '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#83d6e8] '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#ecc2c8] '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#83d6e8] '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#ecc2c8] '></motion.div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='other w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#83d6e8] '></motion.div>
          </div>
          <div className='z-10'>
            <div className='imp w-full h-full bg-linear-to-t from-[#815d4f] via-80% via-[#815d4f] to-95% to-[#d8e6f5]'></div>
          </div>
          <div className='z-10'>
            <motion.div initial={{ y: 400 }} className='imp1 w-full h-[800px] bg-linear-to-t from-[#0c547c] to-[#83d6e8] '></motion.div>
          </div>
          <div className='z-10'>
            <div className='imp w-full h-full bg-linear-to-t from-[#83d6e8]  to-[#ecc2c8]'></div>
          </div>
        </div>
      </section>
      <div className='mx-12 flex gap-2 w-full h-[60px] relative overflow-clip'>
        <motion.img src={img1} className='absolute' initial={{ x: 1300 }} animate={{ x: -300 }} transition={{ duration: 30, repeat: Infinity, delay: -0 * 5 }} />
        <motion.img src={img2} className='absolute' initial={{ x: 1300 }} animate={{ x: -300 }} transition={{ duration: 30, repeat: Infinity, delay: -1 * 5 }} />
        <motion.img src={img3} className='absolute' initial={{ x: 1300 }} animate={{ x: -300 }} transition={{ duration: 30, repeat: Infinity, delay: -2 * 5 }} />
        <motion.img src={img4} className='absolute' initial={{ x: 1300 }} animate={{ x: -300 }} transition={{ duration: 30, repeat: Infinity, delay: -3 * 5 }} />
        <motion.img src={img5} className='absolute' initial={{ x: 1300 }} animate={{ x: -300 }} transition={{ duration: 30, repeat: Infinity, delay: -4 * 5 }} />
        <motion.img src={img6} className='absolute' initial={{ x: 1300 }} animate={{ x: -300 }} transition={{ duration: 30, repeat: Infinity, delay: -5 * 5 }} />
      </div>
    </div>
  )
}

export default App