import React, { Fragment } from 'react'
import BackgroundPay from '../components/pay/backgroundPay'
import Seo from '../components/global/Seo';

const pago = () => {
    return (
        <Fragment>

            <Seo
            tittle = "Avocadog | Healthy Food - Pagos"
            description = "Medios de pagos y pedidos para Healthy Food"
            />

            <BackgroundPay />
        </Fragment>
    )
}

export default pago
