import React, { useState, useEffect, useContext } from 'react'
import './Menu.scss'
import { getGradient, removeGradient, saveGradient } from '../../Helpers/localStorage'
import { rgbToHex, setTextColor } from '../../Helpers/ColorConverters'
import { RGBContext } from '../../Context/RGBContext'

export interface MenuProps {

}

const Menu: React.FC<MenuProps> = () => {

    const gradient = JSON.parse(getGradient()!)
    const [gradients, setGradients]: any[] = useState([])
    // const [isRemovingGradient, setIsRemoveingGradient] = useState(false)

    const { slideMenu, rgbValues, setRgbValues, setCopyIconClass, copyIconClass } = useContext(RGBContext)

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

    const getSavedGradient = (gradient: number[], e: React.FormEvent): void => {
        if ((e.target as HTMLDivElement).className !== 'fas fa-trash' && (e.target as HTMLDivElement).className !== 'btn removeBtn pointer') {
            console.log((e.target as HTMLDivElement).className)
            setRgbValues(gradient)
            setCopyIconClass({ ...copyIconClass, save: 'fas fa-check' })
        }
    }

    const removeSavedGradient = (startIdx: number, e: React.FormEvent): void => {
        if ((e.target as HTMLDivElement).className === 'fas fa-trash' || (e.target as HTMLButtonElement).className === 'btn removeBtn pointer') {
            const VALUES_PER_GRADIENT = 6
            const index = startIdx * VALUES_PER_GRADIENT
            gradient.splice(index, 6)
            removeGradient()

            //Prevent empty gradient array in localStorage
            if (gradient.length > 0)
                saveGradient(gradient)

            //Re-renders Menu
            setGradients(getGradients(gradient))

            if (gradient.length === 0)
                setCopyIconClass({ ...copyIconClass, save: 'far fa-save' })
        }
    }

    useEffect(() => {
        if (gradient && gradients.length * 6 !== gradient.length)
            setGradients(getGradients(gradient))
        else if (!gradient)
            setGradients([])
    }, [gradient, gradients.length])

    return (
        <div className={`menu_container ${slideMenu}`}>

            <h3 className='menu_title'>Saved Gradients</h3>
            <div className='underline'></div>

            <div className='menu_gradient_container'>
                {gradients.length === 0 ?
                    <div className='menu_empty'>No Saved Gradients</div>
                    :
                    gradients.map((gradient: number[], i: number) => (

                        <div key={i} onClick={(e) => getSavedGradient(gradient, e)} className='menu_gradient pointer' style={{ background: `linear-gradient(to right, rgba(${gradient[0]}, ${gradient[1]}, ${gradient[2]}, 1), rgba(${gradient[3]}, ${gradient[4]}, ${gradient[5]}, 1))` }}>
                            <div className='menu_gradient_content' >

                                <div className='menu_gradient_content-1' style={{ color: setTextColor(rgbToHex(gradient[0], gradient[1], gradient[2])) }}>
                                    <span>{`HEX: ${rgbToHex(gradient[0], gradient[1], gradient[2])}`}</span>
                                    <span>{`RGB: (${gradient[0]}, ${gradient[1]}, ${gradient[2]})`}</span>
                                </div>

                                <div className='menu_gradient_content-2' style={{ color: setTextColor(rgbToHex(gradient[3], gradient[4], gradient[5])) }}>
                                    <span>{`HEX: ${rgbToHex(gradient[3], gradient[4], gradient[5])}`}</span>
                                    <span>{`RGB: (${gradient[3]}, ${gradient[4]}, ${gradient[5]})`}</span>
                                </div>


                                <button
                                    className='btn removeBtn pointer'
                                    title='Remove Gradient'
                                    onClick={(e) => removeSavedGradient(i, e)}>
                                    <i className="fas fa-trash" />
                                </button>

                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}


export default Menu;