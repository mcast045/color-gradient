import { createContext } from 'react'

interface IContext {
    rgbValues: number[]
    background: string,
    copyIconClass: { color_1: string; color_2: string; save: string },
    slideMenu: string,
    isShowingMenu: boolean,
    setRgbValues: React.Dispatch<React.SetStateAction<number[]>>,
    setCopyIconClass: React.Dispatch<React.SetStateAction<{ color_1: string; color_2: string; save: string }>>
    setSlideMenu: React.Dispatch<React.SetStateAction<string>>,
    setIsShowingMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const RGBContext = createContext<IContext>({
    setRgbValues: () => { },
    setCopyIconClass: () => { },
    setIsShowingMenu: () => { },
    setSlideMenu: () => { },
    rgbValues: [0, 0, 0],
    background: '',
    slideMenu: '',
    copyIconClass: { color_1: '', color_2: '', save: '' },
    isShowingMenu: false
})