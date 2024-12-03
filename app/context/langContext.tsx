"use client";
import { createContext, useContext, useState } from "react";
import {LangContextType} from "@/app/types/types"

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({children, defaultLang = "fr"}:{children: React.ReactNode; defaultLang?: string} ){
    const [lang, setLang] = useState(defaultLang)

    return (
        <LangContext.Provider value={{lang, setLang}}>
            {children}
        </LangContext.Provider>
    )

}

export function useLang() {
    const context =useContext(LangContext)
  
    if (context === undefined){
      throw new Error ("useLang must be used within a LangProvider")
    }
    return context
  }
  