import React, { useContext, useState, useEffect } from 'react'
import { RGBContext } from '../../Context/RGBContext'
import { IconContext } from '../../Context/IconContext'
import { setTextColor, rgbToHex } from '../../Helpers/ColorConverters'

export interface ColorDescriptionProps {

}

const ColorDescription: React.FC<ColorDescriptionProps> = () => {

    const { rgbValues } = useContext(RGBContext)
    const { copyIconClass, setCopyIconClass } = useContext(IconContext)

    const [redOne, greenOne, blueOne, redTwo, greenTwo, blueTwo] = rgbValues

    const [isShowingCopyOne, setIsShowingCopyOne] = useState(false)
    const [isShowingCopyTwo, setIsShowingCopyTwo] = useState(false)

    const [colorOneHex, setColorOneHex] = useState('')
    const [colorTwoHex, setColorTwoHex] = useState('')

    useEffect(() => {
        setColorOneHex(rgbToHex(redOne, greenOne, blueOne))
        setColorTwoHex(rgbToHex(redTwo, greenTwo, blueTwo))
    }, [redOne, redTwo, greenOne, greenTwo, blueOne, blueTwo])

    const copyHex = (): void => {
        if (isShowingCopyOne && copyIconClass.color_1 !== 'fas fa-check') {
            setCopyIconClass({ ...copyIconClass, color_1: 'fas fa-check', color_2: 'fas fa-copy' })
            navigator.clipboard.writeText(colorOneHex)
        } else if (isShowingCopyTwo && copyIconClass.color_2 !== 'fas fa-check') {
            setCopyIconClass({ ...copyIconClass, color_1: 'fas fa-copy', color_2: 'fas fa-check' })
            navigator.clipboard.writeText(colorTwoHex)
        }
    }

    return (
        <div className='color_container'>
            <div className='color_flex'>
                <div
                    className='color-1'
                    style={{ color: setTextColor(colorOneHex) }}>
                    <div
                        onMouseEnter={() => setIsShowingCopyOne(!isShowingCopyOne)}
                        onMouseLeave={() => setIsShowingCopyOne(!isShowingCopyOne)}>
                        <div className='flex reverse-column'>
                            <div className='color-1_values'>{`HEX: ${colorOneHex}`}</div>
                            <div style={{ visibility: isShowingCopyOne ? 'visible' : 'hidden' }}><i className={`${copyIconClass.color_1} icon-absolute pointer`} title='Copy HEX' onClick={() => copyHex()} /></div>
                        </div>
                        <div className='color-1_values'>{`RGB: (${redOne}, ${greenOne}, ${blueOne})`}</div>
                    </div>
                </div>

                <div
                    className='color-2'
                    style={{ color: setTextColor(colorTwoHex) }}>
                    <div
                        onMouseEnter={() => setIsShowingCopyTwo(!isShowingCopyTwo)}
                        onMouseLeave={() => setIsShowingCopyTwo(!isShowingCopyTwo)}>
                        <div className='flex'>
                            {<div style={{ visibility: isShowingCopyTwo ? 'visible' : 'hidden' }}><i className={`${copyIconClass.color_2} icon-absolute pointer`} title='Copy HEX' onClick={() => copyHex()} /></div>}
                            <div className='color-2_values'>{`HEX: ${colorTwoHex}`}</div>
                        </div>
                        <div className='color-2_values'>{`RGB: (${redTwo}, ${greenTwo}, ${blueTwo})`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorDescription;