import React from 'react'
import Image from 'next/image'

const Connect = () => {
    return (
        <>
            <div id="connect" className='scroll-mt-20 px-[15%] pt-10 flex flex-col items-center w-xl'>
                <h2 className='text-gray-600 font-Ovo'>Connect with me </h2>
                <h1 className='text-4xl font-Ovo text-gray-50'> Get in Touch </h1>
                <p className='font-Ovo text-gray-400 w-xl mt-4 text-center '>I'd  love to hear from you! If you have any questions, comments or
                    <br />  feedback, please use the form below</p>
                <div className='flex justify-between mt-8 mb-4 '>
                    <input
                        type='text'
                        placeholder='Enter Your name'
                        className=' bg-gray-50 border m-4 border-gray-300 focus:ring-blue-500 focus:border-blue-500  text-gray-900 text-sm  rounded-md px-8 py-2 w-1/2'
                        required
                    />
                    <input
                        type='email'
                        placeholder='Enter Your email'
                        className=' bg-gray-50 border m-4 border-gray-300 text-gray-50 text-sm  rounded-md px-8 py-2 w-1/2'
                        required
                    />
                </div>
                <textarea
                    cols={10}
                    placeholder='Enter Your Message'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  p-4 rounded-md w-2/4 mt-4 '
                />

                <button className='bg-gray-600 hover:bg-gray-950 flex w-md items-center mt-8 sm:text-lg text-sm font-Ovo gap-2 rounded-full p-3 sm:px-8 sm:py-3 text-white'> Submit now
                    <span>
                        <Image
                            src={"/assests/right.png"}
                            alt='right'
                            width={15}
                            height={15}
                        />
                    </span>
                </button>
                <div className='mt-8 mb-4'>
                    <h2 className='text-2xl font-bold mb-4 text-gray-50'>Deepika</h2>
                    <div className='flex gap-4 justify-center items-center'>
                        <span>
                            <Image
                                src={"/assests/mail.png"}
                                alt='right'
                                width={20}
                                height={20}
                            />
                        </span><span className='text-gray-50'>mogilideepika218@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="top flex justify-end w-full">
                <a href='#top'>
                    <Image
                        src={"/assests/top.svg"}
                        alt='right'
                        width={45}
                        height={45}
                        className='opacity-50 hover:opacity-100  mr-20 mb-4'
                    />
                </a>
            </div>
        </>
    )
}

export default Connect