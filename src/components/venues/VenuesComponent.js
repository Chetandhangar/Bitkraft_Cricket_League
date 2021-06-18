import { useBitkraft } from '../../contexts/bitkraft-context'
import { useTab } from '../../contexts/tab-context';
import { useCurrentDetails } from '../../contexts/current-context'

export function Venues() {

  const { VENUES } = useBitkraft();
  const { setTab } = useTab();
  const { setCurrentVenue } = useCurrentDetails()
  
  function clickHandler(tab,venue){
    setTab(tab)
    setCurrentVenue(venue)
  }

  return (
      <div className="App">
        <div>
          Stadium List
        </div>
        <div>
          {VENUES.map((venue) => (
            <div key={venue.id}> 
             <img src={venue.image_url} alt={venue.stadium_name}></img>
              <h1>{venue.venue}</h1>
              <h2>{venue.stadium_name}</h2>
              <button onClick={() => clickHandler('venue_details',venue)}>See More</button>
            </div>
          ))}
        </div>
      </div>
    );
  }