import React, { useState, useEffect } from 'react'
import './Menu.scss'
import { getGradient } from '../../Helpers/localStorage'
import { useMenuContext } from '../../Context'
import MapMenuGradients from './MapMenuGradients'

export interface MenuProps {

}

const Menu: React.FC<MenuProps> = () => {

    const rawGradient = JSON.parse(getGradient()!)
    const [savedGradients, setSavedGradients]: any[] = useState([])

    const { slideMenu } = useMenuContext()

    const getGradients = (gradient: number[]): number[] => {
        const allSavedGradients: any[] = []
        const TWO_RGB_COUNT = 6
        if (gradient.length > TWO_RGB_COUNT) {
            let i = 0
            while (i < gradient.length) {
                allSavedGradients.push([gradient[i], gradient[i + 1], gradient[i + 2], gradient[i + 3], gradient[i + 4], gradient[i + 5]])
                i = i + TWO_RGB_COUNT
            }
            return allSavedGradients
        } else if (gradient.length === TWO_RGB_COUNT) {
            allSavedGradients.push([...gradient])
            return allSavedGradients
        } else return allSavedGradients
    }

    useEffect(() => {
        if (rawGradient && savedGradients.length * 6 !== rawGradient.length)
            setSavedGradients(getGradients(rawGradient))
        else if (!rawGradient)
            setSavedGradients([])
    }, [rawGradient, savedGradients.length])

    return (
        <div className={`menu_container ${slideMenu}`}>

            <h3 className='menu_title'>Saved Gradients</h3>
            <div className='underline'></div>

            <div className='menu_gradient_container'>
                {savedGradients.length === 0 ?
                    <div className='menu_empty'>No Saved Gradients</div>
                    :
                    <MapMenuGradients savedGradients={savedGradients} setSavedGradients={setSavedGradients} rawGradient={rawGradient} getGradients={getGradients} />
                }
            </div>
        </div>
    );
}


export default Menu;