import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { rgbToHex, randomRGB } from '../Helpers/ColorConverters'

type Props = {
    children: ReactNode
}

type Context = {
    rgbValues: number[]
    background: string,
    colorOneHex: string,
    colorTwoHex: string,
    setRgbValues: React.Dispatch<React.SetStateAction<number[]>>,
}

const initialRGBContext = {
    rgbValues: [0, 0, 0],
    background: '',
    colorOneHex: '',
    colorTwoHex: '',
    setRgbValues: () => { }
}

const RGBContext = createContext<Context>(initialRGBContext)

const RGBContextProvider = ({ children }: Props) => {
    const [colorOneHex, setColorOneHex] = useState('')
    const [colorTwoHex, setColorTwoHex] = useState('')
    const [rgbValues, setRgbValues] = useState(randomRGB())
    const [background, setBackground] = useState('')

    useEffect(() => {
        setBackground(`linear-gradient(to right, rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 1), rgba(${rgbValues[3]}, ${rgbValues[4]}, ${rgbValues[5]}, 1))`)
        setColorOneHex(rgbToHex(rgbValues[0], rgbValues[1], rgbValues[2]))
        setColorTwoHex(rgbToHex(rgbValues[3], rgbValues[4], rgbValues[5]))
    }, [rgbValues])

    const value = {
        colorOneHex,
        setColorOneHex,
        colorTwoHex,
        setColorTwoHex,
        rgbValues,
        setRgbValues,
        background,
        setBackground,
    }

    return (
        <RGBContext.Provider value={value}>
            {children}
        </RGBContext.Provider>
    )
}

const useRGBContext = () => {
    return useContext(RGBContext)
}

export {
    RGBContext,
    RGBContextProvider,
    useRGBContext,
}