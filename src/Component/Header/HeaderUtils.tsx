import React, { useContext } from 'react'
import MenuController from './MenuController'
import { saveGradient, getGradient } from '../../Helpers/localStorage'
import { RGBContext } from '../../Context/RGBContext'

export interface HeaderUtilsProps {

}

const HeaderUtils: React.FC<HeaderUtilsProps> = () => {

    const { rgbValues, background, copyIconClass, setCopyIconClass, isShowingMenu } = useContext(RGBContext)
    const rawGradient = JSON.parse(getGradient()!)

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