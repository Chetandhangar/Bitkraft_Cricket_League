import { useBitkraft} from '../../contexts/bitkraft-context';
import { useTab} from '../../contexts/tab-context';
import { useCurrentDetails} from '../../contexts/current-context'

export function Players() {

  const { PLAYERS } = useBitkraft();
  const {setTab} = useTab();
  const {setCurrentPlayer} = useCurrentDetails()

  function handleClick(tab,player){
    setTab(tab)
    setCurrentPlayer(player)
  }

  return (
      <div className="App">
        <div>
          Players List
        </div>
        <div>
          {PLAYERS.map((player) => (
            <div key={player.id}>
               <img src={player.image_url} alt={player.firstname}></img>
              <h1><small>Name : </small>{`${player.firstname} ${" "} ${player.lastname}`}</h1>
              <button onClick={() => handleClick('player_details',player)}>See More</button>
              </div>
          ))}
        </div>
      </div>
    );
  }