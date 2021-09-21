import React, { Fragment } from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import './paycss.css';

const qr = () => {
    return (
        <Fragment>
            <div className="px-3 h-full flex flex-col space-y-2 items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full h-5/12">            
                    <h2 className="font-bold text-center text-2xl md:text-3xl text-black">
                        Primero realicemos el pago a través de Yape, Plin o Nº de cuenta
                    </h2>
                    <p className="text-center text-lg md:text-xl text-gray-600 mt-3">Puedes escanear el QR de Yape o a través de las aplicaciones a nuestros números 🤗</p>                             
                </div>
                <div className="hidden md:flex md:flex-row md:w-full md:mt-6 md:h-1/12">
                    <div className="flex justify-end w-1/2 h-full">
                        <svg
                        className="opacity-50 transform rotate-90 mr-6"
                        xmlns="http://www.w3.org/2000/svg"
                        
                        version="1.1"
                        
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 415.262 415.261"
                        
                        >
                        <g>
                            <path
                            d="M414.937,374.984c-7.956-24.479-20.196-47.736-30.601-70.992c-1.224-3.06-6.12-3.06-7.956-1.224   c-10.403,11.016-22.031,22.032-28.764,35.496h-0.612c-74.664,5.508-146.88-58.141-198.288-104.652   c-59.364-53.244-113.22-118.116-134.64-195.84c-1.224-9.792-2.448-20.196-2.448-30.6c0-4.896-6.732-4.896-7.344,0   c0,1.836,0,3.672,0,5.508C1.836,12.68,0,14.516,0,17.576c0.612,6.732,2.448,13.464,3.672,20.196   C8.568,203.624,173.808,363.356,335.376,373.76c-5.508,9.792-10.403,20.195-16.523,29.988c-3.061,4.283,1.836,8.567,6.12,7.955   c30.6-4.283,58.14-18.972,86.292-29.987C413.712,381.104,416.16,378.656,414.937,374.984z M332.928,399.464   c3.673-7.956,6.12-15.912,10.404-23.868c1.225-3.061-0.612-5.508-2.448-6.12c0-1.836-1.224-3.061-3.06-3.672   c-146.268-24.48-264.996-124.236-309.06-259.489c28.764,53.244,72.828,99.756,116.28,138.924   c31.824,28.765,65.484,54.468,102.204,75.888c28.764,16.524,64.872,31.824,97.92,21.421l0,0c-1.836,4.896,5.508,7.344,7.956,3.672   c7.956-10.404,15.912-20.196,24.48-29.376c8.567,18.972,17.748,37.943,24.479,57.527   C379.44,382.94,356.796,393.956,332.928,399.464z"
                            />
                        </g>
                        </svg>
                    </div>
                    <div className="flex justify-start w-1/2 h-full">
                        <svg
                        className="opacity-50 ml-6"
                        xmlns="http://www.w3.org/2000/svg"
                        id="rowtwo"
                        version="1.1"
                        
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 415.262 415.261"                        
                        >
                        <g>
                            <path
                            d="M414.937,374.984c-7.956-24.479-20.196-47.736-30.601-70.992c-1.224-3.06-6.12-3.06-7.956-1.224   c-10.403,11.016-22.031,22.032-28.764,35.496h-0.612c-74.664,5.508-146.88-58.141-198.288-104.652   c-59.364-53.244-113.22-118.116-134.64-195.84c-1.224-9.792-2.448-20.196-2.448-30.6c0-4.896-6.732-4.896-7.344,0   c0,1.836,0,3.672,0,5.508C1.836,12.68,0,14.516,0,17.576c0.612,6.732,2.448,13.464,3.672,20.196   C8.568,203.624,173.808,363.356,335.376,373.76c-5.508,9.792-10.403,20.195-16.523,29.988c-3.061,4.283,1.836,8.567,6.12,7.955   c30.6-4.283,58.14-18.972,86.292-29.987C413.712,381.104,416.16,378.656,414.937,374.984z M332.928,399.464   c3.673-7.956,6.12-15.912,10.404-23.868c1.225-3.061-0.612-5.508-2.448-6.12c0-1.836-1.224-3.061-3.06-3.672   c-146.268-24.48-264.996-124.236-309.06-259.489c28.764,53.244,72.828,99.756,116.28,138.924   c31.824,28.765,65.484,54.468,102.204,75.888c28.764,16.524,64.872,31.824,97.92,21.421l0,0c-1.836,4.896,5.508,7.344,7.956,3.672   c7.956-10.404,15.912-20.196,24.48-29.376c8.567,18.972,17.748,37.943,24.479,57.527   C379.44,382.94,356.796,393.956,332.928,399.464z"
                            />
                        </g>
                        </svg>
                    </div>         
                </div>
                <div className="flex flex-row w-full h-6/12 font-mono">
                    <div className="hidden md:flex md:w-1/2 md:h-full">
                        <StaticImage 
                            imgClassName="w-full"
                            className="shadow-lg hover:shadow-2xl"
                            alt="Img Raiz asesorias academicas"
                            src="../../images/yape.jpg"
                            objectPosition
                            loading="eager"
                            imgStyle={{ width: "100%" }}       
                        />     
                    </div>
                    <div className="flex flex-col items-center md:items-start justify-center md:justify-start md:w-1/2 w-full h-full">
                        <div className="text-lg md:text-xl font-semibold uppercase underline">Números para Yape o Plin</div>
                        <div className="flex flex-row space-x-4 md:flex-col md:space-y-1">
                            <div className="flex flex-row">
                                <span className="mr-1">♥ 
                                </span>
                                <p className="text-black text-lg md:text-xl">999999999</p>                           
                            </div>
                            <div className="flex flex-row">
                                <span className="mr-1">♥
                                </span>
                                <p className="text-black text-lg md:text-xl">999999999</p>                       
                            </div>                        
                        </div>

                        <div className="text-lg md:text-xl font-semibold uppercase underline">Números de cuenta</div>
                        <div className="flex flex-row space-x-4 md:flex-col md:space-y-1">
                            <div className="flex flex-row">
                                <span className="mr-1">♦ 
                                </span>
                                <p className="text-black text-lg md:text-xl">999999999</p>                           
                            </div>
                            <div className="flex flex-row">
                                <span className="mr-1">♦
                                </span>
                                <p className="text-black text-lg md:text-xl">999999999</p>                       
                            </div>                        
                        </div>
                    </div>
                </div>
               
            </div>
        </Fragment>
    )
}

export default qr
