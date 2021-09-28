import React, { Fragment } from 'react'
import BackgroundPay from '../components/pay/backgroundPay'
import Seo from '../components/global/Seo';
import WhattsapButton from '../components/global/whattsapButton';
import Footer from '../components/global/footer';
const pago = () => {
    return (
        <Fragment>

            <Seo
            tittle = "Enma | Healthy Food - Pagos"
            description = "Medios de pagos y pedidos para Healthy Food"
            />

            <BackgroundPay />
            <WhattsapButton />
            
        </Fragment>
    )
}

export default pago
