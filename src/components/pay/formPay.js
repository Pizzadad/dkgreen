import React, { Fragment, useState } from 'react'

import ConfettiGlobal from '../global/ConfettiGlobal';


const FormPay = () => {
    const [confetti, setConfetti] = useState(false)
    return (
        <Fragment>
            {confetti ? <ConfettiGlobal isCopied = {confetti} /> : ""}
           
            <div className="px-3 h-full flex flex-col space-y-2 items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full h-1/5"> 
                   
                    <h2 className="font-bold text-center text-xl md:text-3xl text-black">
                        Ahora llenemos el formulario para visualizar y preparar su pedido
                    </h2>
                                               
                </div>          
                    <div className="w-full h-4/5 py-6 flex flex-col justify-center">
                        <div className="mx-auto">
                            <div className="px-6 pt-6 md:pb-1 pb-3 bg-white  shadow md:rounded-t-3xl rounded-3xl">
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Llene los campos correctamente 🙏</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">No queremos llevartelo frio, por eso las entregas son cada 30 min de hora posterior a la hora del pedido</p>
                                </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="pt-4 text-base leading-6 space-y-3 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex flex-col">
                                            <p className="leading-loose">Ingresa tu celular para comunicarnos</p>
                                            <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="999999999"/>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="leading-loose">Ingresa tu D.N.I. para emitirte una boleta</p>
                                            <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Tambien para futuros descuentos :)"/>
                                        </div>
                                        
                                        <div className="flex flex-row space-x-4">
                                            <div className="flex flex-col w-1/2">
                                                <p className="leading-loose">Platillo</p>
                                                <select name="cars" id="cars" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                                                    <option value="1">Galleta de Avena</option>
                                                    <option value="2">Paquete de Hamburguesas de Lenteja</option>
                                                    <option value="3">Especial de Atún</option>
                                                    <option value="4">Desayuno Saludable</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col w-1/2">
                                                <p className="leading-loose">Cantidad</p>
                                                <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="leading-loose">Ingresa tu dirección</p>
                                            <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Cobertura solo en Pueblo Libre"/>
                                        </div>
                                        <div className="flex flex-row space-x-4">
                                            <div className="flex flex-col w-1/2">
                                                <p className="leading-loose">Hora de llegada</p>
                                                <div className="relative focus-within:text-gray-600 text-gray-400">
                                                    <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                                                    <div className="absolute left-3 top-2">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="pt-3 flex items-center space-x-4">
                                        
                                        <button 
                                        onClick={() => {
                                            setConfetti(true) 
                                            setTimeout(() => setConfetti(false), 3000)}}
                                        className="bg-black flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none uppercase">
                                            Enviar Pedido</button>
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

export default FormPay
