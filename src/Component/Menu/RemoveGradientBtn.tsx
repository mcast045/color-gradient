import React, { useContext } from 'react'
import { RGBContext } from '../../Context/RGBContext'
import { IconContext } from '../../Context/IconContext'
import { removeGradient, saveGradient } from '../../Helpers/localStorage'

export interface RemoveGradientBtnProps {
    i: number,
    rawGradient: number[],
    getGradients: (gradient: number[]) => number[],
    setGradients: React.Dispatch<React.SetStateAction<any[]>>
}

const RemoveGradientBtn: React.FC<RemoveGradientBtnProps> = ({ i, setGradients, getGradients, rawGradient }) => {

    const { rgbValues } = useContext(RGBContext)
    const { setCopyIconClass, copyIconClass } = useContext(IconContext)

    const removeSavedGradient = (startIdx: number, e: React.FormEvent): void => {
        if ((e.target as HTMLDivElement).className === 'fas fa-trash' || (e.target as HTMLButtonElement).className === 'btn removeBtn pointer') {
            const VALUES_PER_GRADIENT = 6
            const index = startIdx * VALUES_PER_GRADIENT
            const removedRgbValues = rawGradient.splice(index, 6)
            removeGradient()

            //Prevent empty gradient array in localStorage
            if (rawGradient.length > 0)
                saveGradient(rawGradient)

            //Re-renders Menu
            setGradients(getGradients(rawGradient))

            //Change save icon if current gradient = the removed, saved, gradient 
            if (rgbValues.every((value: number, i: number) => value === removedRgbValues[i]))
                setCopyIconClass({ ...copyIconClass, save: 'far fa-save' })
        }
    }

    return (
        <button
            className='btn removeBtn pointer'
            title='Remove Gradient'
            onClick={(e) => removeSavedGradient(i, e)}>
            <i className="fas fa-trash" />
        </button>
    );
}

export default RemoveGradientBtn;