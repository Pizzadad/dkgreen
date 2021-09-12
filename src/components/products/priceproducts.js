import React, { Fragment } from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import IconDinner from './iconDinner'

const priceproducts = () => {
    return (
        <Fragment>
            
                <div className="container mx-auto h-full w-full" id="priccesDiv">
                    <div className="flex flex-col text-center w-full mb-2">
                        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white uppercase">Nuestros Platillos</h2>                     
                    </div>
                    <div className="flex flex-wrap">                                       
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">                          
                            <div className="container w-full  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                                <StaticImage 
                                    imgClassName="w-full"
                                    alt="Comida saludable"
                                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-220e449.jpg"
                                    objectFit
                                    loading="eager"                                          
                                />           
                                <div className="text-center relative pt-14 pb-8">
                                    <span className="absolute transform -translate-x-10 -translate-y-24 z-50 text-black bg-white rounded-full hover:text-green-375 transition-all duration-200 cursor-pointer">
                                        <IconDinner />
                                    </span>
                                    <div className="text-justify w-full  px-10">
                                        <div className="mb-5">
                                            <h3 className="font-bold uppercase text-2xl mb-5">BLA BLA BLA BLA</h3>
                                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="inline-block align-bottom mr-5">
                                                <span className="text-2xl leading-none align-baseline">S/.</span>
                                                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                                                <span className="text-2xl leading-none align-baseline">.99</span>
                                            </div>
                                            <div className="inline-block align-middle">
                                                <button className="bg-transparent py-2 px-4 border font-semibold uppercase border-black text-gray-800
                                                    rounded-full
                                                hover:bg-black   hover:text-white   hover:border-transparent">
                                                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">                          
                            <div className="container w-full  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                                <StaticImage 
                                    imgClassName="w-full"
                                    alt="Comida saludable"
                                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-220e449.jpg"
                                    objectFit
                                    loading="eager"                                          
                                /> 
                                <div className="text-center relative pt-14 pb-8">
                                    <span className="absolute transform -translate-x-10 -translate-y-24 z-50 text-black bg-white rounded-full hover:text-green-375 transition-all duration-200 cursor-pointer">
                                        <IconDinner />
                                    </span>
                                    <div className="text-justify w-full  px-10">
                                        <div className="mb-5">
                                            <h3 className="font-bold uppercase text-2xl mb-5">BLA BLA BLA BLA</h3>
                                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="inline-block align-bottom mr-5">
                                                <span className="text-2xl leading-none align-baseline">S/.</span>
                                                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                                                <span className="text-2xl leading-none align-baseline">.99</span>
                                            </div>
                                            <div className="inline-block align-middle">
                                                <button className="bg-transparent py-2 px-4 border font-semibold uppercase border-black text-gray-800
                                                    rounded-full
                                                hover:bg-black   hover:text-white   hover:border-transparent">
                                                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">                          
                            <div className="container w-full  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                                <StaticImage 
                                    imgClassName="w-full"
                                    alt="Comida saludable"
                                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-220e449.jpg"
                                    objectFit
                                    loading="eager"                                          
                                /> 
                                <div className="text-center relative pt-14 pb-8">
                                    <span className="absolute transform -translate-x-10 -translate-y-24 z-50 text-black bg-white rounded-full hover:text-green-375 transition-all duration-200 cursor-pointer">
                                        <IconDinner />
                                    </span>
                                    <div className="text-justify w-full  px-10">
                                        <div className="mb-5">
                                            <h3 className="font-bold uppercase text-2xl mb-5">BLA BLA BLA BLA</h3>
                                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="inline-block align-bottom mr-5">
                                                <span className="text-2xl leading-none align-baseline">S/.</span>
                                                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                                                <span className="text-2xl leading-none align-baseline">.99</span>
                                            </div>
                                            <div className="inline-block align-middle">
                                                <button className="bg-transparent py-2 px-4 border font-semibold uppercase border-black text-gray-800
                                                    rounded-full
                                                hover:bg-black   hover:text-white   hover:border-transparent">
                                                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">                          
                            <div className="container w-full  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                                <StaticImage 
                                    imgClassName="w-full"
                                    alt="Comida saludable"
                                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-220e449.jpg"
                                    objectFit
                                    loading="eager"                                          
                                /> 
                                <div className="text-center relative pt-14 pb-8">
                                    <span className="absolute transform -translate-x-10 -translate-y-24 z-50 text-black bg-white rounded-full hover:text-green-375 transition-all duration-200 cursor-pointer">
                                        <IconDinner />
                                    </span>
                                    <div className="text-justify w-full  px-10">
                                        <div className="mb-5">
                                            <h3 className="font-bold uppercase text-2xl mb-5">BLA BLA BLA BLA</h3>
                                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="inline-block align-bottom mr-5">
                                                <span className="text-2xl leading-none align-baseline">S/.</span>
                                                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                                                <span className="text-2xl leading-none align-baseline">.99</span>
                                            </div>
                                            <div className="inline-block align-middle">
                                                <button className="bg-transparent py-2 px-4 border font-semibold uppercase border-black text-gray-800
                                                    rounded-full
                                                hover:bg-black   hover:text-white   hover:border-transparent">
                                                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            
        </Fragment>
    )
}

export default priceproducts
