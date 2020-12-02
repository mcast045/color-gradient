import React, { Fragment, useContext } from 'react'
import { RGBContext } from '../../Context/RGBContext'
import MenuGradients from './MenuGradients'
import RemoveGradientBtn from './RemoveGradientBtn'


export interface MapMenuGradientsProps {
    rawGradient: number[],
    gradients: any,
    getGradients: (gradient: number[]) => number[],
    setGradients: React.Dispatch<React.SetStateAction<any[]>>
}

const MapMenuGradients: React.FC<MapMenuGradientsProps> = ({ gradients, setGradients, rawGradient, getGradients }) => {

    const { setCopyIconClass, copyIconClass, setRgbValues } = useContext(RGBContext)

    const getSavedGradient = (gradient: number[], e: React.FormEvent): void => {
        if ((e.target as HTMLDivElement).className !== 'fas fa-trash' && (e.target as HTMLDivElement).className !== 'btn removeBtn pointer') {
            setRgbValues(gradient)
            setCopyIconClass({ ...copyIconClass, save: 'fas fa-check' })
        }
    }

    return (
        <Fragment>
            {gradients.map((gradient: number[], i: number) => (
                <div key={i} onClick={(e) => getSavedGradient(gradient, e)} className='menu_gradient pointer' style={{ background: `linear-gradient(to right, rgba(${gradient[0]}, ${gradient[1]}, ${gradient[2]}, 1), rgba(${gradient[3]}, ${gradient[4]}, ${gradient[5]}, 1))` }}>
                    <div className='menu_gradient_content' >
                        <MenuGradients gradient={gradient} />
                        <RemoveGradientBtn i={i} setGradients={setGradients} getGradients={getGradients} rawGradient={rawGradient} />
                    </div>
                </div>
            ))}
        </Fragment>
    );
}

export default MapMenuGradients;