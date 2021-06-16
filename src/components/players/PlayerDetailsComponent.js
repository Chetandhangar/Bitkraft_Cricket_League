import { useCurrentDetails} from '../../contexts/current-context';
import { useTab } from '../../contexts/tab-context';

export function RenderPlayerDetails(){
    
    const{setTab} = useTab();
    const {currentPlayer} = useCurrentDetails();

    function clickHandler(tab){
        setTab(tab)
    }
    return(
        <div>
            <div>
                <button onClick={() => clickHandler('players')}>Back</button>
            </div>
            <div>
                <img src={currentPlayer.image_url} alt={currentPlayer.firstname}></img>
                <h1>{`${currentPlayer.firstname} ${" "} ${currentPlayer.lastname}`}</h1>
                <h2>Team : {currentPlayer.teamname}</h2>
                <h2>Role : {currentPlayer.Role}</h2>
                <p>{currentPlayer.description}</p>
            </div>
        </div>
    )
}