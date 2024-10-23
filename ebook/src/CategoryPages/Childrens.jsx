import React from 'react'
import cbook2Image from "../CategoryPages/img/cbook2.webp"; 

const Childrens = () => {
  return (
    <div>
        <div className="bg-[url('C:/Users/ELCOT/dev/github/E-Book/ebook/src/CategoryPages/img/childrenbg.avif')] bg-cover bg-center w-full h-[50vh]">
            <div className='bg-black opacity-50 h-full'>
                 <h1 className='text-5xl text-center pt-60 font-bold text-white '>CHILDREN BOOKS</h1>
            </div>
            <h1 className='text-center text-5xl font-serif font-bold p-5'>Title</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 w-full h-screen'>
                <div className='text-center'>
                    <img src={cbook2Image} alt="book1" className='w-[200px] h-[200px]'/>
                    <p>Children of the Rush</p>
                </div>
                <div className='text-center'>
                    <img src={cbook2Image} alt="book1" className='w-[250px] h-[200px]'/>
                    <p>Children of the Rush</p>
                </div>
                <div className='text-center'>
                    <img src={cbook2Image} alt="book1" className='w-[250px] h-[200px]'/>
                    <p>Children of the Rush</p>
                </div>
                <div className='text-center'>
                    <img src={cbook2Image} alt="book1" className='w-[250px] h-[200px]'/>
                    <p>Children of the Rush</p>
                </div>
                <div className='text-center'>
                    <img src={cbook2Image} alt="book1" className='w-[250px] h-[200px]'/>
                    <p>Children of the Rush</p>
                </div>
                <div className='text-center'>
                    <img src={cbook2Image} alt="book1" className='w-[250px] h-[200px]'/>
                    <p>Children of the Rush</p>
                </div>
                <div className='text-center'>
                    <img src={cbook2Image} alt="book1" className='w-[250px] h-[200px]'/>
                    <p>Children of the Rush</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Childrens