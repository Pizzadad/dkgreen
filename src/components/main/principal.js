import React, { Fragment } from 'react'
import Pictureinformation from './pictureinformation'
import Textinformation from './textinformation'

const principal = () => {
    return (
        <Fragment>
            <div className="container mx-auto flex flex-col md:flex-row h-screen w-full py-16">
                <div className="flex flex-col justify-center lg:items-start items-center  w-full h-1/2 lg:w-1/2 lg:h-full">
                    <Textinformation />
                </div>
                <div className="flex justify-center items-center w-full h-1/2 lg:w-1/2 lg:h-full">
                    <Pictureinformation />
                </div>
            </div>
        </Fragment>
    )
}

export default principal
