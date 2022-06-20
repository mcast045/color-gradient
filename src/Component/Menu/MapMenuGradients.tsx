import React, { Fragment } from 'react'
import { useRGBContext, useIconContext } from '../../Context'
import MenuGradients from './MenuGradients'
import RemoveGradientBtn from './RemoveGradientBtn'

export interface MapMenuGradientsProps {
    rawGradient: number[],
    savedGradients: any,
    getGradients: (gradient: number[]) => number[],
    setSavedGradients: React.Dispatch<React.SetStateAction<any[]>>
}

const MapMenuGradients: React.FC<MapMenuGradientsProps> = ({ savedGradients, setSavedGradients, rawGradient, getGradients }) => {

    const { setRgbValues } = useRGBContext()
    const { setCopyIconClass, copyIconClass } = useIconContext()

    const getSavedGradient = (gradient: number[], e: React.FormEvent): void => {
        if ((e.target as HTMLDivElement).className !== 'fas fa-trash' && (e.target as HTMLDivElement).className !== 'btn removeBtn pointer') {
            setRgbValues(gradient)
            setCopyIconClass({ ...copyIconClass, save: 'fas fa-check' })
        }
    }

    return (
        <Fragment>
            {savedGradients.map((savedGradient: number[], i: number) => (
                <div key={i} onClick={(e) => getSavedGradient(savedGradient, e)} className='menu_gradient pointer' style={{ background: `linear-gradient(to right, rgba(${savedGradient[0]}, ${savedGradient[1]}, ${savedGradient[2]}, 1), rgba(${savedGradient[3]}, ${savedGradient[4]}, ${savedGradient[5]}, 1))` }}>
                    <div className='menu_gradient_content' >
                        <MenuGradients savedGradient={savedGradient} />
                        <RemoveGradientBtn i={i} setSavedGradients={setSavedGradients} getGradients={getGradients} rawGradient={rawGradient} />
                    </div>
                </div>
            ))}
        </Fragment>
    );
}

export default MapMenuGradients;