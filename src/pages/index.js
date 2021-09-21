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
        description = "Dark Kitchen/Restaurant de comida saludable en pueblo libre"
      />

        <Background />
        <Backgroundproducts />
        <WhattsapButton />
        <Footer />
    </main>
  )
}

export default index
