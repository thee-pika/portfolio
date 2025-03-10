"use client"

import React from 'react'
import Image from 'next/image'
import { projectsData } from '../Data/data'

const Projects = () => {
    console.log("proj", projectsData[0].include[0])
    return (
        <div id='project' className='w-full px-[12%] flex flex-col justify-evenly items-center min-h-screen scroll-mt-20 text-gray-50'>
            <h1>All Projects</h1>
            
            <div className='w-full' >
                {
                    projectsData.map((project) => (
                        <div className={`w-full ${project.classnames}`} key={project.id}>
                            <div  className='bg-gray-900 rounded-md m-4 p-4 shadow-md w-[55vw] flex flex-wrap'>
                                <div className='w-1/2'>
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.id}
                                        width={450}
                                        height={450}
                                        className='bg-white rounded-md cursor-pointer mb-4'
                                    />
                                </div>

                                <div className='w-1/2' key={project.title}>
                                    <h1 className='text-xl font-bold text-center hover:font-extrabold'>{project.title}</h1>
                                    <p className='text-gray-600 text-center'>{project.description}</p>
                                    <span className='ml-4'>includes </span>
                                    {
                                        project.include.map((i, index) => (
                                            <p key={index} className='text-gray-600 text-start pl-4'>{i}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects