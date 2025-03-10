import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className="w-11/12 max-w-3xl text-center flex flex-col h-screen mx-auto items-center justify-center gap-4">
                <div className="user-i ">
                    <Image
                        src={"/assests/user.png"}
                        alt='user'
                        width={100}
                        height={100}
                    />
                </div>

                <h1 className='w-xl text-gray-50 text-lg sm:text-[55px] font-Ovo sm:w-[40vw] leading-normal'>Full Stack Developer </h1>
                <h5 className='text-gray-400 text-xs sm:text-lg font-Ovo sm:w-[35vw]'>I am a full Stack Developer from India, Have experience in Full Stack Development</h5>
                <div className='flex mt-6'>
                    <a href="#connect" className='bg-black flex items-center sm:text-lg text-xs font-Ovo gap-2 rounded-full p-3 sm:px-8 sm:py-3 text-white'>
                        connect with me <span>
                            <Image
                                src={"/assests/right.png"}
                                alt='right'
                                width={15}
                                height={15}
                            />
                        </span>
                    </a>
                    <a href="#download" download className=' flex items-center ml-4 bg-gray-400 font-Ovo sm:text-lg text-xs gap-2 rounded-full p-3 sm:px-8 sm:py-3 text-black border border-gray-900'>
                        my resume <Image
                            src={"/assests/downloadArrow.png"}
                            alt='right'
                            width={15}
                            height={15}
                        />
                    </a>
                </div>
                <div className="socials flex justify-center gap-4 mt-8 bottom-0 pb-10 absolute">
                    <div className='w-1/4 '>
                        <Image
                            src={"/assests/twitter.svg"}
                            alt="twitter"
                            width={50}
                            height={50}
                            className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer'
                        />
                    </div>
                    <div className='w-1/4'>
                        <Image
                            src={"/assests/github.svg"}
                            alt="github"
                            width={50}
                            height={50}
                            className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer '
                        />
                    </div>
                    <div className='w-1/4'>
                        <Image
                            src={"/assests/linkedin.svg"}
                            alt="linkedin"
                            width={50}
                            height={50}
                         className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer '
                            
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header