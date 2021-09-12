import React, { Fragment } from 'react'

const Footer = () => {

    const yearToday = new Date().getFullYear();

    return (
        <Fragment>
           
                <div className="w-full h-18 px-8 py-3 fixed z-0 bottom-0 left-0 flex items-center sm:flex-row flex-row-reverse">
                    <div className="flex flex-row w-full justify-center">
                        
                        <p className="md:text-sm text-xs  text-white sm:ml-4 sm:pl-4 sm:py-2 ">© {yearToday} —
                            <a href="https://www.instagram.com/soy.pizzadad/" className=" text-white ml-1" rel="noopener noreferrer" target="_blank">@soy.pizzadad</a>
                        </p>
                    </div>
                    
                </div>
            
        </Fragment>
    )
}

export default Footer
