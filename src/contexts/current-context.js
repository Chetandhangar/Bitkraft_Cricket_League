import {useContext, createContext, useState} from 'react'


export const CurrentDetailsContext = createContext();

export function CurrentDetailsProvider({children}){
    const [currentTeam, setCurrentTeam] = useState([])
    return(
        <CurrentDetailsContext.Provider value={{currentTeam, setCurrentTeam}}>
            {children}
        </CurrentDetailsContext.Provider>
    );
};

export function useCurrentDetails(){
    return useContext(CurrentDetailsContext)
};