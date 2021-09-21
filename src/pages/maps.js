import React, { Fragment } from 'react'
import Seo from '../components/global/Seo';

const maps = () => {
    return (
        <Fragment>
            <Seo
            tittle = "Avocadog | Healthy Food - Maps"
            description = "Zona de cobertura de pedidos para Healthy Food"
            />
            <iframe src="https://www.google.com/maps/d/embed?mid=12PQ5FrEFUrl6cSmLd38EVB7QJRTarFT2" className="w-full h-screen"></iframe>
        </Fragment>
    )
}

export default maps
