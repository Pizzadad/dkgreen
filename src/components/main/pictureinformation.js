import {StaticImage} from 'gatsby-plugin-image'
//import { StaticImage } from 'gatsby-plugin-image'
import React, { Fragment } from 'react'

const pictureinformation = () => {
    

    return (
        <Fragment>           
                <StaticImage 
                    imgClassName="lg:h-full lg:w-full w-screen"
                    alt="Img Raiz asesorias academicas"
                    src="../../images/HandBrow-min.png"
                    objectPosition
                    loading="eager"
                    imgStyle={{ height: "100%" }}            
                />                                                 
        </Fragment>
    )
}

export default pictureinformation
