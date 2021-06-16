import { useBitkraft } from '../../contexts/bitkraft-context';
import { useTab } from '../../contexts/tab-context';
import { useCurrentDetails } from '../../contexts/current-context'

export function Matches() {

  const { MATCHES,} = useBitkraft();
  const { setTab } = useTab();
  const { setCurrentMatch} = useCurrentDetails();

  
  function clickHandler(tab,match){
    setTab(tab)
    setCurrentMatch(match)
  }


    return (
      <div className="App">
        <div>
          <div>
            {MATCHES.map((match) =>(
              <div key={match.id}>
                <h4>Match {match.match_number} of 2</h4>
                <h4>{`${match.home_team_name}  `}<small>{match.home_team_total_runs}/{match.home_team_wickets_loose}</small></h4>
                <h4>Vs</h4>
                <h4>{`${match.away_team_name}  `}<small>{match.away_team_total_runs}/{match.away_team_wickets_loose}</small></h4>
                <button onClick={()=>clickHandler('match_summary',match)}>Summary</button>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }