import {useContext, createContext} from 'react'
import {COUNTRIES} from  '../shared/countries';
import { TEAMS } from '../shared/teams';
import { PLAYERS } from '../shared/players';
import { VENUES } from '../shared/venues';

export const BitkraftContext = createContext();

export function BitkraftProvider({children}){
    return(
        <BitkraftContext.Provider value={{COUNTRIES, TEAMS, PLAYERS, VENUES}}>
            {children}
        </BitkraftContext.Provider>
    );
};

export function useBitkraft(){
    return useContext(BitkraftContext)
};