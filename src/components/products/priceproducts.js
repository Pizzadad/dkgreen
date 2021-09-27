import React, { Fragment } from 'react'
import CardProducts from './cardProducts'


const priceproducts = () => {
    return (
        <Fragment>
            
                <div className="container mx-auto h-full w-full" id="priccesDiv">
                    <div className="flex flex-col text-center w-full mb-2">
                        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white uppercase">Nuestros Platillos</h2>                     
                    </div>
                    <div className="flex flex-wrap">                                       
                        <CardProducts />
                        
                    </div>
                </div>
            
        </Fragment>
    )
}

export default priceproducts
