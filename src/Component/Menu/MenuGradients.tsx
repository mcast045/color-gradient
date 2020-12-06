import React, { Fragment, useEffect, useState } from 'react'
import { rgbToHex, setTextColor } from '../../Helpers/ColorConverters'

export interface MenuGradientsProps {
    savedGradient: number[]
}

const MenuGradients: React.FC<MenuGradientsProps> = ({ savedGradient }) => {

    const [currentGradientOne, setCurrentGradientOne] = useState('')
    const [currentGradientTwo, setCurrentGradientTwo] = useState('')

    //Convert RGB to HEX
    useEffect(() => {
        setCurrentGradientOne(rgbToHex(savedGradient[0], savedGradient[1], savedGradient[2]))
        setCurrentGradientTwo(rgbToHex(savedGradient[3], savedGradient[4], savedGradient[5]))
    }, [savedGradient])

    return (
        <Fragment>
            {currentGradientOne && currentGradientTwo &&
                <Fragment>
                    <div className='menu_gradient_content-1' style={{ color: setTextColor(currentGradientOne) }}>
                        <span>{`HEX: ${currentGradientOne}`}</span>
                        <span className='menu_gradient_content-rgb'>{`RGB: (${savedGradient[0]}, ${savedGradient[1]}, ${savedGradient[2]})`}</span>
                    </div>

                    <div className='menu_gradient_content-2' style={{ color: setTextColor(currentGradientTwo) }}>
                        <span>{`HEX: ${currentGradientTwo}`}</span>
                        <span className='menu_gradient_content-rgb'>{`RGB: (${savedGradient[3]}, ${savedGradient[4]}, ${savedGradient[5]})`}</span>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
}

export default MenuGradients;