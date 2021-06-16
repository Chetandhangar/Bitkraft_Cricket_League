import {useContext, createContext, useState} from 'react'


export const CurrentDetailsContext = createContext();

export function CurrentDetailsProvider({children}){
    const [currentTeam, setCurrentTeam] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState([])
    const [currentVenue, setCurrentVenue]  = useState([])
    const [currentMatch , setCurrentMatch] = useState([])
    return(
        <CurrentDetailsContext.Provider 
        value={{currentTeam, setCurrentTeam,
               currentPlayer, setCurrentPlayer, 
               currentVenue, setCurrentVenue,
               currentMatch, setCurrentMatch }}>
            {children}
        </CurrentDetailsContext.Provider>
    );
};

export function useCurrentDetails(){
    return useContext(CurrentDetailsContext)
};