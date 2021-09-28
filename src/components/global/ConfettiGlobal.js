import React, { Fragment } from 'react'
import Confetti from '@reonomy/react-confetti-explosion';

const ConfettiGlobal = (props) => {
    
    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
      }
    
    return (
        <Fragment>
            <div className="absolute lg:top-0 top-96 lg:right-0">
                <Confetti active={props.isCopied} config={config} />
            </div>
        </Fragment>
    )
}

export default ConfettiGlobal
