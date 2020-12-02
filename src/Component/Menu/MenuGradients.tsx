import React, { Fragment } from 'react'
import { rgbToHex, setTextColor } from '../../Helpers/ColorConverters'

export interface MenuGradientsProps {
    gradient: number[]
}

const MenuGradients: React.FC<MenuGradientsProps> = ({ gradient }) => {
    return (
        <Fragment>
            <div className='menu_gradient_content-1' style={{ color: setTextColor(rgbToHex(gradient[0], gradient[1], gradient[2])) }}>
                <span>{`HEX: ${rgbToHex(gradient[0], gradient[1], gradient[2])}`}</span>
                <span>{`RGB: (${gradient[0]}, ${gradient[1]}, ${gradient[2]})`}</span>
            </div>

            <div className='menu_gradient_content-2' style={{ color: setTextColor(rgbToHex(gradient[3], gradient[4], gradient[5])) }}>
                <span>{`HEX: ${rgbToHex(gradient[3], gradient[4], gradient[5])}`}</span>
                <span>{`RGB: (${gradient[3]}, ${gradient[4]}, ${gradient[5]})`}</span>
            </div>
        </Fragment>
    );
}

export default MenuGradients;