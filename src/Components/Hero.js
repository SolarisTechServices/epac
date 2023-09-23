import React from 'react'
import { Card } from 'flowbite-react'

function Hero() {
    return (
        //     <div>    
        // <div class="flex flex-col lg:flex-row ">
        //   <div class="bg-blue-300 relative  w-full m-12 ">Item1</div>
        //   <div class="bg-emerald-300 relative  w-full m-12 ">Item2</div>
        // </div>
        // </div>
        <div >
            <div class="h-auto mt-4 mb-4 md:flex">

                <div
                    class="relative overflow-hidden md:flex md:w-1/2 i m-12 justify-around items-center ">
                    <div className='z-40' >
                        <h1 class=" font-bold text-4xl font-sans">ContactUs</h1>
                        <p class=" mt-1">Message us with your query and we will get back to you as soon as possible!</p>
                    </div>
                    <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 "></div>
                    <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div class="flex h-auto md:w-1/2 justify-center items-center ">
                    <div className="flex items-center justify-center p-12">

                        <div className=" w-full ">
                            <Card className='w-full bg-green-100'
                                href="#"
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">E.P.A.C</span> 
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p>
                                    Welcome to the digital home of Club EPAC (Environment Protection and Awareness Club) at Birla Institute of Technology, 
                                    Mesra! We are a passionate and dedicated group of individuals who share a common goal: to champion environmental 
                                    protection and raise awareness about the pressing ecological issues that affect our planet today. 
                                    Here, you'll discover our mission, our projects, and our commitment to creating a sustainable future 
                                    for generations to come. Join us as we embark on a journey to make a positive impact on our environment 
                                    and inspire change within our campus and beyond. Together, we can make a world of difference. 
                                    Explore, engage, and empower with Club EPAC!
                                    </p>
                                </p>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero