import React, { Fragment, useState  } from 'react'

import IconDinner from './iconDinner'
import { Link } from 'gatsby'
const CardProducts = () => {
    
    const [products, setproducts] = useState([{
        id: 1,
        titulo: 'Galleta de Avena',
        descripcion:'Hecha a base de harina de avena, crema de avellana y cacao, recomendable como premio para los menores del hogar',
        imagen: 'https://dulcesfrivolidades.files.wordpress.com/2014/06/c4968-img_2235.jpg',
        precio: '0',
        centimos: '.50'
    },
    {
        id: 2,
        titulo: 'Hamburguesas de Lenteja (x10)',
        descripcion:'Hecha a base de harina de avena y lentejas, un acompañamiento al almuerzo delicioso y alto en proteinas, en un paquete vienen 10 hamburguesas de lenteja',
        imagen: 'https://i0.wp.com/borderperiodismo.com/wp-content/uploads/2018/06/hamb-lenteja-cruda.jpg?ssl=1',
        precio: '10',
        centimos: '.00'
    },
    {
        id: 3,
        titulo: 'Especial de Atún',
        descripcion:'Sandwich de atún con palta, pan integral y verduras frescas, delicioso y balanceado desayuno o entrada de almuerzo',
        imagen: 'https://s1.dmcdn.net/v/OaN591VtM4C8BVgdn/x720',
        precio: '4',
        centimos: '.00'
    },
    {
        id: 4,
        titulo: 'Desayuno Saludable',
        descripcion:'Panqueques de avena acompañado de frutas como topping, pueden desayunar 4 personas',
        imagen: 'https://apuntesnaturistas.files.wordpress.com/2014/07/img_0777.jpg',
        precio: '25',
        centimos: '.00'
    }])

    
    return (
        <Fragment>
                
            {
                    products.map(item =>{
                        
                            return(
                                <div key={item.id} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                                    <div  className="container w-full  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                                        
                                        <img 
                                            className="object-contain h-1/2 w-full"
                                            alt={item.titulo}
                                            src={item.imagen}
                                                                                 
                                        />           
                                        <div className="text-center relative pt-14 pb-8">
                                            <span className="absolute transform -translate-x-10 -translate-y-24 z-50 text-black bg-white rounded-full hover:text-green-375 transition-all duration-200 cursor-pointer">
                                                <IconDinner />
                                            </span>
                                            <div className="text-justify w-full  px-10">
                                                <div className="mb-5">
                                                    <h3 className="font-bold uppercase text-2xl mb-5">{item.titulo}</h3>
                                                    <p className="text-sm">{item.descripcion}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="inline-block align-bottom md:mr-5 mr-2">
                                                        <span className="text-2xl leading-none align-baseline">S/.</span>
                                                        <span className="font-bold text-5xl leading-none align-baseline">{item.precio}</span>
                                                        <span className="text-2xl leading-none align-baseline">{item.centimos}</span>
                                                    </div>
                                                    <div className="inline-block align-middle">
                                                        <Link 
                                                            to="/pago"
                                                        >
                                                            <button className="bg-transparent py-2 px-4 border font-semibold uppercase border-black text-gray-800
                                                                rounded-full
                                                            hover:bg-black  md:text-sm text-xs  hover:text-white   hover:border-transparent">
                                                                Ir a comprar                                                                                                 
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )                                      
                    })
                }

                
                                        
            
        </Fragment>
    )
}

export default CardProducts
