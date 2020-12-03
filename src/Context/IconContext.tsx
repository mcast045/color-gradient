import { createContext } from 'react'

interface IContext {
    copyIconClass: { color_1: string; color_2: string; save: string },
    setCopyIconClass: React.Dispatch<React.SetStateAction<{ color_1: string; color_2: string; save: string }>>
}

export const IconContext = createContext<IContext>({
    copyIconClass: { color_1: '', color_2: '', save: '' },
    setCopyIconClass: () => { }
})