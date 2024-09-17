import { createContext, useState, ReactNode, useEffect } from 'react'
import {  } from '../@types/interfaces'

export type Globals = {
    theme: string,
}

export type SpecificGlobals = {
    theme: string,
}

export type GlobalsContextValue = {
    globals: Globals,
    saveGlobals: (updateGlobals: Globals) => void
}

interface GlobalsProviderProps {
    children: ReactNode
    pageGlobals?: SpecificGlobals | void
  }

const initialGlobals: Globals = {
    theme: 'light',
}

export const GlobalsContext = createContext<GlobalsContextValue>({
    saveGlobals: () => null,
    globals: initialGlobals
})

export const GlobalsProvider = ({ children, pageGlobals }: GlobalsProviderProps) => {
    const [globals, setGlobals] = useState<Globals>({...initialGlobals})

    const saveGlobals = (updatedGlobals: Globals) => {
        console.log(updatedGlobals)
        setGlobals(updatedGlobals)
    }

    return <GlobalsContext.Provider value={{ globals, saveGlobals }}>{children}</GlobalsContext.Provider>

}

export const GlobalsConsumer = GlobalsContext.Consumer