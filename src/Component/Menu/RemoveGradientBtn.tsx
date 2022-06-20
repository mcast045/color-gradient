import React from 'react'
import { useRGBContext, useIconContext } from '../../Context'
import { removeGradient, saveGradient } from '../../Helpers/localStorage'

export interface RemoveGradientBtnProps {
    i: number,
    rawGradient: number[],
    getGradients: (gradient: number[]) => number[],
    setSavedGradients: React.Dispatch<React.SetStateAction<any[]>>
}

const RemoveGradientBtn: React.FC<RemoveGradientBtnProps> = ({ i, setSavedGradients, getGradients, rawGradient }) => {

    const { rgbValues } = useRGBContext()
    const { setCopyIconClass, copyIconClass } = useIconContext()

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
            setSavedGradients(getGradients(rawGradient))

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