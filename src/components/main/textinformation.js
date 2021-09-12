
import React, { Fragment } from 'react'
import Logo from './logo'

const textinformation = () => {
    
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        
        window.scrollTo({
          left: 0,
          top: location,
        })
      }
    
    return (
        <Fragment>
                <Logo />
                <h1 className="text-left  text-gray-800 font-medium text-xl lg:text-5xl pb-4 uppercase italic">
                    Unos segundos en la boca,
                    <p className="text-white bg-black w-11/12 transform -skew-x-12">
                        una vida en las caderas.
                    </p>
                    Come sabio, te queremos  
                    <div className="flex flex-row">
                        <p className="mr-2">
                            saludable
                        </p>
                        <p className="not-italic w-1/2 ">🥪</p>
                    </div>
                </h1>                
                <div className="mt-4">
                    <a
                     onClick={handleClick}
                     href="#priccesDiv"
                     className="
                    bg-transparent py-2 px-4 border font-semibold uppercase border-black text-gray-800
                    lg:rounded-tr-lg lg:rounded-none rounded-full
                    hover:bg-black   hover:text-white   hover:border-transparent">
                        Ver platillos
                    </a>
                    
                </div>
            
        </Fragment>
    )
}

export default textinformation
