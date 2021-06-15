import {useContext, createContext} from 'react'
import {COUNTRIES} from  '../shared/countries';
import { TEAMS } from '../shared/teams'

export const BitkraftContext = createContext();

export function BitkraftProvider({children}){
    return(
        <BitkraftContext.Provider value={{COUNTRIES, TEAMS}}>
            {children}
        </BitkraftContext.Provider>
    );
};

export function useBitkraft(){
    return useContext(BitkraftContext)
};