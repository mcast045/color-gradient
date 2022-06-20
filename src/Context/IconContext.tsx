import { createContext, useState, useContext, ReactNode } from 'react'

type Props = {
    children?: ReactNode
}
type Context = {
    copyIconClass: { color_1: string; color_2: string; save: string },
    setCopyIconClass: React.Dispatch<React.SetStateAction<{ color_1: string; color_2: string; save: string }>>
}

const IconContext = createContext<Context>({
    copyIconClass: { color_1: '', color_2: '', save: '' },
    setCopyIconClass: () => { }
})

const IconContextProvider = ({ children }: Props) => {
    const [copyIconClass, setCopyIconClass] = useState({
        color_1: 'fas fa-copy', color_2: 'fas fa-copy', save: 'far fa-save'
    })

    const value = {
        copyIconClass,
        setCopyIconClass
    }

    return (
        <IconContext.Provider value={value}>
            {children}
        </IconContext.Provider>
    )
}

const useIconContext = () => {
    return useContext(IconContext)
}

export {
    IconContext,
    IconContextProvider,
    useIconContext,
}
