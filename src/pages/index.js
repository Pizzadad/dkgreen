import React from 'react'
import '../style/global.css';
import '../components/global/globalComponent.css';

import Background from '../components/main/background';
import Backgroundproducts from '../components/products/backgroundproducts';

import WhattsapButton from '../components/global/whattsapButton';
import Footer from '../components/global/footer';
import Seo from '../components/global/Seo';

const index = () => {
  return (
   <main>
      <Seo
        tittle = "Avocadog | Healthy Food"
        description = "Resolucion de  tareas, examenes y clases particulares de matematica y fisica para estudiantes de primaria y secundaria del Peru"
      />

        <Background />
        <Backgroundproducts />
        <WhattsapButton />
        <Footer />
    </main>
  )
}

export default index
