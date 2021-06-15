import {useCurrentDetails} from '../../contexts/current-context';
import { useTab } from '../../contexts/tab-context'

export function RenderTeamDetails(){
    const {setTab } = useTab(); 
    const { currentTeam} = useCurrentDetails();
    console.log('from renderDetails')
    console.log(currentTeam);


    function clickHandler(tab){
        setTab(tab)
    }
    return(
        <div>
            <div>
                <button onClick={() => clickHandler('teams')}>Back</button>
            </div>
            <div>
            <h1>{currentTeam.name}</h1>
            <img src={currentTeam.image_url} alt={currentTeam.short_name}></img>
            <h2>{currentTeam.short_name}</h2>
            <h2>Captain : {currentTeam.captain}</h2>
            <h2>Vice Captain : {currentTeam.vice_captain}</h2>
            <h3><small>Squad : </small> {`${currentTeam.squad}`} </h3>
            <p>{currentTeam.description}</p>
            </div>
        </div>
    ) 
}
