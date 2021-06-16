import { useCurrentDetails} from '../../contexts/current-context';
import { useTab} from '../../contexts/tab-context';
export function RenderVenueDetails(){
        
    const { setTab } = useTab();
    const { currentVenue} = useCurrentDetails()

    function clickHandler(tab){
        setTab(tab)
    }

    return(
        <div>
            <div>
                <button onClick={() => clickHandler('venues')}>Back</button>
            </div>
            <div>
                <img src={currentVenue.image_url} alt={currentVenue.stadium_name}></img>
                <h4>{currentVenue.venue}</h4>
             <h1>{currentVenue.stadium_name}</h1>
            </div>
        </div>
    )

}