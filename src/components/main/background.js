import React from 'react'

import Principal from './principal'

const background = () => {
    return (
        <main>
            <div className="h-screen lg:w-full w-screen 
            bg-gradient-to-t from-green-350 via-green-325 to-green-350">
                <Principal/>               
            </div>
        </main>
    )
}

export default background
