import { createContext, useContext, useState, ReactNode } from 'react'

type Context = {
    slideMenu: string,
    isShowingMenu: boolean,
    setSlideMenu: React.Dispatch<React.SetStateAction<string>>,
    setIsShowingMenu: React.Dispatch<React.SetStateAction<boolean>>
}

type Props = {
    children: ReactNode
}

const initialContext = {
    slideMenu: '',
    isShowingMenu: false,
    setSlideMenu: () => { },
    setIsShowingMenu: () => { }
}

const MenuContext = createContext<Context>(initialContext)

const MenuContextProvider = ({ children }: Props) => {
    const [isShowingMenu, setIsShowingMenu] = useState(false)
    const [slideMenu, setSlideMenu] = useState('slideIn')

    const value = {
        isShowingMenu,
        setIsShowingMenu,
        slideMenu,
        setSlideMenu,
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

const useMenuContext = () => {
    return useContext(MenuContext)
}

export {
    MenuContext,
    MenuContextProvider,
    useMenuContext,
}