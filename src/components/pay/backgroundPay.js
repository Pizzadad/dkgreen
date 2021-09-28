import React, { Fragment } from 'react'
import FormPago from './FormPago'

import Qr from './qr'

const backgroundPay = () => {
    return (
        <Fragment>
            <div className="h-full md:h-screen  md:w-full w-screen bg-green-375
            md:bg-green-55">
                <div className="flex pt-4 md:pt-0 md:flex-row flex-col w-full h-full">
                    <div className="flex flex-col md:w-5/12 w-full md:h-full h-1/2 bg-green-375">
                        <Qr/>
                    </div>
                    <div className="md:flex md:w-1/12 md:h-full md:overflow-hidden hidden">               
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full fill-current text-green-375 stroke-current stroke-1">
                            <path 
                                id="wave"
                                d="M208.08,0.00 C-29.62,107.06 411.11,72.53 200.80,150.00 L0.00,150.00 L0.00,0.00 Z"
                                >
                            </path>
                        </svg>                  
                    </div>
                    <div className="flex flex-col md:w-6/12 w-full md:h-full h-1/2 ">
                        <FormPago />
                        
                    </div>
                </div>
                
            </div>       
        </Fragment>
    )
}

export default backgroundPay
