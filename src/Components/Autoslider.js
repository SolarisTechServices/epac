import React from 'react'
import './Auto.css'
import { vanmahotsav, natframes, pantheongreenavengers, beyondcrisis, earthmatters, jumanji } from '../Images'

function Autoslider() {
    return (
        <div>
            <link
                href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                rel="stylesheet"
            />

            <div class="container mx-auto px-4 sm:px-12 py-8 items-center ">
                <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white items-center relative">
                    <p className="items-center justify-center relative ml-14">
                        <span class="text-transparent bg-clip-text items-center justify-center bg-gradient-to-r from-green-500 to-green-300">Our Events</span>
                    </p>
                </h5>
                <div class="slider">
                    <div class="slide-track2">
                        <div class="slide mr-1 ml-1">
                            <img src={jumanji} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={natframes} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={pantheongreenavengers} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={vanmahotsav} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} />
                        </div>

                        <div class="slide mr-1 ml-1">
                            <img src={jumanji} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={pantheongreenavengers} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={beyondcrisis} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} />
                        </div>


                        <div class="slide mr-1 ml-1">
                            <img src={jumanji} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={pantheongreenavengers} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={beyondcrisis} />
                        </div>
                        <div class="slide mr-1 ml-1">
                            <img src={earthmatters} />
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Autoslider