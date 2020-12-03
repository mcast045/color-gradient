import React, { useContext } from 'react'
import MenuController from './MenuController'
import { saveGradient, getGradient } from '../../Helpers/localStorage'
import { RGBContext } from '../../Context/RGBContext'

export interface HeaderUtilsProps {
    randomRGB: () => number[]
}

const HeaderUtils: React.FC<HeaderUtilsProps> = ({ randomRGB }) => {

    const { rgbValues, background, copyIconClass, setCopyIconClass, isShowingMenu, setRgbValues } = useContext(RGBContext)
    const rawGradient = JSON.parse(getGradient()!)

    const findNewColors = (): void => {
        setCopyIconClass({ color_1: 'fas fa-copy', color_2: 'fas fa-copy', save: 'far fa-save' })
        setRgbValues(randomRGB())
    }

    const saveClick = (): void => {
        if (copyIconClass.save !== 'fas fa-check') {
            saveGradient(rgbValues)
            setCopyIconClass({ ...copyIconClass, save: 'fas fa-check' })
        }
    }

    const isSaveBtnDisabled = (): boolean => {
        if (rawGradient && rawGradient.length > 29) return true
        else if (isShowingMenu) return true
        else return false
    }

    return (
        <div className='header_util'>
            <button
                className='btn pointer randomPicker'
                title='Random Gradient'
                style={{ background }}
                onClick={() => findNewColors()}
                disabled={isShowingMenu}>
                <i className="fas fa-random" />
            </button>

            <button
                className='btn saveBtn pointer'
                title='Save Current Gradient'
                style={{ background }}
                onClick={() => saveClick()}
                disabled={isSaveBtnDisabled()}>
                <i className={`${copyIconClass.save}`} />
            </button>

            <MenuController />
        </div>
    );
}

export default HeaderUtils;