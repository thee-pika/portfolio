"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { aboutImages } from '../Data/data'

const About = () => {
    const [clicked, setclicked] = useState(true)

    const handleClick = () => {
        setclicked(!clicked)
        console.log("clciked", clicked);
    }

    return (
        <div id="about" className='w-full scroll-mt-20 h-screen px-[12%] py-10 '>
            <h4 className='text-center font-Ovo text-gray-400'>Introduction</h4>
            <h2 className='text-center font-Ovo text-3xl text-gray-50'>About me</h2>

            <div className='flex justify-center mt-8'>
                <div className='w-1/3'>
                    <Image
                        src={"/assests/passport-img.png"}
                        alt="passport"
                        width={300}
                        height={600}
                    />
                </div>
                <div className='w-1/2 flex flex-col ml-20'>
                    <h2 className='text-gray-300 font-Ovo'>
                        I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth
                    </h2>
                    <div className='flex text-gray-100 gap-4 mt-4'>
                        <h4 className={`w-1/2 px-10 bg-gray-800 hover:bg-gray-900 ${clicked ? "bg-gray-950" : ""} rounded-md py-2 cursor-pointer`} onClick={handleClick}>Skills</h4>
                        <h4 className={`w-1/2 px-10 bg-gray-800  hover:bg-gray-900 ${clicked ? "" : "bg-gray-950"} rounded-md py-2 cursor-pointer`} onClick={handleClick}>Education</h4>
                    </div>

                    <div className={` w-full h-40 ${clicked ? "block " : "hidden"}`} >

                        <div className='flex h-full gap-3 mt-10'>
                            {
                                aboutImages.map((image, index) => (
                                    <div className='rounded-t-full w-14 h-full bg-gray-300 cursor-pointer flex justify-center items-start pt-[0.2rem] hover:bg-gray-50 hover:-translate-y-4 duration-500' key={index}>
                                        <Image
                                            src={image}
                                            alt={index}
                                            width={50}
                                            height={50}
                                            className='opacity-50 hover:opacity-100   '
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={` text-gray-50 ${clicked ? "hidden" : "block "} max-h-48 mt-4 overflow-y-scroll`}>
                        <h2 className={` text-gray-50`}> Completed DSA with Java </h2>
                        <Image
                            src={"/assests/certificate.png"}
                            alt="passport"
                            width={300}
                            height={280}
                            className='bg-white rounded-md cursor-pointer '
                        />
                       <div className='mt-8 flex flex-col items-end'>
                       <h3 className='font-bold text-lg text-gray-50 inline-flex gap-2'>
                       <Image
                            src={"/assests/college.svg"}
                            alt="college"
                            width={30}
                            height={30}
                            className='bg-white rounded-md cursor-pointer '
                        />

                        BSC Computer science</h3>
                        <p className='text-gray-500'>ST.Anns college for women</p>
                        <p className='text-gray-600'>2023-2026</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About