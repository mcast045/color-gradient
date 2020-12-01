import React, { useEffect, useState } from 'react'
import './Colors.scss'
import { setTextColor, rgbToHex } from '../../Helpers/ColorConverters'

export interface ColorsProps {
    background: string,
    value: number[],
    copyIconClassOne: string,
    copyIconClassTwo: string,
    setCopyIconClassOne: React.Dispatch<React.SetStateAction<string>>,
    setCopyIconClassTwo: React.Dispatch<React.SetStateAction<string>>,
}

const Colors: React.FC<ColorsProps> = ({ value, background, setCopyIconClassOne, copyIconClassOne, copyIconClassTwo, setCopyIconClassTwo }) => {

    const [redOne, greenOne, blueOne, redTwo, greenTwo, blueTwo] = value

    const [colorOneHex, setColorOneHex] = useState('')
    const [colorTwoHex, setColorTwoHex] = useState('')
    const [isShowingCopyOne, setIsShowingCopyOne] = useState(false)
    const [isShowingCopyTwo, setIsShowingCopyTwo] = useState(false)

    useEffect(() => {
        setColorOneHex(rgbToHex(redOne, greenOne, blueOne))
        setColorTwoHex(rgbToHex(redTwo, greenTwo, blueTwo))
    }, [redOne, redTwo, greenOne, greenTwo, blueOne, blueTwo])

    const copyHex = () => {
        if (isShowingCopyOne) {
            setCopyIconClassOne('fas fa-check')
            setCopyIconClassTwo('fas fa-copy')
            navigator.clipboard.writeText(colorOneHex)
        } else if (isShowingCopyTwo) {
            setCopyIconClassOne('fas fa-copy')
            setCopyIconClassTwo('fas fa-check')
            navigator.clipboard.writeText(colorTwoHex)
        }
    }

    return (
        <div className='color_container' style={{ background }}>

            <div
                className='color-1'
                style={{ color: setTextColor(colorOneHex) }}>
                <div
                    onMouseEnter={() => setIsShowingCopyOne(!isShowingCopyOne)}
                    onMouseLeave={() => setIsShowingCopyOne(!isShowingCopyOne)}>
                    <div className='color-1_values'>{`HEX: ${colorOneHex}`}</div>
                    <div className='color-1_values'>{`RGB: (${redOne}, ${greenOne}, ${blueOne})`}</div>
                    {isShowingCopyOne && <i className={`${copyIconClassOne} icon-absolute`} title='Copy HEX' onClick={() => copyHex()} />}
                </div>
            </div>

            <div
                className='color-2'
                style={{ color: setTextColor(colorTwoHex) }}>
                <div
                    onMouseEnter={() => setIsShowingCopyTwo(!isShowingCopyTwo)}
                    onMouseLeave={() => setIsShowingCopyTwo(!isShowingCopyTwo)}>
                    <div className='color-2_values'>{`HEX: ${colorTwoHex}`}</div>
                    <div className='color-2_values'>{`RGB: (${redTwo}, ${greenTwo}, ${blueTwo})`}</div>
                    {isShowingCopyTwo && <i className={`${copyIconClassTwo} icon-absolute`} title='Copy HEX' onClick={() => copyHex()} />}
                </div>
            </div>

        </div>
    );
}

export default Colors;