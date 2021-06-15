import {useContext, createContext, useState} from 'react'


export const TabContext = createContext();

export function TabProvider({children}){
    const [tab, setTab] = useState("countries")
    return(
        <TabContext.Provider value={{tab, setTab}}>
            {children}
        </TabContext.Provider>
    );
};

export function useTab(){
    return useContext(TabContext)
};