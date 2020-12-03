import { createContext } from 'react'

interface IContext {
    rgbValues: number[]
    background: string,
    setRgbValues: React.Dispatch<React.SetStateAction<number[]>>,
}

export const RGBContext = createContext<IContext>({
    rgbValues: [0, 0, 0],
    background: '',
    setRgbValues: () => { }
})